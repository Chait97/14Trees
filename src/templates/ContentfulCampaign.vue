<template>
    <Layout>
        <div class="container sm:pxi-0 mx-auto my-10 overflow-x-hidden text-gray-800 dark:text-gray-400">
            <div class="md:mx-32 mx-6 md:px-4 md:pt-16">
                <content-header :title="$page.campaign.heading" :sub="$page.campaign.subtitle"></content-header>
                    <div class="self-center w-full">
                        <div v-if="$page.campaign.videoUrl">
                            <div class="md:self-center md:place-self-end w-full md:px-16">
                                <div class="video-container">
                                    <iframe id="player" type="text/html" width="100%" height="100%" :src="getVideoUrl($page.campaign.videoUrl)" frameborder="0"></iframe>
                                </div>
                            </div>
                        </div>
                        <div v-if="imgSrc" class="flex items-center justify-center pb-4">
                            <div class="self-center w-full">
                                <g-image :src="imgSrc" class="self-center w-full" />
                            </div>
                        </div>
                        <section class="post-content container mt-12 md:mx-12 relative dark:text-gray-400">
                            <div v-html="withBreaks($page.campaign.content)"></div>
                        </section>
                        <div v-if="$page.campaign.action" class="mt-12 flex flex-col text-center">
                                <button @click="goToAction" class="self-center flex items-center mt-auto bg-gray-500 border-0 py-2 px-4 md:w-32 xl:w-40 focus:outline-none hover:bg-gray-600 rounded">
                                  Contribute
                                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                  </svg>
                                </button>
                        </div>
                    </div>
            </div>
            <div class="flex justify-center md:mt-20 mt-20">
                  <span class="w-1/3 pb-4 mb-4 border-b-2 border-gray-300"></span>
            </div>
            <div class="mt-20 object-center">
              <!-- <p class="text-center lg:text-5xl font-bold tracking-tight text-4xl leading-12"> -->
                  <!-- <span>Experiences</span> -->
              <!-- </p> -->
            </div>
            <div v-for="tm in $page.campaign.testimonials" :key="tm.id">
                  <testimonial v-bind="tm" />
                <div class="flex justify-center">
                  <span class="w-1/3 pb-4 mb-4 border-b-2 border-gray-300"></span>
                </div>
            </div>
        </div>
        <div class="container w-full sm:pxi-0 mx-auto my-10 overflow-x-hidden text-gray-800 dark:text-gray-400">
          <section class="post-content mt-24 mx-8 px-4 md:pt-16 dark:text-gray-400">
              <ContentfulRichText :content="$page.campaign.footerContent"/>
          </section>
        </div>
        <div class="fixed bottom-0 right-0 h-16 w-32 md:w-40">
            <div v-if="showFloatingButton" class="absolute">
                <button @click="goToAction" class="self-center flex items-center text-sm md:text-md
                                        mt-auto bg-gray-500 border-0 py-2 px-4 md:w-32
                                        focus:outline-none hover:bg-gray-600 rounded">
                                        Contribute
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
            </div>
        </div>
    </Layout>
</template>

<script>
import ContentHeader from "~/components/Partials/ContentHeader.vue";
import ContentfulRichText from "~/components/Partials/ContentfulRichText.vue";
import Testimonial from "~/components/Partials/Testimonial.vue";
import mediumZoom from "medium-zoom";
import { withLineBreaks, videoUrl } from '~/utils';

export default {
  components: {
    ContentHeader,
    ContentfulRichText,
    Testimonial
  },
  metaInfo() {
    return {
      title: this.$page.campaign.heading
    };
  },
  data: function (){
    return { showFloatingButton: false }
  },
  mounted() {
    mediumZoom(".post-content img");
    window.addEventListener('scroll', this.updateScroll);
  },
  computed: {
    imgSrc() {
      return this.$page.campaign.headerMedia ? "https:" + this.$page.campaign.headerMedia.file.url : false;
    },
  },
  methods : {
    getVideoUrl(url) {
        return videoUrl(url) ;
    },
    updateScroll() {
      if (this.$page.campaign.action) {
        this.showFloatingButton = window.scrollY > 1200;
      }
    },
    goToAction() {
      window.location.href = this.$page.campaign.action;
    },
    withBreaks(a) {
        return withLineBreaks(a);
    }
  }
};
</script>

<page-query>
    query($id: ID!) {
        campaign: contentfulCampaign(id: $id) {
            title
            heading
            subtitle
            videoUrl
            action
            fromDate
            toDate
            content(html: true)
            footerContent
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
</page-query>