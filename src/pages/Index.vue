<template>
	<Layout>
		<div class="md:mt-32 mt-12">
			<content-header :title="$static.metadata.siteName" :sub="$static.metadata.siteDescription"
				:videoUrl="'V-fZmDAyFVs'">
			</content-header>
		</div>

		<div class="flex justify-center md:mt-20 mt-12">
                  <span class="w-1/3 pb-4 mb-4 border-b-2 border-gray-300"></span>
		</div>

		<div class="container mt-16 md:mt-24 mx-auto overflow-x-hidden text-gray-800 dark:text-gray-400">
			<div v-if="info.sections">
			<InfoSections :sections="info.sections"/>
			</div>
		</div>

		<div class="container md:my-40 my-6 mx-16 overflow-x-hidden text-gray-800 dark:text-gray-400 flex justify-center">
			<div class="self-center post-content">
			<p>Ongoing Projects</p>
			<ul>
				<li><g-link class="block py-2 text-black" to="/Projects/reforestation-vetale" title="Vetale Reforestation">
					Vetale Reforestation</g-link></li>
				<li><g-link class=" block py-2 text-black" to="/Projects/iitk-djc" title="Project 40000 Trees">
					Project 40000 Trees for IIT-Kanpur DJC</g-link></li>
			</ul>
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
    filter: { title: { eq: "Home" }}
  ) {
    edges {
      node {
        title
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
import { withLineBreaks } from '~/utils';

export default {
	metaInfo: {
		title: "Home"
	},
	components: {
		ContentHeader,
		InfoSections
	},
	computed: {
		info() {
			return this.$page.contentfulPageInfo.edges[0].node;
		},
	},
	methods: {
		withBreaks(a) {
			return withLineBreaks(a);
		}
	}
};
</script>
