<template>
	<Layout>
		<div class="my-32">
			<content-header :title="$static.metadata.siteName" :sub="$static.metadata.siteDescription"
				:videoUrl="'V-fZmDAyFVs'">
			</content-header>
		</div>

		<div class="container sm:pxi-0 mx-auto overflow-x-hidden text-gray-800 dark:text-gray-400">
			<div class="flex items-center justify-center py-10">
				<div class="self-center">
					<span class="md:text-6xl text-2xl" v-html="info.title"></span>
				</div>
			</div>
			<div v-for="(sec, ind) in info.sections" :key="sec.id">
				<div class="lg:mx-32 md:mx-16 px-4 mb-8">

					<div v-if="ind % 2 == 0">
						<div class="flex mb-4">
							<div class="w-2/5 p-2">
								<g-image :src="imgSrc(sec.image)" class="self-center w-full" />
							</div>
							<div class="w-3/5">
								<h2 class="text-3xl">{{sec.header}}</h2>
								<section class="post-content container mx-auto relative dark:text-gray-400">
									<div v-html="sec.content"></div>
								</section>
							</div>
						</div>
					</div>
					<div v-else>
						<div class="flex mb-4">
							<div class="w-3/5">
								<h2 class="text-3xl">{{sec.header}}</h2>
								<section class="post-content container mx-auto relative dark:text-gray-400">
									<div v-html="sec.content"></div>
								</section>
							</div>
							<div class="w-2/5 p-2">
								<g-image :src="imgSrc(sec.image)" class="self-center w-full" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="flex items-center justify-center py-10">
			<div class="self-center">
				<g-image src="~/assets/images/logo-animated.gif" class="self-center"></g-image>
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
  contentfulPageInfo: allContentfulContentPage(
    filter: { title: { eq: "Home" }}
  ) {
    edges {
      node {
        title
        sections {
          header
          content(html: true)
		  image {
            title
            file {
				url
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import ContentHeader from "~/components/Partials/ContentHeader.vue";

export default {
	metaInfo: {
		title: "Home"
	},
	components: {
		ContentHeader
	},
	computed: {
		info() {
			console.log(this.$page.contentfulPageInfo.edges[0].node)
			return this.$page.contentfulPageInfo.edges[0].node;
		},
	},
	methods : {
		imgSrc(img) {
			return "https:" + img.file.url;
		}
	}
};
</script>
