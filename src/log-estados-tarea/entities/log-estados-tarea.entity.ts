import { EstadosTarea } from "src/estados-tarea/entities/estados-tarea.entity";
import { Tareas } from "src/tareas/entities/tareas.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({schema:'kanban',name:'log_estados_tarea'})
export class LogEstadosTarea {

    @PrimaryGeneratedColumn()
    id_log:number

    @ManyToOne(()=>Tareas,(tarea)=>tarea.id_tarea)
    id_tarea:Tareas;

    @ManyToOne(()=>EstadosTarea,(estado)=>estado.cod_estado)
    cod_estado:EstadosTarea

    @Column({type:'varchar',length:25})
    rut:string;

    @Column({type:'timestamp',nullable:true,default:()=>'CURRENT_TIMESTAMP'})
    fecha:Date;

    @Column({type:'varchar',length:15})
    ip:string    

}
