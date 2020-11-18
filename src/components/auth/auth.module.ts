import { Module } from '@nestjs/common';
import { AuthController } from '@components/auth/auth.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [AuthController],
})
export class AuthModule {}
