const router = require('express').Router();

// matches GET requests to /api/users/
router.get('/', function (req, res, next) { 
    /* etc */
});

// matches POST requests to /api/users/
router.post('/', function (req, res, next) { 
    /* etc */
});

// matches PUT requests to /api/users/:usersId
router.put('/:usersId', function (req, res, next) { 
    /* etc */
});

// matches DELETE requests to /api/users/:usersId
router.delete('/:usersId', function (req, res, next) { 
    /* etc */
});

module.exports = router;