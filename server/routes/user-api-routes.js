const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        message: "user get route"
    });
});

module.exports = router;