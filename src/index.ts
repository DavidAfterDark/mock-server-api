import express, { Request, Response, NextFunction } from 'express'
import onboardingRouter from '@/routes/onboarding'
import loginRouter from '@/routes/login'
import forgotPassword from '@/routes/forgot-password'
import userRouter from '@/routes/user'
import tabMore from '@/routes/tab-more'
import termAndConditions from '@/routes/terms-and-conditions'
import privacyPolicies from '@/routes/privacy-policies'
import home from '@/routes/home'
import hasNewNotifications from '@/routes/has-new-notifications'
import notifications from '@/routes/notifications'
import schedule from '@/routes/schedule'
import benefits from '@/routes/benefits'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json());

// Servir archivos estáticos desde /assets
app.use('/assets', express.static(__dirname + '/assets'));

// Routes
app.use('/onboarding', onboardingRouter)

app.use('/login', loginRouter)

app.use('/forgot-password', forgotPassword)

app.use('/forgot-password-typ', forgotPassword)

app.use('/user', userRouter)

app.use('/tab-more', tabMore)

app.use('/terms-and-conditions', termAndConditions)

app.use('/privacy-policies', privacyPolicies)

app.use('/home', home)

app.use('/has-new-notifications', hasNewNotifications)

app.use('/notifications', notifications)

app.use('/schedule', schedule)

app.use('/benefits', benefits)

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
