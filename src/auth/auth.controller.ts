import { Body, Controller, Get, Post } from '@nestjs/common'
import { User } from '@prisma/client'
import { AuthService } from './auth.service'
import { Auth } from './decorator/auth.decorator'
import { CurrentUser } from './decorator/user.decorator'
import { FindPasswordDto } from './dto/find-password.dto'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { ResetPasswordDto } from './dto/reset-password.dto'
import { RefreshTokenDto } from './dto/refresh-token.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'

// @ApiBearerAuth()
@ApiTags('Auth(鉴权)')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto)
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto)
  }

  @Post('find-password')
  findPassword(@Body() dto: FindPasswordDto) {
    return this.authService.findPassword(dto)
  }

  @Post('reset-password')
  @Auth()
  resetPassword(@Body() dto: ResetPasswordDto, @CurrentUser() user: User) {
    return this.authService.resetPassword(dto, user)
  }
  @Post('resetUserPassword')
  @Auth()
  resetUserPassword(@Body() dto: any, @CurrentUser() user: User) {
    return this.authService.resetPasswordByUser(dto, user)
  }
  @Post('updateUserInfoById')
  @Auth()
  updateUserInfoOne(@Body() dto: User, @CurrentUser() user: User) {
    return this.authService.updateUserInfoByUser(dto, user)
  }
  // 更新用户信息
  @Post('updateUserInfo')
  @Auth()
  updateUserInfo(@Body() dto: User, @CurrentUser() user: User) {
    return this.authService.updateUserInfo(dto, user)
  }

  @Get('current')
  @Auth()
  currentUser(@CurrentUser() user: User) {
    return this.authService.current(user)
    // return user
  }
  // 刷新token
  @Post('refreshToken')
  refreshToken(@Body() dto: RefreshTokenDto) {
    return this.authService.refreshToken(dto)
  }
}
