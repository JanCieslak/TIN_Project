import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";
import { Person } from "./person.entity";

@Entity()
export class Wishlist {
    @PrimaryGeneratedColumn({ name: 'wishlistId' })
    id: number;

    @ManyToOne(type => Person, person => person.wishlists)
    person: Person;

    @ManyToOne(type => Game, game => game.wishlists)
    game: Game;
}