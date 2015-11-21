var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(new Date().toString(), req.method + ' ' + req.originalUrl);
    res.render('index', { title: 'Express' });
});

module.exports = router;
