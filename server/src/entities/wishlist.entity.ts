import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./game.entity";
import { Person } from "./person.entity";

@Entity()
export class Wishlist {
    @PrimaryGeneratedColumn({ name: 'wishlist_id' })
    id: number;

    @ManyToOne(type => Person, person => person.wishlists)
    person: Person;

    @PrimaryColumn({ name: 'person_id' })
    personId: number;

    @ManyToOne(type => Game, game => game.wishlists)
    game: Game;

    @PrimaryColumn({ name: 'game_id' })
    gameId: number;
}