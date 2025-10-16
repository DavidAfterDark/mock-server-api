import { Router } from 'express'
import response from '@/responses/update-password.json'

const router = Router()

router.post('/', (req, res) => {
  const { new_password, confirm_password } = req.body

  console.log('Received new password:', new_password)
  console.log('Received confirm password:', confirm_password)

  try {
    res.json(response)
  } catch (error) {
    console.error('Error al actualizar el password:', error)
    res.status(500).json({ 
      error: 'Error al actualizar el password',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
