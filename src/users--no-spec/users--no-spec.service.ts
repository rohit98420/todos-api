import { Injectable } from '@nestjs/common';
import { CreateUsersNoSpecDto } from './dto/create-users--no-spec.dto';
import { UpdateUsersNoSpecDto } from './dto/update-users--no-spec.dto';

@Injectable()
export class UsersNoSpecService {
  create(createUsersNoSpecDto: CreateUsersNoSpecDto) {
    return 'This action adds a new usersNoSpec';
  }

  findAll() {
    return `This action returns all usersNoSpec`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersNoSpec`;
  }

  update(id: number, updateUsersNoSpecDto: UpdateUsersNoSpecDto) {
    return `This action updates a #${id} usersNoSpec`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersNoSpec`;
  }
}
