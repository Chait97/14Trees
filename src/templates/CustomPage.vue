<template>
  <Layout>
    <content-header :title="$page.page.title" :sub="$page.page.subtitle"></content-header>


    <div class="container sm:pxi-0 mx-auto overflow-x-hidden text-gray-800 dark:text-gray-400">

      <div class="lg:mx-32 md:mx-16 px-4 mb-8">
        <section class="post-content container mx-auto relative dark:text-gray-400">
          <div v-html="$page.page.content"></div>
        </section>
        <div v-if="hasImg" class="flex items-center justify-center m-6">
          <div class="self-center md:w-2/3 w-4/5">
            <g-image :src="$page.page.imgSrc" class="self-center"/>
          </div>
        </div>
      </div>
    </div>

  
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    page: customPage(id: $id) {
      title
      subtitle
      imgSrc
      content
    }
  }
</page-query>

<script>
import ContentHeader from "~/components/Partials/ContentHeader.vue";
import mediumZoom from "medium-zoom";

export default {
  components: {
    ContentHeader
  },
  metaInfo() {
    return {
      title: this.$page.page.title
    };
  },
  mounted() {
    mediumZoom(".post-content img");
  },
  computed: {
    hasImg() {
      return this.$page.page.imgSrc ? true : false;
    }
  }
};
</script>