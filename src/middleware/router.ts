import * as path from 'path';
import {Router, Application} from "express";
import * as config from "../config";
// import 'require-context/register';
// import * as requireContext from 'require-context';
import requireContext from '../utils/require.context';
import {Context} from "../utils/require.context";


export const handleRouter = (app: Application, router: Router) => {

	// console.log(requireContext(path.resolve(__dirname, "../modules"), true, /\.route\.(js?|ts?)$/));
	let context: Context;
	context = requireContext(path.resolve(__dirname, "../modules"), true, /\.route\.(js?|ts?)$/);

	context.files().forEach((routePath) => {
		let routes = require(routePath);
		routes.default(router);
	});

	// app.use(config.basePath, jwt);
	app.use(config.basePath, router);
};
