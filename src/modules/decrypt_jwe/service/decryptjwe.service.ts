import { Injectable } from '@nestjs/common';
import { AuthService } from '@modules/auth/authService';
import { JWTPayload } from 'jose';
interface IUserRequest {
  jwe: string;
}
@Injectable()
export class DecryptJWEService {
  constructor(private readonly authService: AuthService) {}
  public async execute({ jwe }: IUserRequest): Promise<JWTPayload> {
    const result = await this.authService.decryptJwe(jwe);
    return result;
  }
}
