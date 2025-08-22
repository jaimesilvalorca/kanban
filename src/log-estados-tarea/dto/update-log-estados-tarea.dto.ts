import { PartialType } from '@nestjs/mapped-types';
import { CreateLogEstadosTareaDto } from './create-log-estados-tarea.dto';

export class UpdateLogEstadosTareaDto extends PartialType(CreateLogEstadosTareaDto) {}
