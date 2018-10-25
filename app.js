//导入模块
const $express = require('express');
const $session = require('express-session');
const $user = require('./routes/user.js');
const $index = require('./index.js');
const $songSheet = require('./routes/songSheet.js');
const $bodyParser = require('body-parser');
//构建服务器
var app = $express();
app.listen(1234);//配置端口
//托管静态资源
app.use($express.static('./public'));

//使用bodyParser编码解析
app.use($bodyParser.urlencoded({
    extended: false
}));
app.use($session({
    secret: '128位随机字符串',
    resave: false,
    saveUninitialized: true,
}))
//挂载路由器
app.use('/', $index);
app.use('/user', $user);
app.use('/songSheet', $songSheet);

