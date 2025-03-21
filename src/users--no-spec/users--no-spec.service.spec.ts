import { Test, TestingModule } from '@nestjs/testing';
import { UsersNoSpecService } from './users--no-spec.service';

describe('UsersNoSpecService', () => {
  let service: UsersNoSpecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersNoSpecService],
    }).compile();

    service = module.get<UsersNoSpecService>(UsersNoSpecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
