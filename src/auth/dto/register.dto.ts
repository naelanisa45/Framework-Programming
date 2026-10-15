import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class RegisterDto{
    @IsNotEmpty({message:"Username harus diisi"})
    @MinLength({message:"Minimal 30 karakter"})
    readonly username: string;

    @IsEmail({message:"Format tidak boleh kosong"})
    @IsNotEmpty({message:"Email tidak boleh kosong"})
    readonly email: string;

    @IsNotEmpty({message:"Password tidak boleh kosong"})
    readonly password: string;
}