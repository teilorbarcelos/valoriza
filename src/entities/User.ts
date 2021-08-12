import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm"
// import { v4 as uuid } from "uuid"

@Entity('users')
class User {

    // sqlite id column
    // @PrimaryColumn()
    // readonly id: string

    // mysql id column
    @PrimaryGeneratedColumn()
    readonly id: number
    
    @Column()
    name: string
    
    @Column()
    email: string
    
    @Column()
    admin: boolean

    @Column()
    password: string
    
    @CreateDateColumn()
    created_at: Date
    
    @UpdateDateColumn()
    updated_at: Date

    // sqlite constructor:
    // constructor() {
    //     if(!this.id){
    //         this.id = uuid
    //     }
    // }
}
export {User}