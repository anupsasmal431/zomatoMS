const {validationResult} = require('express-validator');
const cityModel = require('./models')
const addRecord = async (req,res)=>{  
  const errors = validationResult(req);           
  if(errors.isEmpty()){   
    const {location_id,name,city}=req.body;
      try {   
        const response = await cityModel.create({
         location_id,
         name,
         city
        });
        return res.status(201).json({ msg: "City has been created", response });
      } catch (error) {                
          console.log(error);             
          return res.status(500).json({ errors: error });
      }  
  }else{
      return res.status(400).json({ errors: errors.array() });
  }
}

const allRecords = async (req,res)=>{
  try {
    const response = await cityModel.find({}).sort({ updatedAt: -1 });
    //console.log(response)
    return res.status(200).json({ record: response });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: error });
  } 
}

module.exports={
    addRecord,
    allRecords
}