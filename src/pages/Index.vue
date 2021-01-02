<template>
	<Layout>
		<SEO :title="$static.metadata.siteName" :description="$static.metadata.siteDescription"/>
		<div class="container sm:pxi-0 mx-auto my-10 overflow-x-hidden text-gray-800 dark:text-gray-400">
            <div class="md:mx-32 mx-4 md:pt-16">
			<content-header :title="$static.metadata.siteName" :sub="$static.metadata.siteDescription">
			</content-header>
			<div v-if="info.images">
				<div v-for="(img, index) in info.images" :key="index" class="flex items-center justify-center pb-4 self-center w-full" v-lazy-container="{ selector: 'img' }">
					<img :data-src="imgSrc(img)" class="self-center w-full">
				</div>
			</div>
			<div class="flex flex-wrap justify-center items-center">
				<progress-track :waitForScroll='true' class="pt-4 md:w-5/6 w-full"/>
				<g-link :to="'/contribute'" tag="button" class="btn-action h-12 text-white bg-green-500 dark:bg-green-600 dark:hover:bg-green-500 hover:bg-green-600 duration-500">
					Contribute 
				</g-link>
			</div>
		</div>
		</div>

		<div class="flex justify-center md:mt-20 mt-12">
			<span class="w-1/3 pb-4 mb-4 border-b-2 border-gray-300"></span>
		</div>

		<div class="container mt-16 md:mt-24 mx-auto overflow-x-hidden text-gray-800 dark:text-gray-400">
			<div v-if="info">
				<InfoSections :sections="info.sections"/>
			</div>
		</div>
	</Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<page-query>
query {
  contentfulPageInfo: allContentfulContentPage(
    filter: { title: { eq: "14 Trees Foundation" }}
  ) {
    edges {
      node {
        title
		images {
			title
            file {
				url
            }
		}
        sections {
          header
          content(html: true)
		  image {
            title
            file {
				url
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import ContentHeader from "~/components/Partials/ContentHeader.vue";
import InfoSections from "~/components/Partials/InfoSections.vue";
import SEO from "~/components/Partials/SEO.vue";
import ProgressTrack from "~/components/Partials/ProgressTrack.vue";
import { imgSrc, withLineBreaks } from '~/utils';

export default {
	metaInfo: {
		title: "Home",
		image: "Home",
		descrition: "Home",
	},
	components: {
		ContentHeader,
		InfoSections,
		ProgressTrack,
		SEO
	},
	computed: {
		info() {
			return this.$page.contentfulPageInfo?.edges[0]?.node;
		},  
	},
	methods: {
		withBreaks(a) {
			return withLineBreaks(a);
		},
		imgSrc(img) {
			imgSrc(img, 600);
        },
	}
};
</script>
