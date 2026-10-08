import { Controller, Post, Body, Patch } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';

// - /auth/register : POST
// - /auth/login : POST

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService) {}
    @Post("register")
    regist(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }

    @Post("login")
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Post("forgot-password")
    forgotPassword(){
        return "Link reset password berhasil dikirim ke email"
    }

    @Patch('reset-password')
    resetPassword() {
        return "password berhasil direset";
    }
}
