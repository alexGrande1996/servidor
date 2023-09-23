const { Router } = require('express');
const { crear·usuario } = require('../controllers/usuario');
const {validarCampos} = require('../middlewares/validar-campos'); 



const router = Router();



router.get('/crear',
            [
                validarCampos
            ],
            crear·usuario);


module.exports = router;