import {Document} from "mongoose";

export interface IProduct extends Document{
	name?: string,
	price?: number,
	quantity: number,
	createdAt: number,
	updatedAt: number,
}
