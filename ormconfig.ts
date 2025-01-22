import { DataSource } from "typeorm";
import { CustomStrategy } from "./custromStrategy";

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "rootroot",
    database: "protect_me",
    synchronize: false,
    logging: true,
    namingStrategy: new CustomStrategy(),
    extra: {
        timezone: "Asia/Seoul",
        dateStrings: true
    },
    entities: ["../entities/**/*.js"],
    subscribers: [],
    migrations: []
});