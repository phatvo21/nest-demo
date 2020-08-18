import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Post()
  public async create(@Body() userDto: any): Promise<User> {
    return await this.userService.create(userDto);
  }

}
