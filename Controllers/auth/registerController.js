const {user} = reqiure("../...models");
const bcrypt = require("bcrypt")
const registerController={
    async register (req,res,next){
        let user;
        try{
            const{fullname,email,mobile,password}=req.body;
            const emailExist = User.exists({email:email});
            if (emailExist){
                return res.status(409).json("Email already exist.");
            }
            const hashPasssword = await bcrypt.hash(passsword,10);
            user = await User.create({
                fullname,
                email,
                mobile,
                password,

        });
        } catch (error) {
            res.status(500).json({error:"Server error.",serverError:error});
        }
        res.status(201).json(cat);
    },

};
module.exports = registerController;