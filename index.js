
const express = require('express');
const env=require("./config/config");
const connect=require("./config/db");
const cors=require("cors");

const app = express();  

//add all routers
const cityRoutes=require("./city/routes");
const mealTypeRoutes=require("./mealType/routes");
const restaurentRoutes=require("./restaurent/routes");
const itemRoutes=require("./item/routes");

//database connect
connect(); 

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({msg:"welcome to zomatoApp"})
});

//add allrouter in use
app.use("/api",cityRoutes);
app.use("/api",mealTypeRoutes);
app.use("/api",restaurentRoutes);
app.use("/api",itemRoutes);


const port=env.PORT || 5000;
app.listen(env.PORT,()=>{
    console.log(`server is running at http://localhost:${env.PORT}`)
 }) 