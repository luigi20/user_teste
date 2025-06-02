import { User } from '../user.entity';

describe('Create User', () => {
  it('should be able to create a User', () => {
    const user = new User({
      login: 'l@gmail.com',
      senha: '123456',
      jwe: 'ffjbfjfru4574',
      data: new Date(),
    });
    expect(user).toBeTruthy();
  });
});
