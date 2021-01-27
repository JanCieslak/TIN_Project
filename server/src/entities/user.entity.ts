import { IsString, Length } from "class-validator";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn({ name: 'userId' })
    id: number;

    @Column({ name: 'username' })
    @IsString()
    @Length(1, 100)
    username: string;

    @Column({ name: 'password' })
    @IsString()
    @Length(1, 300)
    password: string;

    @OneToOne(type => Person, person => person.user)
    @JoinColumn({ name: 'personId' })
    person: Person;
}