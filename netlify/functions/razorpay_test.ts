import Razorpay from 'razorpay';
import { Handler } from "@netlify/functions";

const getRZPInstance = () => { 
    return new Razorpay({
        key_id: 'rzp_test_od3yQVWQEML7Ta',
        key_secret: 'qUAtQnTyukmFQY6fuB1dh5iV'
    })
}

const handler: Handler = async (event, context) => {
    const orderNotes = JSON.parse(event.body)
    let options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11",
        notes: orderNotes
    };
    const instance = getRZPInstance()
    await instance.orders.create(options, function (err, order) {
        console.log(order);
    });

    return {
        statusCode: 200,
        body: "OK",
    };
};

export { handler };