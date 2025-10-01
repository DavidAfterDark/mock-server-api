import { Router } from 'express'
import response from '@/responses/sub-services.json'

const router = Router()

router.get('/:id', (req, res) => {
  const { id } = req.params

  console.log('[sub-services][id]:', id)

  try {
    res.json(response)
  } catch (error) {
    console.error('Error al cargar los datos de sub servicios:', error)
    res.status(500).json({
      error: 'Error al cargar los datos de sub servicios',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
