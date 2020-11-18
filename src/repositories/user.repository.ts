import { BaseAbstractRepository } from '@repositories/base/base.abstract.repository';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@components/user/entity/user.entity';
import { UserRepositoryInterface } from '@components/user/interface/user.repository.interface';

@Injectable()
export class UserRepository extends BaseAbstractRepository<User>
  implements UserRepositoryInterface {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {
    super(usersRepository);
  }
}
