'use strict';

let fs = require('fs');
let path = require('path');
let express = require('express');
let jade = require('jade');
let	config = require('./config.json');
//let mongoose = require('./mongoose'); 
let app = express();

app.set('view engine','jade');
app.set('views', path.resolve('./${config.http.publicRoot}/template/'));

app.use(express.static(path.resolve(config.http.publicRoot)));


// ROUTES 

app.get('/',(req,res) => {

	res.setHeader('Content-type', 'text/html;charset=utf8');
	res.end('it works');

});

app.use((req,res,next) => res.status(404).send('not find!!!!!!'));

app.use((err,req,res, next) => {
	res.status(500);
	res.render('error', {error: err.message});
	console.error(err.message,err.stack);
});

app.listen(config.http.port, config.http.host, () => {
	let uploadDir = path.resolve(config.http.publicRoot, 'upload');

	if (!fs.existsSync(uploadDir)) {
		fs.mkdirSync(uploadDir);
	}

	console.log('Server is up on ${congif.http.host}:${config.http.port}!');
});