import {User} from '../model/SignUpSchema.js'

export const singUpController = async (req, res) =>{
    try {
        const exist = await User.findOne({ username: req.body.username });
        if(exist) {
            return res.status(401).json({ message: 'User already exist'});
        }
        const user = req.body;
        console.log(user);
        const newUser = new User(user);
        await newUser.save();
        return res.status(200).json({message:user});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const logInController = async (req, res) =>{
    try {
        const username = req.body.username;
        const password = req.body.password;
        const exist = await User.findOne({username:username, password:password});
        if(exist){
            return res.status(200).json({data:exist});
        }
        else{
            return res.status(401).json(`Invalid Login`)
        }
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}