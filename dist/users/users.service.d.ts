/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateUserDto, RegisterGoogleUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { Product } from 'src/products/entities/product.entity';
import { Order } from 'src/orders/schema/order.schema';
import { Comment } from 'src/comments/entities/comment.entity';
export declare class UsersService {
    private userModel;
    private productModel;
    private orderModel;
    private commentModel;
    constructor(userModel: Model<User>, productModel: Model<Product>, orderModel: Model<Order>, commentModel: Model<Comment>);
    create(createUserDto: CreateUserDto): Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, User> & Omit<User & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
    }>;
    findAll(queryString: any): Promise<{
        message: string;
        listUser: Omit<import("mongoose").Document<unknown, {}, User> & Omit<User & {
            _id: import("mongoose").Types.ObjectId;
        }, never>, never>[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, User> & Omit<User & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
    }>;
    findByEmail(email: string): Promise<import("mongoose").Document<unknown, {}, User> & Omit<User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findByRefreshToken(refreshToken: string): Promise<import("mongoose").Document<unknown, {}, User> & Omit<User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(email: string, updateUserDto: UpdateUserDto): Promise<{
        message: string;
        user: import("mongoose").UpdateWriteOpResult;
    }>;
    remove(id: string): Promise<{
        message: string;
        user: import("mongodb").DeleteResult;
    }>;
    genarateHashPassword: (password: String) => any;
    verifyHashPassword: (password: String, hashedPassword: String) => any;
    updateRefreshTokenToDatabase: (_id: any, refreshToken: string) => Promise<void>;
    deleteRefreshTokenToDatabase: (_id: string) => Promise<void>;
    registerUser: (data: RegisterUserDto) => Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, User> & Omit<User & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
    }>;
    registerUserGoogle: (data: RegisterGoogleUserDto) => Promise<import("mongoose").Document<unknown, {}, User> & Omit<User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateOrderHistoryUser: (email: any, _id: any) => Promise<void>;
    findDasboard(): Promise<{
        message: string;
        totalOrder: number;
        totalUser: number;
        totalProd: number;
        totalPrice: number;
    }>;
}
