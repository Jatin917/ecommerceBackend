import { User } from "../model/SignUpSchema.js";


export const getUserDtails = async (req, res) =>{
    try {
        const id = req.params.id;
        // console.log(req.query);
        const user = await User.findById(id);
        if(user){
            return res.status(200).json({success:true, user});
        }
        return res.status(401).json({message:"user not found"});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}