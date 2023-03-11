import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from '../decorator/public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private relflector:Reflector){
    super();
  }
  canActivate(context: ExecutionContext){
    const isPublic = this.relflector.get(IS_PUBLIC_KEY, context.getHandler());
    if(isPublic)return true;

    return super.canActivate(context)
  }
}
