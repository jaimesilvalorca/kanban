import { IsInt, IsPositive, IsString, MaxLength, Min, MinLength } from "class-validator";
import { EstadosTarea } from "src/estados-tarea/entities/estados-tarea.entity";

export class CreateTareaDto {

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    titulo:string;

    @IsString()
    @MinLength(3)
    @MaxLength(1000)
    descripcion:string;

    @IsString()
    @MinLength(3)
    @MaxLength(25)
    rut_usuario:string;
    
    @IsInt()
    @IsPositive()
    @Min(1)
    cod_estado:EstadosTarea
    
}
