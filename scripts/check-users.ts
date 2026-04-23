import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      username: true,
      role: true,
      displayPassword: true
    }
  })
  console.log('--- USERS LIST ---')
  console.table(users)
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())
