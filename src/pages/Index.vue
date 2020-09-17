<template>
    <Layout>
        <div class="my-12">
          <content-header 
          :title="$static.metadata.siteName" 
          :sub="$static.metadata.siteDescription"
          :videoUrl="'V-fZmDAyFVs'">
          </content-header>
        </div>
        
        <div class="bg-gray-200 dark:bg-gray-900">
          <div class="container sm:pxi-0 mx-auto overflow-x-hidden text-gray-800 dark:text-gray-400">
            <div class="lg:mx-32 md:mx-16 px-4 mb-8">
              <section class="post-content container mx-auto relative dark:text-gray-400">
                <div v-html="$page.sections.content"></div>
              </section>
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
  sections: contentSections(path:"/content/sections/home"){
    pageName
    title
    content
  }
}
</page-query>
<script>
import CardItem from "~/components/Content/CardItem.vue";
import FeaturedCard from "~/components/Content/FeaturedCard.vue";
import ContentHeader from "~/components/Partials/ContentHeader.vue";


export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    CardItem,
    FeaturedCard,
    ContentHeader
  }
};
</script>
