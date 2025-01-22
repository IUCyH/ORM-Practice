import UserRepository from "./userRepository";

export default class UserService {
    private repository: UserRepository = new UserRepository();

    async getUser(id: number) {
        const user = await this.repository.getUser(id);

        if(user != null) {
            const result = {
                ...user,
                links: user.links.map(link => link.link)
            };
            return result;
        }

        return null;
    }
}