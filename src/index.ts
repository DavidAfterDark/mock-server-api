import express, { Request, Response, NextFunction } from 'express'
import onboardingRouter from '@/routes/onboarding'
import loginRouter from '@/routes/login'
import forgotPassword from '@/routes/forgot-password'
import forgotPasswordTyp from '@/routes/forgot-password-typ'
import userRouter from '@/routes/user'
import tabMore from '@/routes/tab-more'
import termAndConditions from '@/routes/terms-and-conditions'
import privacyPolicies from '@/routes/privacy-policies'
import home from '@/routes/home'
import hasNewNotifications from '@/routes/has-new-notifications'
import notifications from '@/routes/notifications'
import schedule from '@/routes/schedule'
import benefits from '@/routes/benefits'
import benefitsResults from '@/routes/benefits-results'
import services from '@/routes/services'
import subServices from '@/routes/sub-services'
import serviceList from '@/routes/service-list'
import serviceListResults from '@/routes/service-list-results'
import search from '@/routes/search'
import searchResults from '@/routes/search-results'
import news from '@/routes/news'
import newsResults from '@/routes/news-results'
import helpCenter from '@/routes/help-center'
import helpCenterTyp from '@/routes/help-center-typ'
import newsSingle from '@/routes/news-single'
import benefitsSingle from '@/routes/benefits-single'
import profile from '@/routes/profile'
import myTreatments from '@/routes/my-treatments'
import myTreatmentsResults from '@/routes/my-treatments-results'
import editProfile from '@/routes/edit-profile'
import updateEmail from '@/routes/update-email'
import updatePassword from '@/routes/update-password'
import updateImage from '@/routes/update-imagen'
import updateProfile from '@/routes/update-profile'
import about from '@/routes/about'
import aboutDoctorsAndSpecialistsResponse from '@/routes/about-doctors-and-specialists-response'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json());

// Servir archivos estáticos desde /assets
app.use('/assets', express.static(__dirname + '/assets'));

// Routes
app.use('/onboarding', onboardingRouter)

app.use('/login', loginRouter)

app.use('/forgot-password', forgotPassword)

app.use('/forgot-password-typ', forgotPasswordTyp)

app.use('/user', userRouter)

app.use('/tab-more', tabMore)

app.use('/terms-and-conditions', termAndConditions)

app.use('/privacy-policies', privacyPolicies)

app.use('/home', home)

app.use('/has-new-notifications', hasNewNotifications)

app.use('/notifications', notifications)

app.use('/schedule', schedule)

app.use('/benefits', benefits)

app.use('/benefits-results', benefitsResults)

app.use('/services', services)

app.use('/sub-services', subServices)

app.use('/service-list', serviceList)

app.use('/service-list-results', serviceListResults)

app.use('/search', search)

app.use('/search-results', searchResults)

app.use('/news', news)

app.use('/news-results', newsResults)

app.use('/help-center', helpCenter)

app.use('/help-center-typ', helpCenterTyp)

app.use('/news-single', newsSingle)

app.use('/benefits-single', benefitsSingle)

app.use('/profile', profile)

app.use('/my-treatments', myTreatments)

app.use('/my-treatments-results', myTreatmentsResults)

app.use('/edit-profile', editProfile)

app.use('/update-email', updateEmail)

app.use('/update-password', updatePassword)

app.use('/update-image-profile', updateImage)

app.use('/update-profile', updateProfile)

app.use('/about', about)

app.use('/about-doctors-and-specialists-response', aboutDoctorsAndSpecialistsResponse)

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
