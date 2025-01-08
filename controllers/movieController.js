const connection = require('../data/db')

function index(req, res) {
    res.json('index');

}

function show(req, res) {
    res.json('show');

}

module.exports = { index, show }