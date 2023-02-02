const {body} = require('express-validator');
module.exports.validations=[
    body('meal_type').not().isEmpty().trim().escape().withMessage('MealType is required'),
    body('name').not().isEmpty().trim().escape().withMessage('MealName is required'),
    body('image').not().isEmpty().trim().escape().withMessage('Image is required'),
    body('content').not().isEmpty().trim().escape().withMessage('Meal content is required')
]; 
