import { Router } from 'express'
import response from '@/responses/search-results.json'

const router = Router()

router.get('/', (req, res) => {
  const { search } = req.query

  console.log('[search-results][query]:', { search })

  try {
    res.json(response)
  } catch (error) {
    console.error('Error al cargar los datos de search-result:', error)
    res.status(500).json({ 
      error: 'Error al cargar los datos de search-result',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
