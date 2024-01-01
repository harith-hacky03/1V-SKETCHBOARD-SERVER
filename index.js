const express=require('express')
const app=express()
const http=require('http')
const cors=require('cors')
const server=http.createServer(app)
const {Server}=require('socket.io')

const io=new Server(server,{
    cors:{
        origin:'*',
        methods:["GET","POST"]
    }
})

io.on('connection',(socket)=>{
    //console.log("connected")
    socket.on('send-path',(data)=>{
        socket.broadcast.emit('receive-path',data)
    })
    
    socket.on('send-line',(data)=>{
        socket.broadcast.emit('receive-line',data)
    })

    socket.on('send-color',(data)=>{
        socket.broadcast.emit('receive-color',data)
    })

    socket.on('send-size',(data)=>{
        socket.broadcast.emit('receive-size',data)
    })
})

server.listen(5000,()=>{
    console.log("Server Started")
})
