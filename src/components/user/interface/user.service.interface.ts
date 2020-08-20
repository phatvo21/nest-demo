import { User } from '../entity/user.entity';

export interface UserServiceInterface {
  create(userDto: any): Promise<User>;
}
