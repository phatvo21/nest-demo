import {
  Body,
  Controller, Inject,
  Post,
} from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserServiceInterface } from './interface/user.service.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {

  constructor(@Inject('UserServiceInterface')
              private readonly userService: UserServiceInterface) {
  }

  @Post()
  public async create(@Body() userDto: CreateUserDto): Promise<User> {
    return await this.userService.create(userDto);
  }

}
