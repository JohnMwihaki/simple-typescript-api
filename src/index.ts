import express,{Express}  from 'express';
import {PrismaClient} from '@prisma/client';  
import task_routers from './routes/task.routes';

const client = new PrismaClient();
const app = express();
app.use(express.json());

app.get("/",(_req, res)=>{
    res.send("Typescript with express task API is running")
})
app.use('/task', task_routers);


const port=process.env.PORT || 4400;
app.listen(port,()=>{
    console.log(`Server is running on port${port}server`);
})