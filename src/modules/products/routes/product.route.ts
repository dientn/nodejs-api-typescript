
// Load Module dependencies.
import {Router} from "express";
import productController from "../controllers/product.controller";

export default function  (router: Router){

    router.route('/products')
        .get(productController.list)
        .post(productController.create);

    router.route( '/products/:id')
        .get(productController.get)
        .put(productController.update)
        .delete(productController.delete);
};
