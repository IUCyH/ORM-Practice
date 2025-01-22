import UserRepository from "./userRepository";

export default class UserService {
    private repository: UserRepository = new UserRepository();

    async getUser(id: number) {
        const user = await this.repository.getUser(id);
        return user;
    }
}