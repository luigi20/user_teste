import { randomUUID } from 'crypto';
import { Replace } from 'src/modules/utils/replace';

export interface User_Props {
  login: string;
  senha: string;
  data: Date;
  jwe: string;
}

export class User {
  private _id: string;
  private props: User_Props;

  constructor(
    props: Replace<
      User_Props,
      {
        data?: Date;
      }
    >,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      data: props.data ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get senha(): string {
    return this.props.senha;
  }

  public set senha(senha: string) {
    this.props.senha = senha;
  }

  public get data(): Date {
    return this.props.data;
  }

  public set data(data: Date) {
    this.props.data = data;
  }
  public get login(): string {
    return this.props.login;
  }

  public set login(login: string) {
    this.props.login = login;
  }

  public get jwe(): string {
    return this.props.jwe;
  }

  public set jwe(jwe: string) {
    this.props.jwe = jwe;
  }
}
