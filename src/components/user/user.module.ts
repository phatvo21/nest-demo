import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@components/user/entity/user.entity';
import { UserController } from '@components/user/user.controller';
import { UserRepository } from '@repositories/user.repository';
import { UserRepositoryInterface } from '@components/user/interface/user.repository.interface';
import { UserService } from '@components/user/user.service';
import { UserServiceInterface } from '@components/user/interface/user.service.interface';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: 'UserRepositoryInterface',
      useClass: UserRepository,
    },
    {
      provide: 'UserServiceInterface',
      useClass: UserService,
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
