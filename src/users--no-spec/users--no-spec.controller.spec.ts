import { Test, TestingModule } from '@nestjs/testing';
import { UsersNoSpecController } from './users--no-spec.controller';
import { UsersNoSpecService } from './users--no-spec.service';

describe('UsersNoSpecController', () => {
  let controller: UsersNoSpecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersNoSpecController],
      providers: [UsersNoSpecService],
    }).compile();

    controller = module.get<UsersNoSpecController>(UsersNoSpecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
