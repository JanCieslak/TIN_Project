import { IsDate } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";
import { OrderedGame } from "./ordered.game.entity";
import { Person } from "./person.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn({ name: 'orderId' })
    id: number;

    @Column({ name: 'date' })
    @IsDate()
    orderDate: Date;
    
    @ManyToOne(type => Person, person => person.orders)
    person: Person;

    @OneToMany(type => OrderedGame, orderedGame => orderedGame.order)
    orderedGames: OrderedGame[];
}