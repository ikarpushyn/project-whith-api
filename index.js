import express from 'express';
import { userRouter } from './users/users.js';

const port = 8000;

const app = express();

app.use((req, res, next) => {
	console.log(`Time , ${Date.now()}`);
	next();
});

app.get('/hello', (req, res) => {
	// res.send('HELLO');

	throw new Error('Errorssss');
});

app.use('/users', userRouter);

app.use((err, req, res, next) => {
	console.log(err.message);
	res.status(500).send(err.message);
	next();
});

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
});
