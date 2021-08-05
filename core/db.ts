import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/twitter',{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;

export {db, mongoose};