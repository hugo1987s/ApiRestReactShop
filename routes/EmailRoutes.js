import express from 'express';
import EmailController from '../controllers/EmailController'

const EmailRoutes = express.Router();

EmailRoutes.post('/', EmailController.SendMail)
  
export default EmailRoutes
