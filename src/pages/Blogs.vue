<template>
    <Layout>
        <div class="container sm:pxi-0 mx-auto my-10 overflow-x-hidden text-gray-800 dark:text-gray-400">
            <div class="mt-20 object-center">
              <p class="text-center md:text-6xl text-2xl">
                  <span>Blogs</span>
              </p>
            </div>
            <div v-for="ext in extArticles" :key="ext.node.title" class="container w-full md:w-3/4 sm:pxi-0 mx-auto my-2 overflow-x-hidden text-gray-800 dark:text-gray-400">
                <section class="post-content mt-2 mx-8 px-4 md:pt-16 dark:text-gray-400">
                    <ArticlePreview v-bind="ext.node"/>
                </section>
            </div>
        </div>
    </Layout>
</template>

<page-query>
{
  extArticle: allContentfulArticlePreview {
    edges {
      node {
        title
        headline
        link
        previewImage {
          file {
            url
          }
        }
        previewContent
        author {
            name
            title
          	image {
              file {
                url
              }
            }
            linkedIn
        }
      }
    }
  }
}
</page-query>

<script>
import SEO from "~/components/Partials/SEO.vue";
import ArticlePreview from "~/components/Partials/ArticlePreview.vue";
import { withLineBreaks } from '~/utils';

export default {
	metaInfo: {
		title: "Home",
		image: "Home",
		descrition: "Home",
	},
	components: {
		ArticlePreview,
		SEO
	},
	computed: {
		extArticles() {
			return this.$page.extArticle?.edges;
		},  
	},
	methods: {
		withBreaks(a) {
			return withLineBreaks(a);
		},
		imgSrc(img) {
            if (img.file) 
                return "https:" + img.file?.url;
            if (img.fields?.file) 
                return "https:" + img.fields?.file?.url;
        },
	}
};
</script>

