import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
// import { Tag } from "./Tag"
// import { User } from "./User"

@Entity('compliments')
class Compliment {

    // sqlite id column
    // @PrimaryColumn()
    // readonly id: string

    // mysql id column

    @PrimaryGeneratedColumn()
    readonly id: number

    @Column()
    user_sender: number

    // @JoinColumn({name: 'user_sender'})
    // @ManyToOne(() => User, {cascade: true})
    // user_s = User


    @Column()
    user_receiver: number

    // @JoinColumn({name: 'user_receiver'})
    // @ManyToOne(() => User, {cascade: true})
    // user_r = User

    @Column()
    tag_id: number

    // @JoinColumn({name: 'tag_id'})
    // @ManyToOne(() => Tag, {cascade: true}) // it generate a problem with remotemysql.com database...
    // tag = Tag

    @Column()
    message: string

    @CreateDateColumn()
    created_at: Date

    // constructor() {
    //     if(!this.id){
    //         this.id = uuid()
    //     }
    // }

}

export {Compliment}