const express = require('express');

const response = require('../../../network/response.js');
const controller = require('./controller.js');

const router = express.Router();

router.get('/', function (req, res) {
	const lista = controller.list();
	response.success(req, res, lista, 200);
})

module.exports = router;
