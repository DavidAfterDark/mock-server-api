import { Router } from 'express'
import multer from 'multer'
import response from '@/responses/update-image.json'

const router = Router()

// Multer en memoria: no guardamos archivos en disco
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } }) // 10MB

router.post('/', upload.single('image'), (req, res) => {
  try {
    const file = (req as any).file
    const imageField = req.body?.image

    if (!file && !imageField) {
      return res.status(400).json({ error: 'Se requiere un campo "image" (archivo multipart/form-data o base64 en form field)' })
    }

    if (file) {
      console.log('Received file:')
      console.log('  originalname:', file.originalname)
      console.log('  mimetype:', file.mimetype)
      console.log('  size (bytes):', file.size)
      // Para mostrar parte del buffer (no imprimir todo si es grande)
      console.log('  buffer preview (first 64 bytes):', file.buffer.slice(0, 64))
    }

    if (imageField) {
      console.log('Received image field (string) length:', (imageField as string).length)
      // Si viene en formato data:<mime>;base64,<data> podríamos inspeccionar el prefijo
      if (typeof imageField === 'string' && imageField.startsWith('data:')) {
        const meta = imageField.split(',')[0]
        console.log('  image field meta:', meta)
      }
    }

    return res.json(response)
  } catch (error) {
    console.error('Error al actualizar la imagen:', error)
    return res.status(500).json({ 
      error: 'Error al actualizar la imagen',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
