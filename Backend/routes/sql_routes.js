const express = require('express')

const router = express.Router();
const db = require('../database/db')

router.get('sql/users', (req, res) => {
    db.query('SELECT * FROM users__mysql', (err, results) => {
        if (err) return res.status(500).json({error: err.message})
        res.json({message: results});
    });
});


router.get('sql/users/:id', (req, res) => {
    const {userId} = req.params;
    db.query('SELECT * FROM WHERE created_by = ?', [userId], (err, results) => {
        if (err) return res.status(500).json({error: err.message});
        res.json({message: results});
    })
})

module.exports = router;