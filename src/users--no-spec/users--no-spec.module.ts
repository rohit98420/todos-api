import { Module } from '@nestjs/common';
import { UsersNoSpecService } from './users--no-spec.service';
import { UsersNoSpecController } from './users--no-spec.controller';

@Module({
  controllers: [UsersNoSpecController],
  providers: [UsersNoSpecService],
})
export class UsersNoSpecModule {}
