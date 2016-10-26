'use strict'

let fs = require('fs');
let path = require('path');
let express = require('express');
let pug = require('pug');
let config = require('./config.json');
let bodyParser = require('body-parser');
let mime = require('mime');
let app = express();
let mongoose = require('./mongoose');

app.set('view engine', 'pug');
app.set('views', path.resolve(`../${config.http.publicRoot}/source/template/pages`));

app.use(express.static(path.resolve(config.http.publicRoot)));
app.use(bodyParser.json());

app.use('/admin', require('./routes/admin/about'));
app.use('/admin', require('./routes/admin/blog'));
app.use('.admin', require('./routes/admin/work'));
app.use('/', require('./routes/front'));
app.use('/mail', require('./routes/mail'));

app.get('/*', function(req, res) {

    let fileName = './build' + req.url;

    let mimeType = mime.lookup(fileName),
        charset = mime.charsets.lookup(mimeType);
    //Установка заголовков
    res.setHeader('Content-Type', mimeType + '; charset=' + charset);
    console.log(fileName);
    if (fs.existsSync(fileName)) {
        var content = fs.readFileSync(fileName, { encoding: charset });
        res.write(content);
    } else {
        var content = fs.readFileSync('./404.html', { encoding: 'utf8' });
        res.setHeader('Content-Type', 'text/html; charset=utf8');
        res.status(404);
        res.write(content);
    }
    res.end();
})


app.use(function(req, res, next) {
    res.status(404).send('Page is not found! sorry!!!');
});

app.use(function(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err.message });
    console.error(err.message, err.stack);
});

app.listen(config.http.port, config.http.host, function() {
    let uploadDir = path.resolve(`../${config.http.publicRoot}`, 'upload');

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
    }
    console.log(`Server is up on ${config.http.host}:${config.http.port}!`);
});




// post1.save(function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('yra!');
//     }
// });
// post2.save(function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('yra!');
//     }
// });

// Post.find({}, function(err, items) {
//     items.forEach(function(item) {

//         console.log(item.date, item.title, item.text);
//     })

// });
