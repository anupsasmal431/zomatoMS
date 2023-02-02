const {validationResult} = require('express-validator');
const restaurentModel = require('./models')
const addRecord = async (req,res)=>{  
  const errors = validationResult(req);           
  if(errors.isEmpty()){   
    const {name,description,address,image,cuisine,min_price,contact,locality,city,meal_type}=req.body;
      try {   
        const response = await restaurentModel.create({name,description,address,image,cuisine,min_price,contact,locality,city,meal_type});
        return res.status(201).json({ msg: "Restaurent has been created", response });
      } catch (error) {                
          console.log(error);             
          return res.status(500).json({ errors: error });
      }  
  }else{
      return res.status(400).json({ errors: errors.array() });
  }
}
const singleRecordByid=async (req, res)=> {
  const { id } = req.params;
  try {
    const record = await restaurentModel.findOne({ _id: id });
    return res.status(200).json(record);
  } catch (error) {
    return res.status(500).json({ errors: error });
    console.log(error.message);
  }
}
const allrestaurentBycity=async (req, res)=> {
  const { location_id } = req.params;
  try {
    let scrhObj={};
    if(location_id){
      scrhObj={ city: location_id };
      const record = await restaurentModel.find(scrhObj);
       return res.status(200).json(record);
    }else{
      return res.status(200).json([]);
    }
    
  } catch (error) {
    return res.status(500).json({ errors: error });
    console.log(error.message);
  }
}

const filterRestaurent=async (req,res)=>{
    //console.log(req.query);
    const  page  = parseInt(req.query.page) || 1;
    const perPage = 5;
    const skip = (page - 1) * perPage;
     try {
      let scrhObj={};
      if (req.query.meal_type) {
        let mySentence=req.query.meal_type.toLowerCase();
          let words = mySentence.split("-");
          
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
                
            }
          mySentence=words.join("-");
          scrhObj['meal_type']={$in : [mySentence]}
        
       }
       if (req.query.costSort) {
             let bArr=req.query.costSort.split(",");
             let mySentence=req.query.meal_type.toLowerCase();
             let words = mySentence.split("-");
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
                
            }
          mySentence=words.join("-");
          scrhObj['min_price']={ $gte: parseFloat(bArr[0]), $lte: parseFloat(bArr[1]) }
           
      }
      if (req.query.city) {
          scrhObj['city']=req.query.city
         
       }
       if (req.query.cuisine) {
             let mySentence=req.query.cuisine.toLowerCase();
             let words = mySentence.split(",");
             for (let i = 0; i < words.length; i++) {
              words[i] = words[i][0].toUpperCase() + words[i].substr(1);            
             }
             scrhObj['cuisine']={$in:(words)}
      }
      //console.log(scrhObj)
      let sortBy=1;
      if (req.query.sortBy) {
           sortBy=(req.query.sortBy=='lth') ? 1: -1;
           
      }
      const count = await restaurentModel.find(scrhObj).countDocuments(); 
      const record = await restaurentModel.find(scrhObj).skip(skip).limit(perPage).sort({min_price:sortBy});
       let cuisine=[];
       if(record){
         //seperate cuisine for only left side display with checkbox
         const recordcusine = await restaurentModel.find({});
         recordcusine.length>0 && recordcusine.map( item =>{
              cuisine.push(item.cuisine)
         })
         let fcuisine = cuisine.filter((v, i) => cuisine.indexOf(v) == i);
         
         return res.status(200).json({fiterArr:record,cuisine:fcuisine,perPage,count });
      }else{
        return res.status(200).json([]);
      }
      
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ errors: error });
      
    }
}

module.exports={
    addRecord,
    singleRecordByid,
    allrestaurentBycity,
    filterRestaurent
}