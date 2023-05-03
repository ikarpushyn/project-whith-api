"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const base_controller_1 = require("../common/base.controller");
const http_error_class_1 = require("../errors/http-error.class");
class UserController extends base_controller_1.BaseController {
    constructor(logger) {
        super(logger);
        this.bindRoutes([
            { method: 'post', path: '/login', func: this.login },
            { method: 'post', path: '/register', func: this.register },
        ]);
    }
    login(req, res, next) {
        next(new http_error_class_1.HTTPError(401, 'error Authorization', 'login'));
    }
    register(req, res, next) {
        this.ok(res, `register`);
    }
}
exports.UserController = UserController;
