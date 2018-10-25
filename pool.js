//配置连接池
const $mysql = require('mysql');
var pool = $mysql.createPool({
    host: 'localhost',//地址
    port: '3306',//端口
    user: 'root',//用户名
    password: '',//密码
    database: 'music',//数据库名
    connectionLimit: 15//连接池数量
});
//导出连接池
module.exports = pool;