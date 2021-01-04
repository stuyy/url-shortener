import { Router } from 'express'
import { addUrl, handleRedirect } from '../controllers'

const router = Router()

router.get('/:code', handleRedirect)

router.post('/url', addUrl)

export default router
