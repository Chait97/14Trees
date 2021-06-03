import Razorpay from 'razorpay';
import { Handler } from "@netlify/functions";

// type Order = { "id": "order_DaZlswtdcn9UNV", "entity": "order", "amount": 50000, "amount_paid": 0, "amount_due": 50000, "currency": "INR", "receipt": "Receipt #20", "status": "created", "attempts": 0, "notes": [], "created_at": 1572502745 }

type ResponseBody = {
    orderId: string,
    body: string,
    amount: number
}

const getRZPInstance = () => { 
    return new Razorpay({
        key_id: 'rzp_test_od3yQVWQEML7Ta',
        key_secret: 'qUAtQnTyukmFQY6fuB1dh5iV'
    })
}

const handler: Handler = async (event, context) => {
    const formData = JSON.parse(event.body)
    const orderNotes = {email: formData.email_id, trees: formData.trees }

    let options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11",
        notes: orderNotes
    };
    const instance = getRZPInstance()
    let responseBody: ResponseBody
    await instance.orders.create(options, function (err, order) {
        if (err) console.log(err)
        if (order) {
            console.log(order)
            responseBody = { orderId: order.id, body: "test string", amount: order.amount }
        }
    });

    // TODO: formData to firestore incl orderId
    return {
        statusCode: 200,
        body: JSON.stringify(responseBody),
    };
};

export { handler };