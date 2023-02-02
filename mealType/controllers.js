const {validationResult} = require('express-validator');
const mealtypeModel = require('./models')
const addRecord = async (req,res)=>{  
  const errors = validationResult(req);           
  if(errors.isEmpty()){   
    const {meal_type,name,image,content}=req.body;
      try {   
        const response = await mealtypeModel.create({
          meal_type,
         name,
         image,
         content
        });
        return res.status(201).json({ msg: "MealType has been created", response });
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
    const response = await mealtypeModel.find({}).sort({ updatedAt: -1 });
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