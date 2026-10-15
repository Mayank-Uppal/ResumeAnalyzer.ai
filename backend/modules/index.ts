import Express from 'express';
import authRoute from '../modules/auth/auth.route.js';
import cors from 'cors';

const app=Express();

app.use(Express.json());
app.use(cors());

app.use('/auth',authRoute);

app.listen(4000,()=>{
    console.log("Backend server running on port 4000");
})
