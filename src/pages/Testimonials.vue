<template>
    <Layout>
        <div class="container sm:pxi-0 mx-auto my-10 overflow-x-hidden text-gray-800 dark:text-gray-400">
            <div class="mx-4 md:pt-16">
                <div v-for="tm in $page.testimonials.edges" :key="tm.id">
                  
                    <testimonial v-bind="tm.node"/>
                </div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
{ 
	testimonials: allContentfulTestimonial {
  	edges {
      node {
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
            linkedIn
        }
        pictures {
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
import Testimonial from "~/components/Partials/Testimonial.vue";
import mediumZoom from "medium-zoom";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

export default {
  components: {
    ContentHeader,
    Testimonial,
  },
  metaInfo() {
    return {
      title: "Testimonials" 
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