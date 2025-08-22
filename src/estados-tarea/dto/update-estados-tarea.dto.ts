import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadosTareaDto } from './create-estados-tarea.dto';

export class UpdateEstadosTareaDto extends PartialType(CreateEstadosTareaDto) {}
