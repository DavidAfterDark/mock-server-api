import { Router } from 'express'
import response from '@/responses/benefits-single.json'

const router = Router()

router.get('/:id', (req, res) => {
  const { id } = req.params

  console.log(`Fetching benefits item with id: ${id}`)

  try {
    res.json(response)
  } catch (error) {
    console.error('Error al cargar los datos de beneficios:', error)
    res.status(500).json({
      error: 'Error al cargar los datos de beneficios',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
