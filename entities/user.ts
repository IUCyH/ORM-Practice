import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany
} from "typeorm";
import { UserLink } from "./userLink";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column("varchar", { length: 128 })
    name: string = "";

    @Column("varchar", { length: 128 })
    email: string = "";

    @OneToMany(() => UserLink, userLink => userLink.user)
    links: UserLink[] = [];
}