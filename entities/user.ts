import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column("string", { length: 128 })
    name: string = "";

    @Column("string", { length: 128 })
    email: string = "";
}