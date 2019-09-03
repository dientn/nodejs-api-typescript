import {Request, Response, NextFunction} from "express";
import {IProductModel, Product} from "../models/product.model";
import {HTTP404Error} from "../../../utils/http.error";

export class ProductController{
    public async list (req: Request, res: Response, next: NextFunction) {
        const products: Array<IProductModel> =  await Product.find({quantity: {$gte: 0}});
        res.json(products);
    }

    public async create (req: Request, res: Response, next: NextFunction) {
        const product: IProductModel = await Product.create(req.body)
        res.json(product);
    }

    public async get (req: Request, res: Response, next: NextFunction) {
        const product = await Product.findById(req.params.id);
        if(!product){
            return next(new HTTP404Error())
        }

        res.json(product);
    }

    public async update (req: Request, res: Response, next: NextFunction) {
        let product = await Product.findById(req.params.id);
        if(!product){
            return next(new HTTP404Error())
        }
        await product.update(req.body);
        product = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.json(product);
    }

    public async delete (req: Request, res: Response, next: NextFunction) {
        let product = await Product.findById(req.params.id);
        if(!product){
            return next(new HTTP404Error())
        }
        const products:Array<IProductModel> = await Product.find({quantity: {$gte: 0}});
        res.json(products);
    }

    // private async getById(id){
    //     const product = await Product.findById(id);
    //     return product;
    // }
}

export default new ProductController();
