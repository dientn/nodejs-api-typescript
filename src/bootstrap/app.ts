import * as express from "express";
import { applyMiddleware } from "../utils";
import errorHandlers from "../middleware/error.handler";
import middleware from "../middleware";
import * as config from "../config";
import { connect } from "mongoose";
import {Request, Response} from "express";
import * as http from "http";
import {isDebug} from "../config";



class App {

    public app: express.Application;
    public server: http.Server;
    // public routePrv: Routes = new Routes();

    // public mongoUrl: string = 'mongodb://dalenguyen:123123@localhost:27017/CRMdb';
    private mongoUrl: string = `mongodb://${config.dbHost}:${config.dbPort}/${config.dbName}`;

    constructor() {
        this.app = express();
        this.initialize();
        // this.routePrv.routes(this.app);
        this.databaseSetup();
    }

    private initialize(): void{

        this.app.use(express.static('public'));

        const router = express.Router();

        // applyRoutes(routes, router);
        applyMiddleware(middleware, this.app, router);
        applyMiddleware(errorHandlers, this.app, router);

        this.app.get("/", (req: Request, res: Response) => {
            return res.send("Wellcome");
        });

        this.app.get("/home", (req: Request, res: Response) => {
            return res.send("Wellcome");
        });
        // start express server
        this.server = this.app.listen(config.port);

        isDebug && console.log(`Server listening on  ${config.protocol}://${config.host}:${config.port}`)
    }


    private databaseSetup(): void{
        connect(this.mongoUrl, config.dbOptions).then(err =>{
            // if(err){
            //     console.warn(err);
            // }
        });
    }

}

export default new App().app;
