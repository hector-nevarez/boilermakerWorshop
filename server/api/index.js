const router= require('express').Router();

router.use('/users', require('./users'));

// Custom 404 for unknown API calls
router.use(function (req, res, next){
    const err = new Error('Not Found. Check your URL');
    err.status= 404;
    next(err);
});

module.exports= router;
