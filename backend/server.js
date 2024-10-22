import app from "./app.js";


app.listen(process.env.PORT,()=>{
    console.log(`Running server on ${process.env.PORT}`)
})