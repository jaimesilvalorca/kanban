import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({ schema: 'kanban', name: 'estados_tarea' })
export class EstadosTarea {

    @PrimaryColumn()
    cod_estado: number

    @Column({ type: 'varchar', length: 50 })
    descripcion: string

}
