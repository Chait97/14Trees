<template>
    <Layout>
        <div class="container sm:pxi-0 mx-auto my-10 overflow-x-hidden text-gray-800 dark:text-gray-400">
            <div class="md:mx-32 mx-8 px-4 md:pt-16">
                <content-header :title="$page.campaign.heading" :sub="$page.campaign.subtitle"></content-header>
                <div v-if="imgSrc" class="flex items-center justify-center pb-4">
                    <div class="self-center w-full">
                        <g-image :src="imgSrc" class="self-center w-full" />
                        <section class="post-content container mt-24 md:mx-12 relative dark:text-gray-400">
                            <div v-html="$page.campaign.content"></div>
                        </section>
                    </div>
                </div>
            </div>
            <div v-for="tm in $page.campaign.testimonials" :key="tm.id"> <testimonial v-bind="tm"/></div>
        </div>
    </Layout>
</template>

<page-query>
    query($id: ID!) {
        campaign: contentfulCampaign(id: $id) {
            title
            heading
            subtitle
            fromDate
            toDate
            content(html: true)
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
                    image {
                      file {
                        url
                      }
                    }
                }
                pictures {
                  file {
                    url
                  }
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
};
</script>