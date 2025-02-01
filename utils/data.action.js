"use server";

import connectDb from "./db";
import Visitor from "./modal";

export async function createData(data) {
    try{
       
        await connectDb();

        const newdata=await Visitor.create(data);

        return JSON.parse(JSON.stringify(newdata));
    }catch(err){
        console.log(err)
    }
}