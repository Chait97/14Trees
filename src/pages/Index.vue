<template>
	<Layout>
		<div class="my-32">
			<content-header :title="$static.metadata.siteName" :sub="$static.metadata.siteDescription"
				:videoUrl="'V-fZmDAyFVs'">
			</content-header>
		</div>

		<div class="container mx-auto overflow-x-hidden text-gray-800 dark:text-gray-400">
			<div class="flex items-center justify-center py-10">
				<div class="self-center">
					<span class="md:text-6xl text-2xl" v-html="info.title"></span>
				</div>
			</div>
			<InfoSections :sections="info.sections"/>
		</div>
		<div class="flex items-center justify-center py-10">
			<div class="self-center">
				<g-image src="~/assets/images/logo-animated.gif" class="self-center"></g-image>
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
