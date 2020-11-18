import { Body, Controller, Inject, Post } from '@nestjs/common';
import { User } from '@components/user/entity/user.entity';
import { UserServiceInterface } from '@components/user/interface/user.service.interface';
import { CreateUserDto } from '@components/user/dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(
    @Inject('UserServiceInterface')
    private readonly userService: UserServiceInterface,
  ) {}

  @Post()
  public async create(@Body() userDto: CreateUserDto): Promise<User> {
    return this.userService.create(userDto);
  }
}
