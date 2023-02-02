const {body} = require('express-validator');
module.exports.validations=[
    body('description').not().isEmpty().trim().escape().withMessage('Description is required'),
    body('name').not().isEmpty().trim().escape().withMessage('Name is required'),
    body('restaurantId').not().isEmpty().trim().escape().withMessage('RestaurentID is required'),
    body('ingridients').not().isEmpty().trim().escape().withMessage('Ingridents is required'),
    body('image').not().isEmpty().trim().escape().withMessage('Image is required'),
    body('qty').not().isEmpty().trim().escape().withMessage('Quantity is required'),
    body('price').not().isEmpty().trim().escape().withMessage('Price is required')
]; 
