var express = require('express');
var router = express.Router();

var estudiante = require('../controllers/EstudianteController.js');

router.get('/', estudiante.list);
router.get('/create', estudiante.create);
router.post('/save', estudiante.save);

module.exports = router;
