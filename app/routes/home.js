module.exports = (app) => {
    const db = require('../../config/db.js');

    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/lists', (req, res) => {
        db.ref('/').once('value').then((data) =>{
            res.send(data.val());
        });
    });

    app.post('/', (req, res) => {
        db.ref('/').push(req.body);
        res.redirect('/');
    });
}