import {
  Injectable,
  CanActivate,
  Inject,
  forwardRef,
  ExecutionContext,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from 'src/user/user.service';
import { UserI } from 'src/user/models/user.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class UserIsUserGuard implements CanActivate {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const params = request.params;
    const user: UserI = request.user;

    return this.userService.findOne(user.id).pipe(
      map((user: UserI) => {
        let hasPermission = false;

        if (user.id === Number(params.id)) {
          hasPermission = true;
        }

        return user && hasPermission;
      }),
    );
  }
}
