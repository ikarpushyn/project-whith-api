import express from 'express';

const userRouter = express.Router();

userRouter.use((req, res, next) => {
	console.log(`Time users counter started , ${Date.now()}`);
	next();
});

userRouter.post('/login', (req, res) => {
	console.log(`counter started`);
	res.send('login');
});
userRouter.post('/register', (req, res) => {
	res.send('register');
});

export { userRouter };
