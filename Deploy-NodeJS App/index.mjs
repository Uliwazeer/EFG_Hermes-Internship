import express from "express";
import os from 'os';

const app = express()
const PORT = 3000

app.get("/",(req,res)=>{
    const message='You Are Welcome In EFG Hermes,I am Pod ${os.hostname()}'
    res.send(message)
})

app.listen(PORT, ()=>{
    console.log('WEB SERVER LISTENING ON PORT ${PORT}')
    console.log(os.hostname())
})