import { Router } from 'express'
import response from '@/responses/news-results.json'

const router = Router()

router.get('/', (req, res) => {
  const { page, categories, sortBy, search } = req.query

  console.log('[news-results][query]:', { page, categories, sortBy, search })

  try {
    res.json(response)
  } catch (error) {
    console.error('Error al cargar los datos de noticias:', error)
    res.status(500).json({
      error: 'Error al cargar los datos de noticias',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
