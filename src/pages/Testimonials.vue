<template>
    <Layout>
        <div class="container full-page-generic">
              <h1 class="title-text"> Testimonials </h1>
            <div class="mx-4 md:pt-16">
                <div v-for="tm in $page.testimonials.edges" :key="tm.id">
                    <testimonial v-bind="tm.node"/>
                    <div class="flex justify-center">
                      <span class="w-1/3 pb-4 mb-4 border-b-2 border-gray-300"></span>
                    </div>
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
  }
};
</script>