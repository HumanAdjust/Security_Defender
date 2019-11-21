var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3308,
    database: 'security'
});

connection.connect();

router.get('/', function(req, res){
    res.render('../views/login.ejs');
});

router.get('/stage', function(req, res){
    res.render('../views/Stage.ejs');
});

router.post('/check_login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username && password) {
        connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                res.send('<script type="text/javascript">alert("로그인에 성공하셨습니다!"); document.location.href="/stage";</script>');
                res.end();
            } else {
                res.send('<script type="text/javascript">alert("ID 또는 비번이 틀렸습니다!"); document.location.href="/";</script>');
            }
            res.end();
        });
    } else {
        res.send('<script type="text/javascript">alert("아이디와 비밀번호를 입력해주세요!"); document.location.href="/";</script>');
    }
});

router.get('/stage', function (req, res) {
    res.render('../views/Stage.ejs');
});

module.exports = router;