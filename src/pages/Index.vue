<template>
	<Layout>
		<div class="mt-32">
			<content-header :title="$static.metadata.siteName" :sub="$static.metadata.siteDescription"
				:videoUrl="'V-fZmDAyFVs'">
			</content-header>
		</div>

		<div class="container mt-16 mx-auto overflow-x-hidden text-gray-800 dark:text-gray-400">
			<div class="flex items-center justify-center py-10">
			</div>
			<div v-if="info.sections">
			<InfoSections :sections="info.sections"/>
			</div>
		</div>

		<div class="container md:my-40 my-6 mx-16 overflow-x-hidden text-gray-800 dark:text-gray-400 flex justify-center">
			<div class="self-center post-content">
			<p class="text-2xl">Ongoing Projects</p>
			<ul>
				<li><g-link class=" block py-2 text-black md:text-2xl" to="/Projects/iitk-djc" title="Project 40000 Trees">
					Project 40000 Trees for IIT-Kanpur Diamond Jubilee Celebration</g-link></li>
				<li><g-link class="block py-2 text-black md:text-2xl" to="/Projects/reforestation-vetale" title="Vetale Reforestation">
					Vetale Reforestation</g-link></li>
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
	}
};
</script>
