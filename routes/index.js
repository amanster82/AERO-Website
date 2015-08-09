var express = require('express');
var config = require('config');
var router = express.Router();

var homePage = config.homePage;

/* GET home page. */
router.get('/', function(req, res, next) {
      res.render('index', config);
});

router.get('/:route', function(req, res, next) {
    res.render(req.params.route, config, function(err, html){
        if(err){
            //template does not exist
            next();
        }else{
            res.send(html);
        }
    });
});

module.exports = router;
