import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCard.js'
import Cors from 'cors'
   //app config
   const app=express();
   const port=process.env.PORT ||8001;
   const connect_url='mongodb+srv://admin:g5Jn6TC1URq6lqyc@cluster0.qzeff.mongodb.net/tinderdb?retryWrites=true&w=majority'

   //Middlewares
   app.use(express.json())
   app.use(Cors())

   //DB config
mongoose.connect(connect_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})
   //API Endpoints
   app.get('/',(req,res)=>{
       res.status(200).send('hello word')
   })
app.post('/tinder/card',(req,res)=>{
    const dbcard=req.body;
    Cards.create(dbcard,(err,data)=>{
        if(err){res.status(500)}
        else{res.status(200 ).send(data)}
    })
})
app.get('/tinder/card',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){res.status(500).send(err)}
        else{res.status(201).send(data)}
    })
})
   //Listner 
   app.listen(port,()=>{
       console.log(`listening on locahost${port}`);
   }) 