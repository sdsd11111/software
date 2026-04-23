import { prisma } from '@/lib/prisma'
import InventarioClient from './InventarioClient'

export const metadata = {
  title: 'Inventario - Software CRM',
  description: 'Gestión de materiales y suministros de Software.',
}

export default async function InventarioPage() {
  const materials = await prisma.material.findMany({
    where: { isActive: true },
    orderBy: { name: 'asc' }
  })

  return (
    <div className="admin-container">
      <InventarioClient initialMaterials={JSON.parse(JSON.stringify(materials))} />
    </div>
  )
}
