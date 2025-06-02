import { AuthService } from '@modules/auth/authService';
import { DecryptJWEService } from '../service/decryptjwe.service';

// Mock do método Cryptography.encrypt

describe('Test in setting decrypt module', () => {
  let mockAuthService: jest.Mocked<AuthService>;
  beforeEach(() => {
    jest.resetAllMocks();
    const realAuth = new AuthService();
    mockAuthService = jest.mocked(realAuth, {
      shallow: true,
    });
  });
  it('should decrypt', async () => {
    const login_service = new DecryptJWEService(mockAuthService);
    const created_user = await login_service.execute({
      jwe: 'teste2@gmail.com',
    });
    expect(created_user.login).toEqual('teste2@gmail.com');
  });
});
