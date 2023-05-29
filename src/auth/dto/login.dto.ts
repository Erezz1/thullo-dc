import { MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @MinLength(4)
  @MaxLength(30)
  username: string;

  @MinLength(6)
  @MaxLength(30)
  password: string;
}
