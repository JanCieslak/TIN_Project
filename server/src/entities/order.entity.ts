import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";
import { OrderedGame } from "./ordered.game.entity";
import { Person } from "./person.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn({ name: 'order_id' })
    id: number;

    @Column({ name: 'date' })
    orderDate: Date;
    
    @ManyToOne(type => Person, person => person.orders)
    person: Person;

    @OneToMany(type => OrderedGame, orderedGame => orderedGame.order)
    @JoinColumn({ name: 'order_id' })
    orderedGames: OrderedGame[];
}