import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('fix')
  async fixProblems() {
    const count = await this.userService.updateUserProblems();
    return { updated: count };
  }
}
