import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from './asyncHandler.js';

const authenticate = asyncHandler(async(req, res, next)=>{
    let token;

    // Read JWT from the cookie

    token = req.cookies.jwt;

    if(token){
        try {
            const decoded = jwt.verify(token, process.env.jwt_secret);
            req.user = await User.findById(decoded.userId).select("-password");
            next();
        } catch (error) {
            res.status(401)
            throw new Error("Not Authorized, token failed.")
        }
    }else{
        res.status(401)
        throw new Error("Not Authorized, no token.")
    }

});


const authorizeAdmin = (req, res, next) =>{
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(401).send("Not authorized as an admin.")
    }
};

export {authenticate, authorizeAdmin};