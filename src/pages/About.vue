<template>
    <Layout>
        <div class="info-container md:mx-12 px-4 mb-8">
            <div class="container py-32 px-12 px-6 md:mx-auto mx-4 overflow-x-hidden text-gray-800 dark:text-gray-400">
                <div class="flex items-center justify-center py-10">
                    <div class="self-center">
                        <span class="md:text-6xl text-2xl" v-html="info.title"></span>
                    </div>
                </div>
                <div class="container md:px-32">
                    <div class="post-content container mx-auto relative dark:text-gray-400">
                        <person :person="personObject($page.pravin)" variant="large" />
                        <div class="mt-5" v-html="sec(0)"></div>
                    </div>
                    <div class="mt-24 post-content container mx-auto relative dark:text-gray-400">
                        <person :person="personObject($page.kiran)" variant="large" />
                        <div class="mt-5" v-html="sec(1)"></div>
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
    filter: { title: { eq: "About" }}
  ) {
    edges {
      node {
        title
        sections {
          header
          content(html: true)
        }
      }
    }
  }
  pravin: allContentfulPerson(
    filter: { name: { eq: "Pravin Bhagwat" }}
  ) {
    edges {
      node {
        name
        title
        linkedIn
        image {
          file {
            url
          }
        }
      }
    }
  }
  kiran: allContentfulPerson(
    filter: { name: { eq: "Kiran Deshpande" }}
  ) {
    edges {
      node {
        name
        title
        linkedIn
        image {
          file {
            url
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
import person from '~/components/Partials/person';

export default {
	metaInfo: {
		title: "Home"
	},
	components: {
		ContentHeader,
        InfoSections,
        person
	},
	computed: {
		info() {
			return this.$page.contentfulPageInfo.edges[0].node;
        },
    },
    methods: {
        sec(ind) {
            return this.info.sections[ind]?.content
        },
        personObject(obj) {
            return obj.edges[0].node;
        }
	}
};
</script>
