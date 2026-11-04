
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nama: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  password: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  alamat: string;
}
