import { IsInt, IsNumber, IsString, Length, Max } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "./author.entity";
import { Order } from "./order.entity";
import { OrderedGame } from "./ordered.game.entity";
import { Wishlist } from "./wishlist.entity";

@Entity()
export class Game {
    @PrimaryGeneratedColumn({ name: 'gameId' })
    id: number;

    @Column({ name: 'title' })
    @IsString()
    @Length(1, 150)
    title: string;

    @Column({ name: 'price' })
    @IsNumber()
    @Max(100000)
    price: number;

    @ManyToOne(type => Author, author => author.games)
    author: Author;
    
    @OneToMany(type => Wishlist, wishlist => wishlist.game)
    wishlists: Wishlist[];

    @OneToMany(type => OrderedGame, orderedGame => orderedGame.game)
    orderedGames: OrderedGame[];
}