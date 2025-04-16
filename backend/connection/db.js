const mongoose = require('mongoose');
 const dotenv = require('dotenv');


dotenv.config();
const mongo_url=process.env.MONGO_CONN;

const connectToMongoDB = async()=>{
    try {

        await mongoose.connect(mongo_url);
        console.log("✅Connected to MongoDB ...!")
        
    } catch (error) {
        console.log("Error in connecting to MongoDB", error.message);
        
    }
}

module.exports = connectToMongoDB;