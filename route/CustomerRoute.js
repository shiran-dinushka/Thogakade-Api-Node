const express = require('express');
const customerController = require('../controller/CustomerController');

const router = express.Router();

/*
* POST-> SAVE -->Body
* DELETE-->DELETE__> headers
* PUT-->UPDATE--> body
* GET-->FETCH--> headers
*
* */

router.post('/save', customerController.saveCustomer)
router.put('/update', customerController.updateCustomer)
router.get('/get', customerController.getCustomer)
router.delete('/delete', customerController.deleteCustomer)
router.get('/getAll', customerController.getAllCustomer)
router.get('/search', customerController.searchCustomer)

module.exports = router;