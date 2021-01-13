import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log(`Monogodb connected ${conn.connection.host}`.yellow.underline)
    }
    catch (err){
        console.log('err',err)
    }
}

export default connectDB