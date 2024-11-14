import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 1000000; i++) {
    await prisma.user.create({
      data: {
        firstName: `FirstName${i}`,
        lastName: `LastName${i}`,
        age: Math.floor(Math.random() * 102) + 18,
        gender: i % 2 === 0 ? 'male' : 'female',
        hasProblem: Math.random() < 0.5,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
