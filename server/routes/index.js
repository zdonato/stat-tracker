let express = require('express'),
    path = require('path'),
    router = express.Router();

/**
 * Homepage.
 * @route("/")
 * @method("GET")
 * 
 */
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public/'} );
});

module.exports = router;