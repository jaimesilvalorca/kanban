import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EstadosTareaService } from './estados-tarea.service';
import { CreateEstadosTareaDto } from './dto/create-estados-tarea.dto';
import { UpdateEstadosTareaDto } from './dto/update-estados-tarea.dto';


@Controller('estados-tarea')
export class EstadosTareaController {
  constructor(private readonly estadosTareaService: EstadosTareaService) {}

  @Post()
  create(@Body() createEstadosTareaDto: CreateEstadosTareaDto) {
    return this.estadosTareaService.create(createEstadosTareaDto);
  }

  @Get()
  findAll() {
    return this.estadosTareaService.findAll();
  }

  @Get(':termino')
  findOne(@Param('termino') termino: string,) {
    return this.estadosTareaService.findOne(termino);
  }

  @Patch(':termino')
  update(@Param('termino') termino: string, @Body() updateEstadosTareaDto: UpdateEstadosTareaDto) {
    return this.estadosTareaService.update(termino, updateEstadosTareaDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.estadosTareaService.remove(id);
  }
}
