const mongoose=require('mongoose');
const ConnectDb=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/new");
        console.log("MongoDb Connected");

    }
    catch(error){
        console.log("Mongo Not Connected");
    }
}
module.exports=ConnectDb;