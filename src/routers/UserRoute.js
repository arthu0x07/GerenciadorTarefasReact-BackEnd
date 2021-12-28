const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');

router.post('/login', UserController.LoginUser);
router.post('/register', UserController.CreateUser);
router.delete('/delete', UserController.DeleteUser);
router.put('/modify', UserController.ModifyUser);

module.exports = router;