import Express from 'express'
import * as authController from './auth.controller.js';

const route=Express.Router();

route.post('/send-otp',authController.sendOtp);
route.post('/verify-otp',authController.verifyOtp);

export default route;