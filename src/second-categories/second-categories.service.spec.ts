import { Test, TestingModule } from '@nestjs/testing';
import { SecondCategoriesService } from './second-categories.service';

describe('SecondCategoriesService', () => {
  let service: SecondCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecondCategoriesService],
    }).compile();

    service = module.get<SecondCategoriesService>(SecondCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
