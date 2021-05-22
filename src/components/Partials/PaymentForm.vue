 <template>
   <div>
     <div class="hidden sm:block" aria-hidden="true">
       <div class="py-5">
         <div class="border-t border-gray-200" />
       </div>
     </div>

     <form action="#" method="POST" id="pledgeForm" @submit="checkForm">
       <div id="contribution">
         <!-- ******************************************************** -->
         <!-- ****************** Contribution ************************-->
         <!-- ******************************************************** -->
         <div class="mt-10 sm:mt-0" v-if="activeSection == 'contribution'">

           <div class="md:grid md:grid-cols-3 md:gap-6">
             <div class="md:col-span-1">
               <div class="px-4 sm:px-0">
                 <h3 class="text-lg font-medium leading-6 text-gray-900">Contribution</h3>
                 <p class="mt-1 text-sm text-gray-600">
                   Start your journey towards planting 14 Trees for the environment
                 </p>
               </div>
             </div>

             <div class="mt-5 md:mt-0 md:col-span-1">
               <div class="shadow overflow-hidden sm:rounded-md">
                 <div class="px-4 py-5 bg-white dark:bg-dark-grey sm:p-6">
                   <div class="grid grid-cols-4 gap-6">
                     <div class="col-span-4">
                       <label for="first_name" class="block text-sm font-medium text-gray-700">Campaign</label>
                       <select v-model="campaign"
                         class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                     </div>

                     <div class="col-span-4 sm:col-span-2">
                       <label for="last_name" class="block text-sm font-medium text-gray-700">Number of Trees</label>
                       <input type="number" v-model="trees"
                         class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                     </div>

                     <div v-if="trees > 0" class="col-span-3">
                       <input type="text" v-for="(n,i) in names" :key="i" v-model="names[i]"
                         class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                     </div>
                     <button v-if="names.length < trees" @click="names.push('')" class="col-span-1">+</button>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           <div class="md:grid md:grid-cols-3 md:gap-6">
             <div class="md:col-span-1">
               <div class="px-4 sm:px-0 md:mt-0 mt-5">
                 <p class="mt-4 text-sm text-gray-600 py-6">
                   Besides making a monetary contribution, I'd also like to:
                 </p>
               </div>
             </div>

             <div class="mt-5 md:mt-0 md:col-span-2">
               <div class="shadow overflow-hidden sm:rounded-md">
                 <div class="px-4 py-5 bg-white dark:bg-dark-grey space-y-6 sm:p-6">
                   <fieldset>
                     <div class="mt-4 space-y-4">
                       <div class="flex items-start">
                         <div class="flex items-center h-5">
                           <input id="visit" name="visit" v-model="visit" type="checkbox"
                             class="dark:bg-dark-grey focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                         </div>
                         <div class="ml-3 text-sm">
                           <label for="visit" class="font-medium text-gray-700">14-Trees Site Visit</label>
                           <p class="text-gray-500">Plan a visit to the project site and plant trees by my own hands</p>
                         </div>
                       </div>
                       <div class="flex items-start">
                         <div class="flex items-center h-5">
                           <input id="csr" name="csr" v-model="csr" type="checkbox"
                             class="dark:bg-dark-grey focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                         </div>
                         <div class="ml-3 text-sm">
                           <label for="csr" class="font-medium text-gray-700">CSR Contributions</label>
                           <p class="text-gray-500">Explore possibility of CSR contribution through my company or my
                             employer</p>
                         </div>
                       </div>
                       <div class="flex items-start">
                         <div class="flex items-center h-5">
                           <input id="volunteer" name="volunteer" v-model="volunteer" type="checkbox"
                             class="dark:bg-dark-grey focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                         </div>
                         <div class="ml-3 text-sm">
                           <label for="candidates" class="font-medium text-gray-700">Volunteering</label>
                           <p class="text-gray-500">Volunteer my time, energy and expertise to grow this initiative
                             further</p>
                         </div>
                       </div>
                     </div>
                   </fieldset>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div v-else class="text-2xl font-extralight text-gray-800 dark:text-gray-400 pl-4">
           Personal Info
         </div>
         <!-- Border -->
         <div class="hidden sm:block" aria-hidden="true">
           <div class="py-5">
             <div class="border-t border-gray-200" />
           </div>
         </div>
       </div>

       <div id="personal_info" class="transition-height">
         <!-- ******************************************************** -->
         <!-- ***************** Personal Info ************************ -->
         <!-- ******************************************************** -->
         <div class="mt-10 sm:mt-0" v-if="activeSection == 'personal_info'">
           <div class="md:grid md:grid-cols-3 md:gap-6">
             <div class="md:col-span-1">
               <div class="px-4 sm:px-0">
                 <h3 class="text-lg font-medium leading-6 text-gray-900">Contact Information</h3>
                 <p class="mt-1 text-sm text-gray-600">
                   Choose an email address where you would like to receive correspondence.
                 </p>
               </div>
             </div>
             <div class="mt-5 md:mt-0 md:col-span-2">
               <div class="shadow overflow-hidden sm:rounded-md">
                 <div class="px-4 py-5 bg-white dark:bg-dark-grey sm:p-6">
                   <div class="grid grid-cols-6 gap-6">
                     <div class="col-span-6 sm:col-span-3">
                       <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                       <input type="text" v-model="first_name" name="first_name" id="first_name"
                         autocomplete="given-name"
                         class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                     </div>

                     <div class="col-span-6 sm:col-span-3">
                       <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                       <input type="text" v-model="last_name" name="last_name" id="last_name" autocomplete="family-name"
                         class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                     </div>

                     <div class="col-span-6 sm:col-span-4">
                       <label for="email_address" class="block text-sm font-medium text-gray-700">Email Address</label>
                       <input type="email" v-model="email_address" name="email_address" id="email_address"
                         autocomplete="email"
                         class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                     </div>

                     <div class="col-span-6 sm:col-span-3">
                       <label for="country" class="block text-sm font-medium text-gray-700">Country / Region</label>
                       <select id="country" v-model="location" name="country" autocomplete="country"
                         class="dark:bg-dark-grey mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-dark-grey rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                         <option>India</option>
                         <option>United States</option>
                         <option>Other</option>
                       </select>
                     </div>

                     <!-- Street Addreess -->
                     <div>
                       <!-- <div class="col-span-6">
                  <label for="street_address" class="block text-sm font-medium text-gray-700">Street address</label>
                  <input type="text" name="street_address" id="street_address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" name="city" id="city" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="state" class="block text-sm font-medium text-gray-700">State / Province</label>
                  <input type="text" name="state" id="state" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="postal_code" class="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                  <input type="text" name="postal_code" id="postal_code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div> -->
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div v-else class="text-2xl font-extralight text-gray-800 dark:text-gray-400 pl-4">
           Personal Info
         </div>

         <!-- Border -->
         <div class="hidden sm:block" aria-hidden="true">
           <div class="py-5">
             <div class="border-t border-gray-200" />
           </div>
         </div>
       </div>

       <div id="notifications" class="transition-height">
         <!-- ******************************************************** -->
         <!-- ****************** Notifications ************************-->
         <!-- ******************************************************** -->
         <div class="mt-10 sm:mt-0" v-if="activeSection == 'notifications'">
           <div class="md:grid md:grid-cols-3 md:gap-6">
             <div class="md:col-span-1">
               <div class="px-4 sm:px-0">
                 <h3 class="text-lg font-medium leading-6 text-gray-900">Communication</h3>
                 <p class="mt-1 text-sm text-gray-600">
                   Decide which communications you'd like to receive and how.
                 </p>
               </div>
             </div>
             <div class="mt-5 md:mt-0 md:col-span-2">
               <div class="shadow overflow-hidden sm:rounded-md">
                 <div class="px-4 py-5 bg-white dark:bg-dark-grey space-y-6 sm:p-6">
                   <fieldset>
                     <div class="mt-4 space-y-4">
                       <div class="flex items-start">
                         <div class="flex items-center h-5">
                           <input id="updates" name="updates" v-model="updates" type="checkbox"
                             class="dark:bg-dark-grey focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                         </div>
                         <div class="ml-3 text-sm">
                           <label for="comments" class="font-medium text-gray-700">14 Trees Milestones</label>
                           <p class="text-gray-500">Receive regular updates on the 14 Trees Foundation's progress in
                             your inbox</p>
                         </div>
                       </div>
                       <div class="flex items-start">
                         <div class="flex items-center h-5">
                           <input id="newsletter" name="newsletter" v-model="newsletter" type="checkbox"
                             class="dark:bg-dark-grey focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                         </div>
                         <div class="ml-3 text-sm">
                           <label for="candidates" class="font-medium text-gray-700">Newsletter</label>
                           <p class="text-gray-500">Subscribe to our annual report</p>
                         </div>
                       </div>
                     </div>
                   </fieldset>
                 </div>
                 <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                   <button type="submit"
                     class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                     Save
                   </button>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div v-else class="text-2xl font-extralight text-gray-800 dark:text-gray-400 pl-4">
           Notifications
         </div>
       </div>
     </form>

     <form ref="payButton"> </form>
     <!-- <button @click="pay">Contribute</button> -->
     <!-- <button @click="getUsers">Contribute</button> -->
   </div>
