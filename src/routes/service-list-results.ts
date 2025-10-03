import { Router } from 'express'
import response from '@/responses/service-list-results.json'

const router = Router()

router.get('/', (req, res) => {
    const { page, categories, sortBy, search } = req.query

    console.log('[service-list-results][query]:', { page, categories, sortBy, search })

    try {
        res.json(response)
    } catch (error) {
        console.error('Error al cargar los datos de la lista de servicios:', error)
        res.status(500).json({
            error: 'Error al cargar los datos de la lista de servicios',
            details: error instanceof Error ? error.message : 'Unknown error'
        })
    }
})

export default router
