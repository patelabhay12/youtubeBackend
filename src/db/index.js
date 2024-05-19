const mongoose = require("mongoose");
const { DB_NAME } = require("../constant.js");

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${"mongodb+srv://abhaypatel:Hari12345@cluster0.nppxxbp.mongodb.net"}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit();
    }
}


module.exports = connectDB; 