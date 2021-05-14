 <template>
   <div>
        <h1>Pledge</h1>
        <form ref="payButton"> </form>
        <!-- <button @click="pay">Contribute</button> -->
        <!-- <button @click="getUsers">Contribute</button> -->
   </div>
</template>

<script>

const PAYMENT_BUTTON_URL="https://checkout.razorpay.com/v1/payment-button.js"
const PAYMENT_BUTTON_ID="pl_H7wNSNqT8XnEpN"

import { getUsers } from "~/utils";

export default {
    data: () => ({
    }),
    mounted() {
      console.log(this.$refs)
      let paymentScript = document.createElement('script')
      paymentScript.async = true
      paymentScript.src = PAYMENT_BUTTON_URL
      paymentScript.setAttribute("data-payment_button_id", PAYMENT_BUTTON_ID)
      this.$refs['payButton'].appendChild(paymentScript)
      console.log(paymentScript)
    },
    methods: {
      pay:() => {
        console.log("Contribute clicked!")
      },
      getUsers: getUsers,
    }
  }
</script>