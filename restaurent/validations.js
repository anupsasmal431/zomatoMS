const {body,check} = require('express-validator');
module.exports.validations=[
    body('name').not().isEmpty().trim().escape().withMessage('Name is required'),
    body('description').not().isEmpty().trim().escape().withMessage('Description is required'),
    body('address').not().isEmpty().trim().escape().withMessage('Address is required'),
    body('image').not().isEmpty().trim().escape().withMessage('Image is required'),
    body('cuisine').not().isEmpty().trim().escape().withMessage('Cuisine is required'),
    body('min_price').not().isEmpty().trim().escape().withMessage('Price is required'),
    body('contact').not().isEmpty().trim().escape().withMessage('Contact mobie number is required'),
    body('locality').not().isEmpty().trim().escape().withMessage('Locality is required'),
    body('city').not().isEmpty().trim().escape().withMessage('City is required'),
    check("meal_type").not().isEmpty().withMessage("Meal type must be array of value type")
]; 
