<template>
	<Layout>
		<SEO :title="$static.metadata.siteName" :description="$static.metadata.siteDescription"/>
		<main class="min-h-3/4-screen">
		<div class="container sm:pxi-0 mx-auto my-10 overflow-x-hidden text-gray-800 dark:text-gray-400">
            <div class="md:mx-32 mx-4 md:pt-16">
                <p class="text-center md:text-6xl text-2xl">
                    <span>{{info.title}}</span>
                </p>
			<div v-if="info.images">
				<div v-for="(img, index) in info.images" :key="index" class="flex items-center justify-center pb-4 self-center w-full">
					<img v-lazy="imgSrc(img)" class="self-center w-full">
				</div>
			</div>
		</div>
		</div>

		<div class="container mt-16 md:mt-24 mx-auto overflow-x-hidden text-gray-800 dark:text-gray-400">
			<div v-if="info">
				<InfoSections :sections="info.sections"/>
			</div>
		</div>
		<!-- <div class="container md:my-40 my-6 mx-16 overflow-x-hidden text-gray-800 dark:text-gray-400 flex justify-center">
			<div class="self-center post-content">
			<p>Ongoing Projects</p>
			<ul>
				<li><g-link class="block py-2 text-black" to="/Projects/reforestation-vetale" title="Vetale Reforestation">
					Vetale Reforestation</g-link></li>
				<li><g-link class=" block py-2 text-black" to="/Projects/iitk-djc" title="Project 40000 Trees">
					Project 40000 Trees for IIT-Kanpur DJC</g-link></li>
			</ul>
			</div>
		</div> -->
		</main>
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
    filter: { title: { eq: "Gallery" }}
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
import { withLineBreaks } from '~/utils';

export default {
	metaInfo: {
		title: "Gallery",
		image: "Home",
		descrition: "Pictures from 14-Trees site visits",
	},
	components: {
		ContentHeader,
		InfoSections,
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
            if (img.file) 
                return "https:" + img?.file?.url;
            if (img.fields?.file) 
                return "https:" + img?.fields?.file?.url;
        },
	}
};
</script>
