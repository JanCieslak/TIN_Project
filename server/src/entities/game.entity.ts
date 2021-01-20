import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "./author.entity";
import { Order } from "./order.entity";
import { OrderedGame } from "./ordered.game.entity";
import { Wishlist } from "./wishlist.entity";

@Entity()
export class Game {
    @PrimaryGeneratedColumn({ name: 'game_id' })
    id: number;

    @Column({ name: 'title' })
    title: string;

    @Column({ name: 'price' })
    price: number;

    @ManyToOne(type => Author, author => author.games, { cascade: true })
    author: Author;

    @OneToMany(type => Wishlist, wishlist => wishlist.game)
    wishlists: Wishlist[];

    @OneToMany(type => OrderedGame, orderedGame => orderedGame.game)
    orderedGames: OrderedGame[];
}