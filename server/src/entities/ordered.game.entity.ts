import { IsInt, Max } from "class-validator";
import { Collection } from "mongoose";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";
import { Order } from "./order.entity";

@Entity({ name: 'orderedGame' })
export class OrderedGame {
    @PrimaryGeneratedColumn({ name: 'orderedGameId' })
    id: number;

    @Column({ name: 'amount' })
    @IsInt()
    @Max(100000)
    amount: number;

    @ManyToOne(type => Order, order => order.orderedGames)
    order: Order;

    @ManyToOne(type => Game, game => game.orderedGames)
    game: Game;
}