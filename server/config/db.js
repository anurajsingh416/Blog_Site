const mongoose = require('mongoose');
const connectDB = async ()=>{
    try{
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`DATABASE Connected: ${conn.connection.host}`); 
    }
    catch(e){
        console.log(e);
    }
}
module.exports = connectDB;