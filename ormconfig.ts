import { DataSource } from "typeorm";

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
    entities: [`${console.log(__dirname + "entities/**/*.{js,ts}")}`, `${__dirname}/entities/**/*.{js,ts}`],
    subscribers: [],
    migrations: []
});