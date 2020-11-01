<template>
    <Layout>
        <div :id="toId(section.header)" class="container mb-32 sm:pxi-0 mx-auto my-10 overflow-x-hidden text-gray-800 dark:text-gray-400 object-center" 
            v-for="section in info.sections" :key="section.header">
            <p class="text-center mt-20 md:text-6xl text-2xl">
                <span>{{section.header}}</span>
            </p>
            <div class="info-container mt-12 px-4 mb-8">
                <div class="md:mx-12 mx-4 overflow-x-hidden text-gray-800 dark:text-gray-400">
                    <div class="container">
                        <div class="post-content container mx-auto relative dark:text-gray-400">
                            <ContentfulRichText :content="section.content" />
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
import { withLineBreaks, toId } from '~/utils';

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
  },
  methods: {
    toId(text) {
      return toId(text);
    }
  }
};
</script>
