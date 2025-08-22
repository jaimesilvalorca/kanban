import { Injectable } from '@nestjs/common';
import { CreateLogEstadosTareaDto } from './dto/create-log-estados-tarea.dto';
import { UpdateLogEstadosTareaDto } from './dto/update-log-estados-tarea.dto';

@Injectable()
export class LogEstadosTareaService {
  create(createLogEstadosTareaDto: CreateLogEstadosTareaDto) {
    return 'This action adds a new logEstadosTarea';
  }

  findAll() {
    return `This action returns all logEstadosTarea`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logEstadosTarea`;
  }

  update(id: number, updateLogEstadosTareaDto: UpdateLogEstadosTareaDto) {
    return `This action updates a #${id} logEstadosTarea`;
  }

  remove(id: number) {
    return `This action removes a #${id} logEstadosTarea`;
  }
}
