import { User_Props, User } from '../user.entity';

type Override = Partial<User_Props>;
export function makeUser(override: Override = {}) {
  return new User(
    {
      login: 'l@gmail.com',
      senha: '123456',
      jwe: 'ffjbfjfru4574',
      data: new Date(),
      ...override,
    },
    '123456',
  );
}
