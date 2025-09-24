import { Router } from 'express'
import response from '@/responses/schedule.json'

const router = Router()

router.get('/', (req, res) => {
  try {
    res.json(response)
  } catch (error) {
    console.error('Error al cargar los datos de agendar:', error)
    res.status(500).json({ 
      error: 'Error al cargar los datos de agendar',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
