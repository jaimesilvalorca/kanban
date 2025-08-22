import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogEstadosTareaService } from './log-estados-tarea.service';
import { CreateLogEstadosTareaDto } from './dto/create-log-estados-tarea.dto';
import { UpdateLogEstadosTareaDto } from './dto/update-log-estados-tarea.dto';

@Controller('log-estados-tarea')
export class LogEstadosTareaController {
  constructor(private readonly logEstadosTareaService: LogEstadosTareaService) {}

  @Post()
  create(@Body() createLogEstadosTareaDto: CreateLogEstadosTareaDto) {
    return this.logEstadosTareaService.create(createLogEstadosTareaDto);
  }

  @Get()
  findAll() {
    return this.logEstadosTareaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logEstadosTareaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLogEstadosTareaDto: UpdateLogEstadosTareaDto) {
    return this.logEstadosTareaService.update(+id, updateLogEstadosTareaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logEstadosTareaService.remove(+id);
  }
}
