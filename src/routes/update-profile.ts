import { Router } from 'express'
import response from '@/responses/update-profile.json'

const router = Router()

router.post('/', (req, res) => {
  const { name, lastname, birthdate, phone, email, rut_passport } = req.body

  console.log('Received profile data:', { name, lastname, birthdate, phone, email, rut_passport })

  try {
    res.json(response)
  } catch (error) {
    console.error('Error al actualizar el perfil:', error)
    res.status(500).json({ 
      error: 'Error al actualizar el perfil',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
