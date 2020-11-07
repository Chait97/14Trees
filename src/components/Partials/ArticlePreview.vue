<template>
<section>
    <div class="nested p-4 md:m-8 border border-gray-600 rounded-lg 
        transition duration-200 ease-out transform hover:scale-101 cursor-pointer" @click="goToAction()">
        <div v-if="previewImage" class="rounded-lg overflow-hidden md:h-64 md:w-full h-48">
          <g-image alt="content" class="object-cover object-center h-full w-full" :src="imgSrc(previewImage)"/>
        </div>
        <div>
            <h2 class="title-font text-2xl font-medium text-gray-900 dark:text-gray-300 mt-6 mb-3 text-center">{{headline}}</h2>
            <section><div class="md:contents hidden font-light font-sans text-xs" v-html="textFromObj(previewContent)"></div></section>
        </div>
        <Person class="md:p-4" v-bind="getAuthor"/>
    </div>
</section>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Person from './Person';

export default {
    props: {
        headline: String,
        link: String,
        author: Object,
        previewImage: Object,
        previewContent: Object 
    },
    components: {
        Person
    },
    computed: {
        getAuthor() {
            const author = this.author?.fields ? this.author.fields : this.author;
            author.variant = 'small';
            return author; 
        }
    },
    methods: {
        imgSrc(img) {
            if(img?.fields)
                return "https:" + img?.fields?.file.url;
            if(img?.file)
                return "https:" + img?.file.url;
        },
        goToAction() {
            window.location.href = this.link;
        },
        textFromObj(o) {
            return documentToHtmlString(o);
        }
    }
};
</script>