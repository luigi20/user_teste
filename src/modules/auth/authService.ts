import { Injectable } from '@nestjs/common';
import {
  jwtDecrypt,
  importPKCS8,
  importSPKI,
  JWTPayload,
  EncryptJWT,
} from 'jose';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class AuthService {
  private publicKey: CryptoKey;
  private privateKey: CryptoKey;

  constructor() {
    this.loadKeys();
  }

  private async loadKeys() {
    const privatePem = readFileSync(
      join(__dirname, '../../keys/private.pem'),
      'utf8',
    );
    const publicPem = readFileSync(
      join(__dirname, '../../keys/public.pem'),
      'utf8',
    );

    this.privateKey = await importPKCS8(privatePem, 'RSA-OAEP-256');
    this.publicKey = await importSPKI(publicPem, 'RSA-OAEP-256');
  }

  async generateJwe(payload: JWTPayload): Promise<string> {
    return await new EncryptJWT(payload)
      .setProtectedHeader({ alg: 'RSA-OAEP-256', enc: 'A256GCM' })
      .setIssuedAt()
      .setExpirationTime('1h')
      .encrypt(this.publicKey);
  }

  async decryptJwe(token: string): Promise<JWTPayload> {
    const { payload } = await jwtDecrypt(token, this.privateKey);
    return payload;
  }
}
