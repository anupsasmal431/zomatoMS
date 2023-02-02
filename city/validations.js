const {body} = require('express-validator');
module.exports.validations=[
    body('location_id').not().isEmpty().trim().escape().withMessage('Location is required'),
    body('name').not().isEmpty().trim().escape().withMessage('Name is required'),
    body('city').not().isEmpty().trim().escape().withMessage('City is required')
]; 
