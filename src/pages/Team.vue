<template>
    <Layout>
      <div>
        <div v-for="section in info.sections" :key="section.header">
          <div :id="section.header" class="container sm:pxi-0 mx-auto my-10 overflow-x-hidden text-gray-800 dark:text-gray-400">
            <div class="mt-20 object-center">
                <p class="text-center md:text-6xl text-2xl">
                  <span class="md:text-6xl text-2xl" v-html="section.header"></span>
                </p>
              </div>
          </div>
          <div class="info-container mt-12 px-4 mb-8">
              <div class="container md:py-32 px-12 px-6 md:mx-auto mx-4 overflow-x-hidden text-gray-800 dark:text-gray-400">
                  <div class="container md:px-32">
                      <div class="post-content container mx-auto relative dark:text-gray-400">
                        <ContentfulRichText :content="section.content"/>
                      </div>
                  </div>
              </div>
          </div>
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
    filter: { title: { eq: "Team" }}
  ) {
    edges {
      node {
        title
        sections {
          header
          content
        }
      }
    }
  }
}
</page-query>

<script>
import ContentHeader from "~/components/Partials/ContentHeader.vue";
import InfoSections from "~/components/Partials/InfoSections.vue";
import ContentfulRichText from "~/components/Partials/ContentfulRichText.vue";
import { withLineBreaks } from '~/utils';

export default {
	metaInfo: {
		title: "Team | Founders"
	},
	components: {
      ContentHeader,
      InfoSections,
      ContentfulRichText
	},
	computed: {
    info() {
      return this.$page.contentfulPageInfo?.edges[0]?.node;
    },
	}
};
</script>
