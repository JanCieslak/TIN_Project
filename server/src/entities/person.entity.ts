import { Column, PrimaryGeneratedColumn, Entity, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { Order } from "./order.entity";
import { User } from "./user.entity";
import { Wishlist } from "./wishlist.entity";

@Entity()
export class Person {
    @PrimaryGeneratedColumn({ name: 'person_id' })
    id: number;

    @Column({ name: 'firstname' })
    firstname: string;

    @Column({ name: 'lastname' })
    lastname: string;

    @Column({ name: 'email' })
    email: string;

    @OneToOne(type => User, user => user.person)
    @JoinColumn({ name: 'person_id' })
    user: User;

    @OneToMany(type => Wishlist, wishlist => wishlist.person)
    @JoinColumn({ name: 'person_id' })
    wishlists: Wishlist[];

    @OneToMany(type => Order, order => order.person)
    @JoinColumn({ name: 'person_id' })
    orders: Order[];
}