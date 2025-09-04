import { Router } from 'express'
import onboardingData from '@/responses/onboarding.json'

const router = Router()

router.get('/', (req, res) => {
  try {
    res.json(onboardingData)
  } catch (error) {
    console.error('Error al cargar los datos de onboarding:', error)
    res.status(500).json({ 
      error: 'Error al cargar los datos de onboarding',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
