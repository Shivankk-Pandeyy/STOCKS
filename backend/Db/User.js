const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const saltrounds=10;
const StockSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true});
//hashing
StockSchema.pre('save',function(next){
    const user=this;
    bcrypt.genSalt(saltrounds,(err,salt)=>{
        if(err) return next(err);
        bcrypt.hash(user.password,salt,(err,hash)=>{
            if(err) return next(err);
            user.password=hash;
            next();
        });
    });
});
const Stock = mongoose.model('Stock',StockSchema);
module.exports=Stock;