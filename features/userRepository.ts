import { AppDataSource } from "../ormconfig";
import { User } from "../entities/user";

export default class UserRepository {
    private entityManager = AppDataSource.manager;

    async getUser(id: number) {
        const builder = this.entityManager.createQueryBuilder(User, "user");
        const query = builder
            .leftJoinAndSelect("user.links", "links")
            .addSelect("links.link")
            .where("user.id = :id", { id: id });

        const result = await query.getOne();
        return result;
    }
}