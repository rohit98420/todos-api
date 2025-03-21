import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersNoSpecDto } from './create-users--no-spec.dto';

export class UpdateUsersNoSpecDto extends PartialType(CreateUsersNoSpecDto) {}
