import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreateEstadosTareaDto {


    @IsInt()
    @IsPositive()
    @Min(1)

    cod_estado:number;
    
    @IsString()
    @MinLength(1)
    descripcion:string;



}
