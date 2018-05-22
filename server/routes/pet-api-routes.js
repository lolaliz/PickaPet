const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        message: "pet get route"
    });
});

router.post('/', (req, res) => {
//     var mysql = require('mysql2');  

// var connection2 = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'dogs_table'
// });

// if (this.state.answers[3] !== '0' ) {
//         connection2.connect();
//         connection2.query("SELECT * FROM dogs_table WHERE child_friendly='no'", function(err, rows, fields) {
//             // if (!err) {
//             //     res.send(JSON.stringify(rows));
//             // } else {
//             //     console.log('Error while performing Query.');
//             // }
//         });
//         connection2.end();
// }

    res.json({
        message: "pet post route"
    });
});

module.exports = router;