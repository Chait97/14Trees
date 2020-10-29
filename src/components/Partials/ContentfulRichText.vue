<template>
    <div class="grid md:grid-cols-3 grid-cols-1">
        <template v-for="group in groups" >
            <div :key="group.key + 'split'" v-if="group.split" class="md:col-span-3 col-span-1 mt-6">
                <div v-html="withBreaks(group.split)"></div>
            </div>
            <div :key="group.key + 'comp'" v-if="group.component" class="col-span-1">
                <component :is="group.component.type" v-bind="group.component.fields"></component>
            </div>
        </template>
    </div>
</template>


<script>
import { withLineBreaks, composeTemplate } from '~/utils';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import Person from "~/components/Partials/Person.vue";
import ArticlePreview from "~/components/Partials/ArticlePreview.vue";

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
        Person
    },
	methods : {
		imgSrc(img) {
			return "https:" + img.file.url;
        },
        withBreaks(a) {
            return withLineBreaks(a);
        }
	},
    mounted() {
        this.groups = composeTemplate(this.content, MARKS, BLOCKS, documentToHtmlString);
        console.log(this.groups)
    }
}
</script>