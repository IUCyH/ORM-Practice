import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "bere6363",
    database: "orm_practice",
    synchronize: false,
    logging: true,
    namingStrategy: new SnakeNamingStrategy(),
    extra: {
        timezone: "Asia/Seoul",
        dateStrings: true
    },
    entities: [__dirname + "/entities/**/*.{js,ts}"],
    subscribers: [],
    migrations: []
});