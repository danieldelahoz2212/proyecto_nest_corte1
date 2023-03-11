import { Module, Controller } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { EnvConfiguration } from 'src/env.config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controllers/auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports:[
    PassportModule,
    JwtModule.registerAsync({
      useFactory: ()=>{
        return{
          secret:EnvConfiguration().jwtSecret,
          signOptions: {
            expiresIn: '10d'
          },
        };
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