</template>

<script>

const PAYMENT_BUTTON_URL="https://checkout.razorpay.com/v1/payment-button.js"
const PAYMENT_BUTTON_ID="pl_H7wNSNqT8XnEpN"
export default {
    data: function() {
      return {
        first_name: "",
        last_name: "",
        email_address: "",
        location: "",
        campaign: "",
        trees: "",
        names: [""],
        csr: false,
        visit: false,
        volunteer: false,
        updates: false,
        newsletter:false
      }
    },
    mounted() {
      let paymentScript = document.createElement('script')
      paymentScript.async = true
      paymentScript.src = PAYMENT_BUTTON_URL
      paymentScript.setAttribute("data-payment_button_id", PAYMENT_BUTTON_ID)
      this.$refs['payButton'].appendChild(paymentScript)
    },
    methods: {
      pay : () => { console.log("Contribute clicked!") },
      checkForm: function(e) {
        console.log(
          this.first_name,
          this.last_name,
          this.email_address,
          this.location,
          this.campaign,
          this.trees,
          this.names,
          this.csr,
          this.visit,
          this.volunteer,
          this.updates,
          this.newsletter
        )
        e.preventDefault()
      }
    },
    computed: {
      activeSection: () => {
        return 'contribution'
      }
    }
  }
</script>