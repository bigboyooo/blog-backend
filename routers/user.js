const Router = require('koa-router')
const router = new Router();

const user = require('../model/user');

router.post('/login', user.login);
router.post('/regist', user.regist);

module.exports = router;