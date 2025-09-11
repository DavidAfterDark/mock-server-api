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

router.post('/', (req, res) => {
  try {
    const { rut_passport, password } = req.body

    if (rut_passport === '12345678' && password === 'password') {
      res.json({ success: true, message: 'Login successful', data: { token: 'fake-jwt-token' } });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({
      error: 'Error during login',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
})

export default router
