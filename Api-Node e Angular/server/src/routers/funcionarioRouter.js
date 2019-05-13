const app = require('express');
const router = app.Router();
const controller = require('../controllers/funcionarioController');

let _crt = new controller();

router.get('/');

router.get('/detalhe-pc/:id',_crt.getpc);

router.get('/detalhe-api/:id',_crt.getapi);

module.exports = router;