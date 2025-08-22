import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { Tareas } from './entities/tareas.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TareasService {
  constructor(
    @InjectRepository(Tareas)
    private readonly tareasModel: Repository<Tareas>
  ) { }

  async create(createTareaDto: CreateTareaDto) {

    try {
      const nuevaTarea = await this.tareasModel.insert(createTareaDto)

      return nuevaTarea

    } catch (error) {
     
      console.log(error)
    }
    
  }

  async findAll() {
    return await this.tareasModel.find({
      relations:['cod_estado'],
      select:{
        id_tarea:true,
        titulo:true,
        descripcion:true,
        fecha_actualizacion:true,
        rut_usuario:true,
        
        cod_estado:{descripcion:true}
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} tarea`;
  }

  update(id: number, updateTareaDto: UpdateTareaDto) {
    return `This action updates a #${id} tarea`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarea`;
  }
}
