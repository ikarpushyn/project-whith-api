import { BaseController } from '../common/base.controller';
import { NextFunction, Request, Response } from 'express';
import { LoggerService } from '../logger/logger.services';
import { HTTPError } from '../errors/http-error.class';

export class UserController extends BaseController {
	constructor(logger: LoggerService) {
		super(logger);
		this.bindRoutes([
			{ method: 'post', path: '/login', func: this.login },
			{ method: 'post', path: '/register', func: this.register },
		]);
	}

	private login(req: Request, res: Response, next: NextFunction) {
		next(new HTTPError(401, 'error Authorization', 'login'));
	}

	private register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, `register`);
	}
}
