const express = require('express');
const moment = require('moment');
const fs = require('fs-extra');
const createError = require('http-errors');
const router = express.Router();
const { sqlGen } = require('../modules/mysql-conn');
const pager = require('../modules/pager-conn');

router.get(['/', '/home', '/home/:page'], async (req, res, next) => {
	let page = req.params.page || 1;
	let connect, rs, pug;
	try {
		rs = await sqlGen('home', 'S', {field: ['count(id)']});
		let pagers = pager(page, rs[0][0]['count(id)'], {pagerCnt: 3, listCnt: 7});
		pug = {
			title: '게시판 home', js: 'home', css: 'home', 
			...pagers
		};
		rs = await sqlGen('home', 'S', { 
			order: ['id', 'DESC'], 
			limit: [pagers.startIdx, pagers.listCnt]
		});
		pug.lists = rs[0];
		pug.lists.forEach((v) => {
			v.wdate = moment(v.wdate).format('YYYY년 MM월 DD일');
		});
		res.render('./home/home.pug', pug);
	}
	catch(e) {
		next(createError(500, e.sqlMessage || e));
	}
});


module.exports = router;