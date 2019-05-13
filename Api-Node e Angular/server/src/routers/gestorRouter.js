const app = require('express');
const router = app.Router();
const controller = require('../controllers/gestorControlllers');

let _crt = new controller();

router.get('/');

router.get('/detalhe-pc');

router.get('/detalhe-api');

router.post('/cadastro-api',_crt.cadastroapi);

router.post('/cadastro-colaborador',_crt.cadastrofuncionario);

module.exports = router;