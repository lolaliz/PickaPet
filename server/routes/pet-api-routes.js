const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        message: "pet get route"
    });
});

router.post('/', (req, res) => {
    res.json({
        message: "pet post route"
    });
});

module.exports = router;