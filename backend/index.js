const express=require('express');
const app=express();
const port=process.env.PORT || 3001;
const cors=require('cors');
const Connection=require('./Db/Connection');
Connection();
const User=require('./Db/User');
//MIDLEWARE
app.use(express.json());
app.use(cors());
//READ
app.get('/',(req,res)=>{
    res.send("Hello");
})
//CREATE
//REGISTER
app.post('/test',async(req,res)=>{
    try{
        const {name,number,email,password}=req.body;
        const user=new User({name,number,email,password});
        await user.save();
        res.status(201).json({message:"posted",data:user});
    }
    catch(error){ 
        console.log(error);
        res.status(500).json({error:"failed"});
    }

})
//LOGIN
app.post('/login',async(req,res)=>{
        try{
            const {email,password}=req.body;
            const ue=User.findOne({email});
            const up=User.findOne({password});
            console.log(email);
            console.log(ue);
            res.status(200).json({message:"Login"});
        }
        catch(err){
            return res.status(500).json({error:"Invalid Credentials"});
        }
})
//SERVER STARTED
app.listen(port,()=>{
    console.log(`Server Started At Port ${port}`);
})
