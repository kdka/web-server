var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // log message
    console.log(req.method + ' ' + req.originalUrl, new Date().toString());
    res.render('index', { title: 'Express' });
});

module.exports = router;
