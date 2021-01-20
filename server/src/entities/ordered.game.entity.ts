import { Collection } from "mongoose";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";
import { Order } from "./order.entity";

@Entity()
export class OrderedGame {
    @PrimaryGeneratedColumn({ name: 'ordered_game_id' })
    id: number;

    @Column({ name: 'amount' })
    amount: number;

    @ManyToOne(type => Order, order => order.orderedGames)
    order: Order;

    @ManyToOne(type => Game, game => game.orderedGames)
    game: Game;
}