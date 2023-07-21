const mongoose = require('mongoose')

connectDb = async()=>{
    try{
    const Mongo_Url = process.env.Mongo_Url
       const con  = await mongoose.connect(Mongo_Url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify : false,
        // useCreateIndex : true,
    })
    console.log(`MongoDB connected : ${con.connection.host}`)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDb;