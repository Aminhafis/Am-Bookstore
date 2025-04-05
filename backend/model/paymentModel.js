import { Schema, model } from "mongoose"

const paymentSchema = new Schema({
    order_id: {type:String , required:true},
    payment_id: {type:String},
    userId: {type: Schema.Types.ObjectId, ref: "User" , required: true},
    amount: {type: Number , required: true},
    currency: {type: String , default: "INR"},
    status: {type: String, enum: ["Pending", "Paid", "Failed"], default: "Pending"},
    createdAt: {type: Date, default: Date.now}
})

const Payment = model("Payment", paymentSchema)
export default Payment