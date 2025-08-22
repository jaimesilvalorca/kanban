import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateEstadosTareaDto } from './dto/create-estados-tarea.dto';
import { UpdateEstadosTareaDto } from './dto/update-estados-tarea.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EstadosTarea } from './entities/estados-tarea.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstadosTareaService {


  constructor(
    @InjectRepository(EstadosTarea)
    private readonly estadosTareasModel: Repository<EstadosTarea>
  ) { }

  async create(createEstadosTareaDto: CreateEstadosTareaDto) {

    createEstadosTareaDto.descripcion = createEstadosTareaDto.descripcion.toLocaleUpperCase();

    try {

      const nuevoEstado = await this.estadosTareasModel.insert(createEstadosTareaDto);
      return { message: "Estado creado correctamente", id: nuevoEstado.identifiers[0].cod_estado };

    } catch (error) {

      this.handleExceptions(error);
    }



  }

  async findAll() {
    return await this.estadosTareasModel.find()
  }

  async findOne(termino: string) {

    let estado: EstadosTarea | null = null;

    if (!isNaN(+termino)) {
      estado = await this.estadosTareasModel.findOne({ where: { cod_estado: +termino } });

    }

    if (!estado) {
      estado = await this.estadosTareasModel.findOne({ where: { descripcion: termino.toLocaleUpperCase().trim() } });
    }

    if (!estado) throw new NotFoundException(`Estado con id, descripcion ${termino} not found`);
    

    return estado;
  }

  async update(termino: string, updateEstadosTareaDto: UpdateEstadosTareaDto) {

    if(!updateEstadosTareaDto) throw new BadRequestException(`No hay parametros para modificar`);
    
    const estado = await this.findOne(termino);
    if (updateEstadosTareaDto) updateEstadosTareaDto.descripcion = updateEstadosTareaDto.descripcion?.toLocaleUpperCase();

    try {

      await this.estadosTareasModel.update(estado.cod_estado, updateEstadosTareaDto);
      return { ...estado, ...updateEstadosTareaDto };

    } catch (error) {
      this.handleExceptions(error);
    }

  }

  async remove(id: number) {

    const { affected } = await this.estadosTareasModel.delete(id);
    if (affected === 0) throw new NotFoundException(`Id enviado no encontrado para eliminar ${id}`);
    return { message: `Estado con ID ${id} eliminado correctamente` };

  }

  private handleExceptions(error: any) {

    if (error.code === '23505') throw new BadRequestException(`Estado ya exist en la base de datos ${JSON.stringify(error.detail)}`);

    console.log(error)

    throw new InternalServerErrorException(`No puede crear el estado - Revisar logs`);
  }
}
