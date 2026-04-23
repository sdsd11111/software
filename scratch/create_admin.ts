import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function createSuperAdmin() {
  try {
    const passwordHash = await bcrypt.hash('Contraseña123.', 10)
    
    const user = await prisma.user.upsert({
      where: { username: 'Aquatech' },
      update: {
        role: 'SUPERADMIN',
        passwordHash: passwordHash
      },
      create: {
        name: 'Superadmin Aquatech',
        email: 'admin@aquatech.ec',
        username: 'Aquatech',
        passwordHash: passwordHash,
        role: 'SUPERADMIN',
        isActive: true
      }
    })
    
    console.log('✅ Superadmin created/updated successfully!')
    console.log('   Username: Aquatech')
    console.log('   Password: Contraseña123.')
    console.log('   Role: SUPERADMIN')
  } catch (error) {
    console.error('❌ Error creating superadmin:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createSuperAdmin()
