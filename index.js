const express=require('express');
const app=express();
const port=3000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Student Management API is running');
});
app.listen(port,()=>{
    console.log('Server running on port ${PORT}');
});