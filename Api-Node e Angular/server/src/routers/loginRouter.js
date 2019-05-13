const express = require('express');
const router = express.Router();
const controller = require('../controllers/loginController');


let _ctr = new controller();

router.post('/',_ctr.logar);

router.post('/cadastrar',_ctr.cadastrar);


module.exports = router;