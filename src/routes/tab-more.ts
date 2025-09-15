import { Router } from 'express'
import response from '@/responses/tab-more.json'

const router = Router()

router.get('/', (req, res) => {
  try {
    res.json(response)
  } catch (error) {
    console.error('Error al cargar los datos de "tab more":', error)
    res.status(500).json({ 
      error: 'Error al cargar los datos de "tab more"',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
