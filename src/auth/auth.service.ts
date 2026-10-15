import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto.js';
import { User } from './entities/user-entity.js';
import { LoginDto } from './dto/login.dto.js';

@Injectable()
export class AuthService {
    private user: User[] = [];
    //register
    register(registerDto: RegisterDto) : User {
        const newUser: User = {
            id: this.user.length + 1,
            username: registerDto.username,
            email: registerDto.email,
            password: registerDto.password,
        };
        this.user.push(newUser);
        return newUser
    }

    //login
    login(loginDto: LoginDto): string {
        const user = this.user.find(
            user =>
                user.username === loginDto.username &&
                user.password === loginDto.password,
        );

        if (!user) {
            return `Login gagal: username atau password salah`;
        }

        return `Login berhasil, selamat datang $(user, usename)`;
    }

    // forgot
    forgotPassword() {
        return `Link reset password dikirim`;
    }

    //password recovery
    passwordRecovery() {
        return `Password berhasil direset`;
    }
}
