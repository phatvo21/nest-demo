import { BaseInterfaceRepository } from '@repositories/base/base.interface.repository';
import { User } from '@components/user/entity/user.entity';

export interface UserRepositoryInterface
  extends BaseInterfaceRepository<User> {}
