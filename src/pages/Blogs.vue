<template>
  <Layout>
		<SEO :title="'Blogs'" :description="'Blogs about reforestation efforts by 14 Trees Foundation'"/>
    <section class="container full-page-generic">
      <h1 class="title-text">Blogs</h1>
      <div class="flex items-center flex-wrap w-full sm:pxi-0 mx-auto my-2 ">
        <template v-for="ext in extArticles">
          <section :key="ext.node.title" class="md:w-1/2 w-full mt-2 px-8 md:pt-16">
            <ArticlePreview v-bind="ext.node" />
          </section>
        </template>
        <template v-for="post in blogPosts">
          <section :key="post.node.title" class="md:w-1/2 w-full mt-2 px-8 md:pt-16">
            <ArticlePreview v-bind="post.node" />
          </section>
        </template>
      </div>
    </section>
  </Layout>
</template>

<script>
import SEO from "~/components/Partials/SEO.vue";
import ArticlePreview from "~/components/Partials/ArticlePreview.vue";
import { imgSrc, withLineBreaks } from '~/utils';

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
		blogPosts() {
			return this.$page.blogPosts?.edges;
		}, 
	},
	methods: {
		withBreaks(a) {
			return withLineBreaks(a);
		},
		imgSrc(img) {
      return imgSrc(img, 200);
    },
	}
};
</script>

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
        content
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
  blogPosts: allContentfulBlogPost {
    edges {
      node {
        link: path
        headline: title
        previewImage: heroImage {
          file {
            url
          }
        }
        slug
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

