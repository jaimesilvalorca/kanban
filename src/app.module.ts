import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { TareasModule } from './tareas/tareas.module';
import { EstadosTareaModule } from './estados-tarea/estados-tarea.module';
import { LogEstadosTareaModule } from './log-estados-tarea/log-estados-tarea.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'.env'
    }),
    DatabaseModule,
    TareasModule,
    EstadosTareaModule,
    LogEstadosTareaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
