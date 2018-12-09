let express = require('express'),
    router = express.Router(),
    uuidv1 = require('uuid/v1');

/**
 * Route to handle adding a new record.
 * @route("/records/add/")
 * @method("POST")
 * 
 * @example body 
 * {
 *       "type": "melee",
 *       "winner": "Donny",
 *       "loser": "David",
 *       "winnerStocksRemaining": "4",
 *       "stage": "Final Destination"
 * }
 */
router.post('/add', (req, res) => {
    console.log(req.body);

    // Generate a UUID for the match.
    let uuid = uuidv1();

    res.send(uuid);
});

module.exports = router;