const express=require('express');
const cors=require('cors')
const app =express();
const port =process.env.PORT || 5500
app.use(cors());
app.use(express.json())
const {Moviesrouter} =require('./routes/movieRoute')

app.use('/api',Moviesrouter);

app.listen(port,()=>{
    console.log("Running on port 5500")
})

