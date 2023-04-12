import express from 'express';

const port = 8000;

const app = express();

app.all('/hello', (req, res, next) => {
	console.log('ALL');
	next();
});

const callBack = (req, res, next) => {
	console.log('CallBack');
	next();
};

// app.get('/hel?lo', (req, res) => {
// 	res.send('HELLO'); // hello , helo
// 	//   /hel+lo hel = llllooooooo
// 	//   /hel*lo = hel oasfaijfasn
// });

// app.get('/hello', callBack, (req, res) => {
// 	res.send('HELLO'); // hello , helo
// 	//   /hel+lo hel = llllooooooo
// 	//   /hel*lo = hel oasfaijfasn
// });

app
	.route('/user')
	.get('/hello', callBack, (req, res) => {
		res.send('HELLO'); // hello , helo
		//   /hel+lo hel = llllooooooo
		//   /hel*lo = hel oasfaijfasn
	})
	.post('/hello', (req, res) => {
		res.send('HELLO');
	});

	app.get('/hello', (req, res) => {
		// res.send('HELLO');
	
		res.status(404).end();
	
		// res.cookie('token', 'sadasd', {
		// 	domain: '',
		// 	path: '/',
		// 	secure: true,
		// 	expires: 6000,
		// });
		// res.clearCookie('token');
		// res.set('Content-Type', 'text/plain');
		// res.append('warning', 'code');
		// res.type('application/json');
		// res.status(201).send({ success: true });
		// res.status(201).json({ success: false });
		// res.download('/test,pdf', 'tessst.pdf'); //custom name
		// res.redirect(301, `http://example.com`);
		// res.links({
		// 	next: 'sdsds',
		// });
	});
	

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
});
