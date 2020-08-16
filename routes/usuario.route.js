const Router = require('express').Router(); 

const UsuarioCtrl = require('../controllers/usuario.ctrl');
const validate = require('../validations/usuario.validations');

Router.get('/', UsuarioCtrl.index);
Router.get('/:id', UsuarioCtrl.show);
Router.post('/', validate, UsuarioCtrl.store);
Router.put('/', UsuarioCtrl.update);

module.exports = Router;
