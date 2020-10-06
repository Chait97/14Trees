<template>
    <Layout>
        <div class="container sm:pxi-0 mx-auto my-10 overflow-x-hidden text-gray-800 dark:text-gray-400">
            <div class="md:mx-32 mx-8 px-4 md:pt-16">
                <content-header :title="$page.campaign.title" :sub="$page.campaign.subtitle"></content-header>
                <div v-if="imgSrc" class="flex items-center justify-center pb-4">
                    <div class="self-center w-full">
                        <g-image :src="imgSrc" class="self-center w-full" />
                    </div>
                </div>
                <section class="post-content container mx-auto relative dark:text-gray-400 my-10">
                    <div v-html="richtextToHTML($page.campaign.content)"></div>
                </section>
                <div v-for="tm in $page.campaign.testimonials" :key="tm.id">
                    <p v-html="richtextToHTML(tm.content)"></p>
                    <testimonial v-bind="tm"/>
                </div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
    query($id: ID!) {
        campaign: contentfulCampaign(id: $id) {
            title
            subtitle
            fromDate
            toDate
            content
            image: headerMedia {
                title
                file { url }
            }
            location { lat lon }
            testimonials {
                id
                content(html: true)
                person {
                    name
                    title
                }
            }
        }
    }
</page-query>

<script>
import ContentHeader from "~/components/Partials/ContentHeader.vue";
import Testimonial from "~/components/Partials/Testimonial.vue";
import mediumZoom from "medium-zoom";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

export default {
  components: {
    ContentHeader,
    Testimonial
  },
  metaInfo() {
    return {
      title: this.$page.campaign.title
    };
  },
  mounted() {
    mediumZoom(".post-content img");
  },
  computed: {
    imgSrc() {
      return this.$page.campaign.image ? "https:" + this.$page.campaign.image.file.url : false;
    }
  },
  methods: {
    richtextToHTML (content) {
      return documentToHtmlString(content, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return `<img src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}" />`
          }
        }
      })
    }
  }
};
</script>