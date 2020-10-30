<template>
  
</template>
<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<script>
export default {
  props: {
      title: String,
      description: String,
      image: String,
      path: String,
  },
  metaInfo() {
    return {
      meta: [
        { name: "description", content: this.description },

        // Some Open Graph Tags
        { property: "og:title", content: this.title },
        { property: "og:description", content: this.description },
        { property: "og:image", content: this.image },
        {
          property: "og:url",
          content: this.$static.metadata.siteUrl + this.path
        },

        // Some Twitter Cards Tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.title },
        { name: "twitter:image", content: this.image },
        { name: "twitter:description", content: this.description }
      ]
    };
  },
};
</script>