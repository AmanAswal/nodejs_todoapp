import mongoose from 'mongoose';

// connecting db
export const connectDatabase = () =>  mongoose.connect(process.env.MONGO_URI, {
    dbName: 'backendApi',
})
.then(() => console.log('Database connected'))
.catch((e) => console.log(e));