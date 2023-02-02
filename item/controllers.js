const {validationResult} = require('express-validator');
const itemModel = require('./models')
const addRecord = async (req,res)=>{  
  const errors = validationResult(req);           
  if(errors.isEmpty()){   
    const {name,description,restaurantId,ingridients,image,qty,price}=req.body;
      try {   
        const response = await itemModel.create({name,description,restaurantId,ingridients,image,qty,price});
        return res.status(201).json({ msg: "Item has been created", response });
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
    const id=req.params.id;
    const response = await itemModel.find({restaurantId:id}).sort({ updatedAt: -1 });
    //console.log(response)
    return res.status(200).json({ response });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: error });
  } 
}

module.exports={
    addRecord,
    allRecords
}