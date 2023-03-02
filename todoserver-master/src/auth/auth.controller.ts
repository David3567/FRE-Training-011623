import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { GetUser } from './decorator/get-user.decorator';
import { SignInDto } from './dtos/signin.dto';
import { SignUpDto } from './dtos/signup.dto';
import { User } from './entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signup(@Body() signUpDto: SignUpDto): Promise<{ accessToken: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/signin')
  signin(@Body() signInDto: SignInDto): Promise<{ accessToken: string }> {
    return this.authService.signUp(signInDto);
  }

  @Get('/testjwt')
  @UseGuards(AuthGuard('jwt'))
  testjwt(
    // @Req() req,
    @GetUser() user: User,
  ) {
    console.log(user);
  }
}
