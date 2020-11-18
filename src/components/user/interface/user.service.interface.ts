import { User } from '@components/user/entity/user.entity';
import { CreateUserDto } from '@components/user/dto/create-user.dto';

export interface UserServiceInterface {
  create(userDto: CreateUserDto): Promise<User>;
}
