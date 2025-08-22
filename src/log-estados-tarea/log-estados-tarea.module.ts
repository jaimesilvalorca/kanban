import { Module } from '@nestjs/common';
import { LogEstadosTareaService } from './log-estados-tarea.service';
import { LogEstadosTareaController } from './log-estados-tarea.controller';

@Module({
  controllers: [LogEstadosTareaController],
  providers: [LogEstadosTareaService],
})
export class LogEstadosTareaModule {}
