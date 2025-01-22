import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    PrimaryColumn,
    ManyToOne,
    OneToMany
} from "typeorm";

@Entity()
export class UserLink {
    @PrimaryColumn("int")
    userId: number = 0;

    @PrimaryColumn("varchar", { length: 128 })
    link: string = "";

    @ManyToOne(() => User, user => user.links, {
        cascade: true
    })
    user!: User;
}

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