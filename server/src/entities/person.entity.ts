import { IsEmail, IsString, Length } from "class-validator";
import { Column, PrimaryGeneratedColumn, Entity, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { Order } from "./order.entity";
import { User } from "./user.entity";
import { Wishlist } from "./wishlist.entity";

@Entity()
export class Person {
    @PrimaryGeneratedColumn({ name: 'personId' })
    id: number;

    @Column({ name: 'firstname' })
    @IsString()
    @Length(1, 100)
    firstname: string;

    @Column({ name: 'lastname' })
    @IsString()
    @Length(1, 100)
    lastname: string;

    @Column({ name: 'email' })
    @IsEmail()
    @Length(1, 200)
    email: string;

    @OneToOne(type => User, user => user.person)
    user: User;

    @OneToMany(type => Wishlist, wishlist => wishlist.person)
    wishlists: Wishlist[];

    @OneToMany(type => Order, order => order.person)
    orders: Order[];
}