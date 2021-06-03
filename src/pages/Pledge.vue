 <template>
     <Layout>
        <div class="container full-page-generic">
            <h1 class="title-text"> Pledge Now</h1>
            <div class="mx-4 md:pt-16">
 	<div>
 		<div class="hidden sm:block" aria-hidden="true">
 			<div class="py-5">
 				<div class="border-t border-gray-200" />
 			</div>
 		</div>

 		<ClientOnly>
 			<form action="#" method="POST" id="pledgeForm" @submit="checkAndSubmitForm" class="mt-24 ml-12 mb-32">
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

 							<div class="mt-5 md:mt-0 col-span-2 lg:col-span-1">
 								<div class="shadow overflow-hidden sm:rounded-md">
 									<div class="px-4 py-5 bg-white dark:bg-dark-grey sm:p-6">
 										<div class="grid grid-cols-4 gap-6">
 											<div class="col-span-4">
 												<label for="first_name"
 													class="block text-sm font-medium text-gray-700">Campaign</label>
 												<select v-model="campaign" required
 													class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
 													<option v-for="(c,i) in campaigns" :key="i" :value="c">{{c.name}}
 													</option>
 												</select>
												 <p class="text-gray-600 text-sm font-light p-4" v-if="campaign.description">{{campaign.description}}</p>
 											</div>

 											<div class="col-span-4 xl:col-span-2">
 												<label for="last_name"
 													class="block text-sm font-medium text-gray-700">Number of
 													Trees</label>
 												<div class="flex flex-row w-full h-11">
 													<button type="button" @click="trees--" class="flex-none bg-gray-100 text-gray-600 hover:text-gray-700 
                            hover:bg-gray-400 h-10 w-8 rounded-l cursor-pointer focus:outline-none m-1">
 														<span class="m-auto text-2xl font-thin">−</span>
 													</button>
 													<input type="number" v-model.number="trees" min="1"
 														class="flex-grow appearance-none dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
 													<button type="button" @click="trees++" class=" flex-none bg-gray-100 text-gray-600 hover:text-gray-700 
                            hover:bg-gray-400 h-10 w-8 rounded-r cursor-pointer focus:outline-none m-1">
 														<span class="m-auto text-2xl font-thin">+</span>
 													</button>
 												</div>
 											</div>

 											<div v-if="trees > 0" class="col-span-3">
 												<label for="names" class="block text-sm font-medium text-gray-700">
													 Names on Trees</label>
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
 														<label for="visit" class="font-medium text-gray-700">
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
 															class="font-medium text-gray-700">Volunteer</label>
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
 												<input type="text" v-model="first_name" name="first_name" required
 													id="first_name" autocomplete="given-name"
 													class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
 											</div>

 											<div class="col-span-6 sm:col-span-3">
 												<label for="last_name"
 													class="block text-sm font-medium text-gray-700">Last name</label>
 												<input type="text" v-model="last_name" name="last_name" id="last_name"
 													autocomplete="family-name" required
 													class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
 											</div>

 											<div class="col-span-6 sm:col-span-4">
 												<label for="email_address"
 													class="block text-sm font-medium text-gray-700">Email
 													Address</label>
 												<input type="email" v-model="email_address" name="email_address"
 													id="email_address" autocomplete="email" required
 													class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
 											</div>

 											<div class="col-span-6 sm:col-span-3">
 												<label for="phone_number"
 													class="block text-sm font-medium text-gray-700">Phone</label>
 												<input type="tel" v-model.number="phone" name="phone_numbet"
 													id="phone_number" autocomplete="tel" required min="999999999" max="9999999999"
 													class="dark:bg-dark-grey mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
 											</div>

 											<div class="col-span-6 sm:col-span-3">
 												<label for="country"
 													class="block text-sm font-medium text-gray-700">Country /
 													Region</label>
 												<select id="country" v-model="location" name="country"
 													autocomplete="country"
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
 														<input id="updates" name="updates" v-model="updates"
 															type="checkbox"
 															class="dark:bg-dark-grey focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
 													</div>
 													<div class="ml-3 text-sm">
 														<label for="comments" class="font-medium text-gray-700">14
 															Trees Milestones</label>
 														<p class="text-gray-500">Receive regular updates on the 14
 															Trees Foundation's progress in
 															your Inbox</p>
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
	        </div>
        </div>
    </Layout>
</template>

 <script>
import Repository from "@/repository/RepositoryFactory";

const RAZORPAY_CHECKOUT_URI="https://checkout.razorpay.com/v1/checkout.js"

export default {
	metaInfo() {
		return {
			title: "Pledge"
		};
	},
	props: {
		fromCampaign: ""
	},
	data: function () {
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
			phone: "",
			volunteer: false,
			updates: false,
			newsletter: false,
			campaigns: null
		}
	},
	mounted() {
		this.campaigns = this.$page.campaigns.edges.map(edge=> {
			return {
				name: edge.node.heading,
				description: edge.node.subtitle,
			}
		})
		if (this.fromCampaign?.length > 0) {
			this.campaign = this.fromCampaign
		} else {
			this.campaign = this.campaigns[0]
		}
		let razorpayCheckout = document.createElement('script')
      	razorpayCheckout.setAttribute('src', RAZORPAY_CHECKOUT_URI)
		razorpayCheckout.async = true
      	document.head.appendChild(razorpayCheckout)
	},
	watch: {
		trees: function(newVal, oldVal) {
			// CASE: trees negative 
			if (newVal < 0) {
				this.trees = 0
				return
			}
			
			const change = newVal - oldVal
			// CASE: one tree added
			if (change === 1 && oldVal > 0) {
				this.names.push("")
				return
			}

			// CASE: trees changed completely 
			while(this.names.length < newVal) {
				// Trees were added, add blank fields
				this.names.push("")
			}
			while(this.names.length > newVal) {
				this.names.pop()
			}
		},
	},
	methods: {
		checkAndSubmitForm: async function (e) {
			e.preventDefault()

			console.log( this.personalInfoFilled , this.contributionFilled) 

			if (! this.personalInfoFilled || ! this.contributionFilled) {
				this.contributionExpand = true
				this.communicationExpand = true
				this.personal_infoExpand = true
				return
			}

			const formData = {
				first_name: this.first_name,
				last_name: this.last_name,
				email_id: this.email_address,
				phone: this.phone,
				location: this.location,
				campaign: this.campaign.name,
				trees: this.trees,
				names: this.names,
				csr: this.csr,
				visit: this.visit,
				volunteer: this.volunteer,
				updates: this.updates,
				newsletter: this.newsletter
			}
			console.log(formData)
			try {
				Repository.donation.create(formData)
			} catch (err) {
				console.error(err)
			}
		},
		checkSection: function (e) {
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
		contributionFilled: function () {
			return typeof this.trees === 'number' &&
				this.trees > 0 &&
				this.names?.length > 0 &&
				this.campaign.name.length > 0
		},
		personalInfoFilled: function () {
			return this.first_name.length > 0 &&
				this.last_name.length > 0 &&
				typeof this.phone === "number"
				this.email_address.length > 0
		}
	}
}
</script>

<page-query>
query {
  campaigns: allContentfulCampaign {
    edges {
      node {
        title
        heading
		subtitle
      }
    }
  }
}
</page-query>