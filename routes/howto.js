const express = require('express');
const moment = require('moment');
const fs = require('fs-extra');
const createError = require('http-errors');
const router = express.Router();

router.get(['/', '/howto', '/howto/:page'], async (req, res, next) => {
	let pug;
	try {
		pug = {
			js: 'howto', css: 'howto', 
		};
		res.render('./howto/howto.pug', pug);
	}
	catch(e) {
		next(createError(500, e.sqlMessage || e));
	}
});


module.exports = router;