import Razorpay from "razorpay"
import crypto from "crypto"
import Payment from "../model/paymentModel.js"
import dotenv from "dotenv"

dotenv.config()

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
})

export const createOrder = async (req,res) =>{
    const { amount, currency, userId } = req.body

    if (!amount || !currency || !userId){
        return res.status(400).json({message:"Amount,Currency and UserId are required!"})
    }

    try{
        const options = {
            amount : amount*100 , 
            currency : currency || "INR",
            receipt : `receipt_${Date.now()}`
        }
        const order = await razorpay.orders.create(options)
        res.status(200).json(order);

        // const newPayment = new Payment({
        //     order_id: order.id,
        //     userId,
        //     amount,
        //     currency,
        //     status: "Pending"
        // })

        // await newPayment.save()
        // res.status(200).json(order)
    } catch (error) {
        console.error("Order creation failed:", error)
        res.status(500).json({message: "Order creation failed", error})
    }
}

export const verifyPayment = async (req,res) => {
    const { order_id, payment_id, razorpay_signature} = req.body

    if (!order_id || !payment_id || !razorpay_signature) {
        return res.status(400).json({ message: "Missing required fields"})
    }

    try{
        const keySecret = process.env.RAZORPAY_KEY_SECRET
        const generatedSignature = crypto
        .createHmac("sha256", keySecret)
        .update(order_id + "|" + payment_id)
        .digest("hex")

        if (generatedSignature === razorpay_signature){
            await Payment.findOneAndUpdate(
                {order_id},{payment_id, status:"Paid"},
                { new: true}
            )
            res.status(200).json({ message: "Payment verified succesfully"})
        } else {
            await Payment.findOneAndUpdate({order_id},{status:"Failed"})

            res.status(400).json({ message: "Invalid signature, payment verification failed" });
        }
        } catch (error) {
            res.status(500).json({ message: "Payment verification failed", error})
        }
}
