import mongoose from "mongoose"

const categorySchema = mongoose.Schema({
    category:{
        type:String
    }
})

const categoryModel = mongoose.model('categories',categorySchema)

export default categoryModel

