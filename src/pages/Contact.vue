<template>
	<Layout>
		<SEO :title="'Contact'" :description="'Contact 14 Trees Foundation'" />
		<div class="container full-page-generic">
			<h1 class="title-text">Contact Us</h1>
			<div class="mx-4 md:pt-16 text-gray-700 dark:text-gray-300">
				<div class="flex flex-row flex-wrap">
					<div class="w-full md:w-1/2 mt-12 md:pr-12">
						<h3 class="">
							<span class="">Reforestation Site Address: </span>
							<div class="text-2xl mx-2">
								14 Trees Foundation, Sayagaon, Near Chas Kaman Hydroelectric Plant, Village Vetale, Maharashtra 412404
							</div>
						</h3>
						<h3 class="">Email:
							<a class="text-blue-500" href="mailto:project14trees@gmail.com">project14trees@gmail.com</a>
							<!-- <span class="text-gray-600"> (project 14 trees [at] gmail dot com)</span> -->
						</h3>
						<h3 class="">Phone:
							<a class="text-blue-500" href="tel:+916362-819-073">(+91) 6362 819 073</a>
							<!-- <span class="text-gray-600"> (project 14 trees [at] gmail dot com)</span> -->
						</h3>
					</div>
					<div class="relative mx-auto pt-4 bg-grey-20 w-full md:w-1/2" style="padding-left: 50%">
						<iframe
							class="absolute mx-auto inset-0 p-2 w-3/4 md:w-full m-4 border border-gray-300 rounded-md bg-gray-200"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.943269077001!2d73.77400595031932!3d18.933905061281134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU2JzAyLjAiTiA3M8KwNDYnMzQuMyJF!5e0!3m2!1sen!2sin!4v1622636460367!5m2!1sen!2sin"
							width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>


<script>
import ActionModal from '@/components/Modal/ActionModal.vue';
import SEO from "~/components/Partials/SEO.vue";

export default {
  components: {
    SEO,
    ActionModal
  },
  metaInfo() {
    return {
      title: "Contact" 
    };
  },
  mounted() {
  }
};
</script>