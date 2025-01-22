import { DataSource } from "typeorm";
import { CustomStrategy } from "./custromStrategy";

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "bere6363",
    database: "orm_practice",
    synchronize: false,
    logging: true,
    extra: {
        timezone: "Asia/Seoul",
        dateStrings: true
    },
    entities: ["./entities/**/*.ts"],
    subscribers: [],
    migrations: []
});