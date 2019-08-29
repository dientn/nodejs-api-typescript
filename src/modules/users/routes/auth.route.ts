
// Load Module dependencies.
import {Router} from "express";
import {signUp} from "../controllers/auth.controller";

export default function  (router: Router){
    router.get( '/signup', signUp);
};
