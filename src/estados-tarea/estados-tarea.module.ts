import { Module } from '@nestjs/common';
import { EstadosTareaService } from './estados-tarea.service';
import { EstadosTareaController } from './estados-tarea.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadosTarea } from './entities/estados-tarea.entity';

@Module({
  imports:[TypeOrmModule.forFeature([EstadosTarea])],
  controllers: [EstadosTareaController],
  providers: [EstadosTareaService],
})
export class EstadosTareaModule {}
