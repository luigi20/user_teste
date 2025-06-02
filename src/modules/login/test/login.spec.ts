import { inMemoryUserRepository } from '@modules/user/shared/repositories/test/inMemoryUserRepository';
import { LoginService } from '../service/login.service';
import { AuthService } from '@modules/auth/authService';

// Mock do método Cryptography.encrypt

describe('Test in setting login module', () => {
  let userRepository: inMemoryUserRepository;
  let mockAuthService: jest.Mocked<AuthService>;
  beforeEach(() => {
    jest.resetAllMocks();
    userRepository = new inMemoryUserRepository();
    const realAuth = new AuthService();
    mockAuthService = jest.mocked(realAuth, {
      shallow: true,
    });
  });
  it('should login', async () => {
    const login_service = new LoginService(userRepository, mockAuthService);
    const created_user = await login_service.execute({
      login: 'teste2@gmail.com',
      senha: '123456',
    });
    expect(created_user.login).toEqual('teste2@gmail.com');
  });
});
