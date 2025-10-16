import { Router } from 'express'
import response from '@/responses/about-doctors-and-specialists-response.json'

const router = Router()

router.get('/', (req, res) => {
  const { page, specialty, sortBy, search } = req.query

  console.log('[about-doctors-and-specialists-response][query]:', { page, specialty })

  try {
    res.json(response)
  } catch (error) {
    console.error('Error al cargar los datos de about-doctors-and-specialists-response:', error)
    res.status(500).json({ 
      error: 'Error al cargar los datos de about-doctors-and-specialists-response',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
