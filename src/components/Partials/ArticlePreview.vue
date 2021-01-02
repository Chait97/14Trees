<template>
    <section>
        <div class="card card-hover p-4 dark:text-gray-300 text-gray-700" @click="goToAction">
            <div v-if="previewImage" class="rounded overflow-hidden md:h-64 md:w-full h-48 mb-3">
                <g-image alt="content" class="object-cover object-center h-full w-full" :src="imgSrc(previewImage)"/>
            </div>
            <div class="md:h-48 overflow-y-hidden px-4">
                <h2 class="text-2xl font-light text-gray-700 dark:text-gray-300 my-1 md:my-3 text-center">{{headline}}</h2>
                <p class="nested md:contents hidden font-light font-sans text-md">{{content}}</p>
            </div>
            <div v-if="getAuthor">
                <Person class="md:py-1" v-bind="getAuthor"/>
            </div>
        </div>
    </section>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Person from './Person';
import { imgSrc } from '@/utils';

export default {
    props: {
        headline: String,
        link: String,
        slug: String,
        author: Object,
        previewImage: Object,
        content: String 
    },
    components: {
        Person
    },
    computed: {
        getAuthor() {
            const author = this.author?.fields ? this.author.fields : this.author;
            if (author) author.variant = 'small';
            return author; 
        },
    },
    methods: {
        imgSrc(img) {
            return imgSrc(img, 500);
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