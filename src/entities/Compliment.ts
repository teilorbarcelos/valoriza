import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Tag } from "./Tag"
import { User } from "./User"

@Entity('compliments')
class Compliment {

    // sqlite id column
    // @PrimaryColumn()
    // readonly id: string

    // mysql id column

    @PrimaryGeneratedColumn()
    readonly id: number

    @Column()
    user_sender: number;

    @JoinColumn({ name: "user_sender" })
    @ManyToOne(() => User)
    userSender: User;


    @Column()
    user_receiver: number;

    @JoinColumn({ name: "user_receiver" })
    @ManyToOne(() => User, user => user.id)
    userReceiver: User;

    @Column()
    tag_id: number;

    @JoinColumn({ name: "tag_id" })
    @ManyToOne(() => Tag)
    tag: Tag;

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

export { Compliment }