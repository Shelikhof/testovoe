import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async updateUserProblems(): Promise<number> {
    const count = await this.prisma.user.count({
      where: {
        hasProblem: true,
      },
    });

    await this.prisma.user.updateMany({
      where: {
        hasProblem: true,
      },
      data: {
        hasProblem: false,
      },
    });

    return count;
  }
}
