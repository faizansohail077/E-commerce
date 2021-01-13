import mongoose from 'mongoose'

const reviewScheme=mongoose.Schema({
    name:{type:String,required:true},
    rating:{type:Number,required:true},
    name:{type:String,required:true},

},{timeStamp:true})

const productSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        
    },
    brand: {
        type: String,
        required: true
    },
    catagory: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews:[reviewScheme],
    rating: {
        type: Number,
        required: true,
        default:0,
    }, 
    numReviews: {
        type: Number,
        required: true,
        default:0,
    },
    price: {
        type: Number,
        required: true,
        default:0,
    },
    countInStock: {
        type: Number,
        required: true,
        default:0,
    }
}, { timeStamp: true })

 const product=mongoose.model('Product',productSchemaema)

 export default product