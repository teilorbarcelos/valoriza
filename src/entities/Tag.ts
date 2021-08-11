import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm"
// import { v4 as uuid } from "uuid"

@Entity('tags')
class Tag {

    // sqlite id column
    // @PrimaryColumn()
    // readonly id: string

    // mysql id column
    @PrimaryGeneratedColumn()
    readonly id: number

    @Column()
    name: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    // constructor() {
    //     if(!this.id){
    //         this.id = uuid()
    //     }
    // }
}

export {Tag}