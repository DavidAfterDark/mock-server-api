import { Router } from 'express'
import response from '@/responses/update-email.json'

const router = Router()

router.post('/', (req, res) => {
  const { current_email, new_email } = req.body

  console.log('Received current email:', current_email)
  console.log('Received new email:', new_email)

  try {
    res.json(response)
  } catch (error) {
    console.error('Error al actualizar el email:', error)
    res.status(500).json({ 
      error: 'Error al actualizar el email',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
