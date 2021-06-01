 <template>
 	<div>
 		<div class="hidden sm:block" aria-hidden="true">
 			<div class="py-5">
 				<div class="border-t border-gray-200" />
 			</div>
 		</div>

 		<ClientOnly>
 			<form id="pledgeForm"  @submit.prevent="checkAndSubmitForm" class="mt-24 ml-12 mb-32">
 				<div id="contribution h-full transition-height duration-500 ease-in-out">
 					<!-- ******************************************************** -->
 					<!-- ****************** Contribution ************************-->
 					<!-- ******************************************************** -->
 					<div class="mt-10 sm:mt-0" v-if="contributionExpand">

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
 												<label for="first_name"
 													class="block text-sm font-medium text-gray-700">Campaign</label>
 												<select v-model="campaign"
 													class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
 													<option v-for="(c,i) in campaignList" :key="i" :value="c">{{c}}
 													</option>
 												</select>
 											</div>

 											<div class="col-span-4 xl:col-span-2">
 												<label for="last_name"
 													class="block text-sm font-medium text-gray-700">Number of
 													Trees</label>
 												<div class="flex flex-row w-full h-11">
 													<button type="button" @click="removeTree()" class="flex-none bg-gray-100 text-gray-600 hover:text-gray-700 
                            hover:bg-gray-400 h-10 w-8 rounded-l cursor-pointer focus:outline-none m-1">
 														<span class="m-auto text-2xl font-thin">−</span>
 													</button>
 													<input type="number" v-model.number="trees"
 														class="flex-grow appearance-none dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
 													<button type="button" @click="addTree()" class=" flex-none bg-gray-100 text-gray-600 hover:text-gray-700 
                            hover:bg-gray-400 h-10 w-8 rounded-r cursor-pointer focus:outline-none m-1">
 														<span class="m-auto text-2xl font-thin">+</span>
 													</button>
 												</div>
 											</div>

 											<div v-if="trees > 0" class="col-span-3">
 												<div v-for="(n,i) in names" :key="i" class="flex flex-row">
 													<input type="text" v-model="names[i]" class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 
                         block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
 													<button type="button" @click="names.splice(i, 1)" class="block ml-4 w-6 h-6 my-auto transition-colors bg-red-200 rounded-full ring-2
													  ring-red-200">
						 								<svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-500" viewBox="0 0 20 20">
 															<path fill-rule="evenodd"
 																d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
 																clip-rule="evenodd" />
 														</svg> </button>
 												</div>
 											</div>
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
 														<label for="visit" class="font-medium text-gray-700">14-Trees
 															Site Visit</label>
 														<p class="text-gray-500">Plan a visit to the project site and
 															plant trees by my own hands</p>
 													</div>
 												</div>
 												<div class="flex items-start">
 													<div class="flex items-center h-5">
 														<input id="csr" name="csr" v-model="csr" type="checkbox"
 															class="dark:bg-dark-grey focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
 													</div>
 													<div class="ml-3 text-sm">
 														<label for="csr" class="font-medium text-gray-700">CSR
 															Contributions</label>
 														<p class="text-gray-500">Explore possibility of CSR
 															contribution through my company or my
 															employer</p>
 													</div>
 												</div>
 												<div class="flex items-start">
 													<div class="flex items-center h-5">
 														<input id="volunteer" name="volunteer" v-model="volunteer"
 															type="checkbox"
 															class="dark:bg-dark-grey focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
 													</div>
 													<div class="ml-3 text-sm">
 														<label for="candidates"
 															class="font-medium text-gray-700">Volunteering</label>
 														<p class="text-gray-500">Volunteer my time, energy and
 															expertise to grow this initiative
 															further</p>
 													</div>
 												</div>
 											</div>
 										</fieldset>
 									</div>
 								</div>
 							</div>
 						</div>
 						<button v-if="personal_infoExpand == false"
 							class="focus:outline-none block w-24 h-12 mx-auto rounded-full" @click="checkSection">
 							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 animate-bounce mx-auto" fill="none"
 								viewBox="0 0 24 24" stroke="currentColor">
 								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
 									d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
 							</svg>
 						</button>
 					</div>
 					<div v-else @click="contributionExpand = true" class=" hover:bg-gray-50 transition-colors duration-500 
            text-2xl font-extralight text-gray-800 dark:text-gray-400 pl-4 py-6 rounded-lg">
 						Your Contribution
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
 					<div class="mt-10 sm:mt-0" v-if="personal_infoExpand">
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
 												<label for="first_name"
 													class="block text-sm font-medium text-gray-700">First name</label>
 												<input type="text" v-model="first_name" name="first_name"
 													id="first_name" autocomplete="given-name"
 													class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
 											</div>

 											<div class="col-span-6 sm:col-span-3">
 												<label for="last_name"
 													class="block text-sm font-medium text-gray-700">Last name</label>
 												<input type="text" v-model="last_name" name="last_name" id="last_name"
 													autocomplete="family-name"
 													class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
 											</div>

 											<div class="col-span-6 sm:col-span-4">
 												<label for="email_address"
 													class="block text-sm font-medium text-gray-700">Email
 													Address</label>
 												<input type="email" v-model="email_address" name="email_address"
 													id="email_address" autocomplete="email"
 													class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
 											</div>

 											<div class="col-span-6 sm:col-span-3">
 												<label for="country"
 													class="block text-sm font-medium text-gray-700">Country /
 													Region</label>
 												<select id="country" v-model="location" name="country"
 													autocomplete="country"
 													class="dark:bg-dark-grey mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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
 						<button v-if="communicationExpand == false" class="block w-24 h-12 mx-auto rounded-full"
 							@click="checkSection">
 							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 animate-bounce mx-auto" fill="none"
 								viewBox="0 0 24 24" stroke="currentColor">
 								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
 									d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
 							</svg>
 						</button>
 					</div>
 					<div v-else @click="personal_infoExpand = true" class=" hover:bg-gray-50 transition-colors duration-500 
            text-2xl font-extralight text-gray-800 dark:text-gray-400 pl-4 py-6 rounded-lg">
 						Personal Info
 					</div>

 					<!-- Border -->
 					<div class="hidden sm:block" aria-hidden="true">
 						<div class="py-5">
 							<div class="border-t border-gray-200" />
 						</div>
 					</div>
 				</div>

 				<div id="communication" class="transition-height">
 					<!-- ******************************************************** -->
 					<!-- ****************** Communication ************************-->
 					<!-- ******************************************************** -->
 					<div class="mt-10 sm:mt-0" v-if="communicationExpand">
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
 														<label for="comments" class="font-medium text-gray-700">14
 															Trees Milestones</label>
 														<p class="text-gray-500">Receive regular updates on the 14
 															Trees Foundation's progress in
 															your inbox</p>
 													</div>
 												</div>
 												<div class="flex items-start">
 													<div class="flex items-center h-5">
 														<input id="newsletter" name="newsletter" v-model="newsletter"
 															type="checkbox"
 															class="dark:bg-dark-grey focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
 													</div>
 													<div class="ml-3 text-sm">
 														<label for="candidates"
 															class="font-medium text-gray-700">Newsletter</label>
 														<p class="text-gray-500">Subscribe to our annual report</p>
 													</div>
 												</div>
 											</div>
 										</fieldset>
 									</div>
 								</div>
 							</div>
 						</div>
 					</div>
 					<div v-else @click="communicationExpand = true" class=" hover:bg-gray-50 transition-colors duration-500 
            text-2xl font-extralight text-gray-800 dark:text-gray-400 pl-4 py-6 rounded-lg">
 						Communication
 					</div>
 				</div>

 				<!-- Border -->
 				<div class="hidden sm:block" aria-hidden="true">
 					<div class="py-5">
 						<div class="border-t border-gray-200" />
 					</div>
 				</div>

 				<!-- Contribute Button -->
 				<button type="submit" class="btn-action block mx-auto text-white bg-green-500 dark:bg-green-600
          hover:bg-green-600 duration-500">
 					Contribute
 				</button>

 			</form>

 		</ClientOnly>

 		<form ref="payButton"> </form>
 	</div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
      return {
        contributionExpand: true,
        communicationExpand: false,
        personal_infoExpand: false,
        first_name: "",
        last_name: "",
        email_address: "",
        location: "",
        campaign: "",
        trees: 1,
        names: [""],
        csr: false,
        visit: false,
        volunteer: false,
        updates: false,
        newsletter:false,
        campaignList: ['test campaign 1', 'test campaign 2']
      }
    },
    mounted() {
	  	console.log("Route:", window.location.origin)
    },
    methods: {
      removeTree: function() {
        if(this.trees > 1) {
          this.trees--
        }
        if (this.names.length > this.trees) {
          this.names.pop()
        }
      },
      addTree: function() {
        this.trees++
        this.names.push('')
      },
      checkAndSubmitForm: async function(e) {
        const formData = {
          first_name: this.first_name,
          last_name: this.last_name,
          email_id: this.email_address,
          location: this.location,
          campaign: this.campaign,
          trees : this.trees,
          names : this.names,
          csr: this.csr,
          visit: this.visit,
          volunteer: this.volunteer,
          updates: this.updates,
          newsletter: this.newsletter
        }
		try {
			let rzpEndpoint = window.location.origin + "/.netlify/functions/razorpay_test"
			let response = await axios.post(rzpEndpoint, formData)
			console.log(response.data, response.status)
		} catch(err) {
			console.error(err)
		}
        e.preventDefault()
      },
      checkSection: function(e) {
        if (!process.isClient) {
          this.contributionExpand = true;
        } else if (this.contributionFilled && this.personalInfoFilled) {
          this.communicationExpand = true 
        } else if (this.contributionFilled && !this.personalInfoFilled) {
          this.personal_infoExpand = true
        } else {
          // default
          this.contributionExpand = true
        }
        e.preventDefault()
      },
    },
    computed: {
      contributionFilled: function() {
        return typeof this.trees === 'number' 
          && this.trees > 0 
          && this.names?.length > 0
          && this.campaign.length > 0
      },
      personalInfoFilled: function() {
        return this.first_name.length > 0
          && this.last_name.length > 0
          && this.email_address.length > 0 
      }
    }
  }
</script>