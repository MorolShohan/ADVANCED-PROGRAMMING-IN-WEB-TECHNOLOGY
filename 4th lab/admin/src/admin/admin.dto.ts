import { IsString, IsEmail, Matches } from 'class-validator';

export class AdminDto {
  @IsString()
  @Matches(/^[a-zA-Z0-9_-]+$/, {
    message: 'Username must contain only letters, numbers, underscores, or hyphens',
  })
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message: 'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, and one digit',
  })
  readonly password: string;

  @IsString()
  readonly name: string;

  @IsString()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
    message: 'FullName must contain at least 6 characters, one lowercase letter, one uppercase letter, and one digit',
  })
  readonly customField: string;
}
