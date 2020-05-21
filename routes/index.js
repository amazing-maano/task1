var express = require('express');
var router = express.Router();

const Values = require('../models/values')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/', (req, res, next) => {
    console.log('calculion data: ' + JSON.stringify(req.body));


    let value = new Values({
        value1: req.body.firstNumber,
        value2: req.body.secondNumber,
        result1: req.body.result1,
        result2: req.body.result2,
        result3: req.body.result3,
        result4: req.body.result4
    });

    value.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
});


router.get('/outputs', function(req, res) {
    Values.find({}, function(err, result) {
        if (err) return handleError(err);
        res.render('outputs', { title: 'Welcome', caldata: result })
    })
});

module.exports = router;