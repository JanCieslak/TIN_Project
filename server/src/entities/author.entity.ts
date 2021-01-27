import { IsDate, IsNotEmpty, IsString, Length } from "class-validator";
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, Table, JoinColumn } from "typeorm";
import { Game } from "./game.entity";

@Entity()
export class Author {
    @PrimaryGeneratedColumn({ name: 'authorId' })
    id: number;

    @Column({ name: 'companyName' })
    @IsString()
    @Length(1, 100)
    companyName: string;

    @Column({ name: 'foundedIn' })
    @IsDate()
    foundedIn: Date;

    @OneToMany(type => Game, game => game.author)
    games: Game[];
}