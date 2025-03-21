import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersNoSpecService } from './users--no-spec.service';
import { CreateUsersNoSpecDto } from './dto/create-users--no-spec.dto';
import { UpdateUsersNoSpecDto } from './dto/update-users--no-spec.dto';

@Controller('users--no-spec')
export class UsersNoSpecController {
  constructor(private readonly usersNoSpecService: UsersNoSpecService) {}

  @Post()
  create(@Body() createUsersNoSpecDto: CreateUsersNoSpecDto) {
    return this.usersNoSpecService.create(createUsersNoSpecDto);
  }

  @Get()
  findAll() {
    return this.usersNoSpecService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersNoSpecService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersNoSpecDto: UpdateUsersNoSpecDto) {
    return this.usersNoSpecService.update(+id, updateUsersNoSpecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersNoSpecService.remove(+id);
  }
}
