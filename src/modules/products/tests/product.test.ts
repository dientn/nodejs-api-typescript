import * as request from "supertest";
import app from "../../../bootstrap/app";

import {IProductModel, Product} from "../models/product.model";
import {HTTP404Error} from "../../../utils/http.error";
describe("Product", () => {

    beforeEach(() => {

    });

    afterAll(() =>{
        // app.server.close();
    })

    describe("/Create product", () => {
        const product: IProductModel = new Product({
            name:'product test',
            price: 123.11,
            quantity: 12
        });

        test("it data should be success", async () => {

            Product.find = jest.fn().mockResolvedValue([product])
            const response = await request(app)
                .post("/api/v1/products").send(product);

            expect(response.status).toEqual(200);
        });
    });

    describe("/List product", () => {
        const product: IProductModel = new Product({
            name:'product test',
            price: 123.11,
            quantity: 12
        });

        test("it data should be success", async () => {

            Product.find = jest.fn().mockResolvedValue([product])
            const response = await request(app)
                .get("/api/v1/products");

            expect(response.status).toEqual(200);
        });
    });

    describe("/Get product", () => {
        const product: IProductModel = new Product({
            name:'product test',
            price: 123.11,
            quantity: 12
        });

        test("it data should be success", async () => {

            Product.findById = jest.fn().mockResolvedValue([product])
            const response = await request(app)
                .get("/api/v1/products/123").send(product);

            expect(response.status).toEqual(200);
        });

        test("it data should be fail with was not found", async () => {

            Product.findById = jest.fn().mockResolvedValue(null)
            const response = await request(app)
                .get("/api/v1/products/123").send(product);

            expect(response.status).toEqual(404);
            expect(response.error).toHaveProperty('text');
            expect(response.error.text).toEqual('Not found')
        });
    });
});
