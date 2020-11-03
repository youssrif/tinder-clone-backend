import mongoose from 'mongoose'
const carSchema=mongoose.Schema({
    name:String,
    imgurl:String
})
export default mongoose.model('card',carSchema);