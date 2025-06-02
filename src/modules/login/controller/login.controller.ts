import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from '../service/login.service';
import { UserViewModel } from '@modules/user/shared/view-models/user-view-model';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async create(@Body() body: { login: string; senha: string }) {
    const result = await this.loginService.execute({
      login: body.login,
      senha: body.senha,
    });
    return UserViewModel.toHttp(result);
  }
}
