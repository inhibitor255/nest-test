import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;

  const mockUsersRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest.fn().mockImplementation((user) => Promise.resolve({ id: Date.now(), ...user })),
    find: jest.fn().mockResolvedValue([
      { id: 1, name: 'John Doe', age: 25 },
      { id: 2, name: 'Jane Doe', age: 28 },
    ]),
    findOneBy: jest.fn().mockImplementation(({ id }) => Promise.resolve({ id, name: 'John Doe', age: 25 })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUsersRepository,
        },
        {
          provide: 'API_KEY',
          useValue: 'TEST_KEY',
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user', async () => {
    const dto = { name: 'Test User', age: 30 };
    expect(await service.create(dto)).toEqual({
      id: expect.any(Number),
      ...dto,
    });
  });

  it('should find all users', async () => {
    expect(await service.findAll()).toEqual([
      { id: 1, name: 'John Doe', age: 25 },
      { id: 2, name: 'Jane Doe', age: 28 },
    ]);
  });

  it('should find a user by id', async () => {
    expect(await service.findOne(1)).toEqual({
      id: 1,
      name: 'John Doe',
      age: 25,
    });
  });
});
