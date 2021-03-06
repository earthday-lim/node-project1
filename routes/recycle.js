const express = require('express');
const moment = require('moment');
const fs = require('fs-extra');
const createError = require('http-errors');
const router = express.Router();

router.get(['/', '/recycle', '/recycle/:page'], async (req, res, next) => {
	let pug;
	try {
		pug = {
			title: '게시판 home', js: 'recycle', css: 'recycle', 
		};
		res.render('./recycle/recycle.pug', pug);
	}
	catch(e) {
		next(createError(500, e.sqlMessage || e));
	}
});


module.exports = router;