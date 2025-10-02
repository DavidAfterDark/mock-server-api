import { Router } from 'express'
import response from '@/responses/service-list.json'

const router = Router()

router.get('/:id', (req, res) => {
    const { id } = req.params

    console.log('[service-list][id]:', id)

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
