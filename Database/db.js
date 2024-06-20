import mongoose from "mongoose"


const Connection = async (username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.d9i4m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try {
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true});
        console.log("Database Connected succesfully");
    } catch (error) {
        console.log("Error in connecting to the database", error.message);
    }
}

export default Connection;                                    