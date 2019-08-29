import * as path from 'path';
import {Router, Application} from "express";
import * as config from "../config";
import * as requireContext from 'require-context';


const files = requireContext(path.resolve(__dirname, "../modules"), true, /\.route\.js$/);

export const handleRouter = (app: Application, router: Router) => {
	files.keys().forEach((routePath) => {
		let routes = require(files.resolve(routePath));
		routes.default(router);
	});

	// app.use(config.basePath, jwt);
	app.use(config.basePath, router);
};
