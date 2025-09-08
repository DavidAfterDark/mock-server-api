import { Router } from 'express'
import onboardingData from '@/responses/login.json'

const router = Router()

router.get('/', (req, res) => {
  try {
    res.json(onboardingData)
  } catch (error) {
    console.error('Error al cargar los datos de login:', error)
    res.status(500).json({ 
      error: 'Error al cargar los datos de login',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
