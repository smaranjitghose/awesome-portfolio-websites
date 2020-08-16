var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Awesome portefolio website' });
});

/* GET experience page. */
router.get('/experience', (req, res, next) => {
    res.render('experience')
});

/* GET education page. */
router.get('/education', (req, res, next) => {
    res.render('education')
});

/* GET projects page. */
router.get('/projects', (req, res) => {
    res.render('projects')
});
/* GET experience page. */
router.get('/research', (req, res) => {
    res.render('research')
});
module.exports = router;