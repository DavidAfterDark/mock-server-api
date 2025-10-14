import { Router } from 'express'
import response from '@/responses/profile.json'

const router = Router()

router.get('/', (req, res) => {
  try {
    res.json(response)
  } catch (error) {
    console.error('Error al cargar los datos del perfil:', error)
    res.status(500).json({ 
      error: 'Error al cargar los datos del perfil',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
