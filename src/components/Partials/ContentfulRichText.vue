<template>
    <div class="flex flex-wrap align-center justify-center w-full post-content">
        <template v-for="group in groups" >
            <div :key="group.key + 'split'" v-if="group.split" class="w-full mt-12 md:px-24 dark:text-gray-300">
                <div v-html="withBreaks(group.split)"></div>
            </div>
            <div :key="group.key + 'comp'" v-if="group.component" class="flex-grow" :class="{'max-w-sm': group.component.small}">
                <component class="mt-16" :is="group.component.type" v-bind="group.component.fields"></component>
            </div>
        </template>
    </div>
</template>

<script>
import { withLineBreaks, composeTemplate, imgSrc } from '~/utils';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import Person from "~/components/Partials/Person.vue";
import ArticlePreview from "~/components/Partials/ArticlePreview.vue";
import SlideShow from "~/components/Partials/SlideShow.vue";

export default {
    props: {
        content: Object,
        flow: String
    },
    data: function() {
        return {
            groups : null
        }
    },
    components: {
        ArticlePreview,
        Person,
        SlideShow 
    },
	methods : {
		imgSrc(img) {
            return imgSrc(img, 600);
        },
        withBreaks(a) {
            return withLineBreaks(a);
        }
	},
    mounted() {
        this.groups = composeTemplate(this.content, MARKS, BLOCKS, documentToHtmlString);
    }
}
</script>