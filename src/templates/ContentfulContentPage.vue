<template>
    <Layout>
      <section class="container full-page-generic min-h-screen">
        <h1 class="title-text"> {{$page.pageInfo.title}} </h1>
        <div :id="toId(section.header)" v-for="section in $page.pageInfo.sections" :key="section.header">
            <div class="info-container px-4 mb-8 md:mx-12 mx-4 overflow-x-hidden post-content">
              <p class="lg:text-center lg:mt-20 mt-8 lg:text-5xl text-3xl text-gray-700 dark:text-gray-300">
                {{section.header}}
              </p>
                <ContentfulRichText :content="section.content" />
            </div>
        </div>
        </section>
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
query($id: ID!) { 
  pageInfo: contentfulContentPage(id: $id) {
        title
        sections {
          header
          content
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
  },
  methods: {
    toId(text) {
      return toId(text);
    }
  }
};
</script>
