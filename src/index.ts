import express, { Request, Response, NextFunction } from 'express'
import onboardingRouter from '@/routes/onboarding'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware CORS manual
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // Manejar solicitudes preflight
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  next();
});

app.use(express.json());

// Servir archivos estáticos desde /assets
app.use('/assets', express.static(__dirname + '/assets'));

// Routes
app.use('/onboarding', onboardingRouter)

// Welcome route
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to Mock Server API!',
    endpoints: {
      onboarding: '/onboarding',
      health: '/health'
    }
  });
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Manejo de rutas no encontradas
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err.stack);
  res.status(500).json({ 
    error: 'Error interno del servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Algo salió mal'
  });
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
