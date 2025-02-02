"use server";

import connectDb from "./db";
import Visitor from "./modal";

export async function createData(data) {
    try{
       
        await connectDb();
           console.log("data",data)
        const newdata=await Visitor.create(data);
        const allVisitors = await Visitor.find({});
      

        return JSON.parse(JSON.stringify(allVisitors));
    }catch(err){
        console.log(err)
    }
}

export async function completeData() {
    try{
       
        await connectDb();
           
        
        const allVisitors = await Visitor.find({});
      
       
        return JSON.parse(JSON.stringify(allVisitors));
    }catch(err){
        console.log(err)
    }
    
}