import { AuthService } from './../services/auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../models/user.model';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'username',
            passwoedField: 'password',
        })
    }
    async validate(username:string, password:string){
        const user: User =await this.authService.validateUser(username, password);
        if(!user) throw new UnauthorizedException('Not Allwed');

        return user;
    }
} 