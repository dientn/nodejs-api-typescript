import {Schema, Document, model, Model} from 'mongoose';
import * as moment from 'moment';
import {IProduct} from "../entities/product";
import {dbTablePrefix} from "../../../config";

export interface IProductModel extends IProduct, Document {

}

export var ProductSchema: Schema  = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    createdAt: Number,
    updatedAt: Number,
});

/**
 * Hook a pre save method to pre process data
 */
ProductSchema.pre('save', function(next) {
    this.increment();
    let now = +moment.utc();

    if( this.isNew ) {
        // @ts-ignore
        this.createdAt = now;
    }

    // @ts-ignore
    this.updatedAt = now;

    next();
});

// export default mongoose.model('Product', UserSchema);
//
// Export the model and return your IUser interface
export const Product:Model<IProductModel> = model<IProductModel>('Product', ProductSchema, dbTablePrefix.concat("product"));
