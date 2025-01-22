import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn("increment")
    id: number = 0;

    @Column("string", { length: 128 })
    name: string = "";

    @Column("string", { length: 128 })
    email: string = "";
}