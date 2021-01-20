import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn({ name: 'user_id' })
    id: number;

    @Column({ name: 'username' })
    username: string;

    @Column({ name: 'password' })
    password: string;

    @OneToOne(type => Person, person => person.user)
    person: Person;
}