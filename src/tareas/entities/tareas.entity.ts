import { EstadosTarea } from "src/estados-tarea/entities/estados-tarea.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity({schema:'kanban',name:'tareas'})
export class Tareas {
    @PrimaryGeneratedColumn()
    id_tarea:number;

    @Column({type:'varchar',length:100})
    titulo:string;

    @Column({type:'varchar',length:1000})
    descripcion:string;

    @Column({type:'timestamp',nullable:true,default:()=>'CURRENT_TIMESTAMP'})
    fecha_actualizacion: Date;

    @ManyToOne(() => EstadosTarea, (estado) => estado.cod_estado)
    @JoinColumn({ name: 'cod_estado' })
    cod_estado: EstadosTarea;

    @Column({type:'varchar',length:25})
    rut_usuario:string;

}


