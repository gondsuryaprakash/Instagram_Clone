const express=require('express')
const app =express()
const mongoose=require('mongoose')
const {MONGOURI}=require('./keys')
const PORT=8000

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log('Connected to mongo');
})

mongoose.connection.on('error',(error)=>{
    console.log('err in connection',error);
})
//bG5UFHhA2eZPETw
//Middle ware just use for the authentication for the router req and res is valid or not 
// const customMiddleWare=(req,res,next)=>{
//     console.log('Middle ware executed');
//     next()
// }

// app.use(customMiddleWare)
// app.get('/',(req,res)=>{
//     console.log('home');
//     res.send('Hello World')
// })

// app.get('/about',customMiddleWare,(req,res)=>{
//     console.log('about');
//     res.send('Hello about')
// })
require('./models/user')
require('./models/post')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.listen(PORT,()=>{console.log('connection successfull')})

