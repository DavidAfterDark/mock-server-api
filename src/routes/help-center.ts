import { Router } from 'express'
import response from '@/responses/help-center.json'

const router = Router()

router.get('/', (req, res) => {
  try {
    res.json(response)
  } catch (error) {
    console.error('Error al cargar los datos de help-center:', error)
    res.status(500).json({ 
      error: 'Error al cargar los datos de help-center',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

router.post('/', (req, res) => {
  try {
    res.json({ message: 'POST request received', success: true })
  } catch (error) {
    console.error('Error al procesar la solicitud POST de help-center:', error)
    res.status(500).json({ 
      error: 'Error al procesar la solicitud POST de help-center',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
