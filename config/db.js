const mongoose=require("mongoose");
const env=require("./config");
const connect=async ()=>{
  try {
    await mongoose.connect(env.DB_URL);
    console.log('database connected');
  } catch (error) {
    console.log(error.message);
    process.exit;
    
  }
}

module.exports=connect;