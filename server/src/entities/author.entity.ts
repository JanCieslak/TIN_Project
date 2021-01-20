import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, Table } from "typeorm";
import { Game } from "./game.entity";

@Entity()
export class Author {
    @PrimaryGeneratedColumn({ name: 'author_id' })
    id: number;

    @Column({ name: 'company_name' })
    companyName: string;

    @Column({ name: 'founded_in' })
    foundedIn: Date;

    @OneToMany(type => Game, game => game.author)
    games: Game[];
}