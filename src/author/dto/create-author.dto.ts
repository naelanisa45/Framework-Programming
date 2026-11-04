
import {
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class AuthorDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nama_pengarang: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  alamat: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  foto: string;
}
