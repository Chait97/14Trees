<template>
<section>
    <div v-if="variant == 'large'">
        <div class="flex items-center pl-4">
            <g-image :src="imgSrc(person.image)" class="object-contain h-32 content-right" />
        <div class="pl-6 md:w-full">
            <div class="inline flex w-full justify-start">
            <p class="text-gray-900 text-6xl mr-1">{{person.name}}</p>
            <div v-if="person.linkedIn">
                <a :href="person.linkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </div>
        </div>
            <div class="text-gray-500 text-6xl" v-html="toMultiLine(person.title)"></div>
        </div>
        </div>
    </div>
    <div v-else>
        <div class="flex items-center pl-4">
        <g-image :src="imgSrc(person.image)" class="object-contain h-16 content-right" />
        <div class="pl-6">
        <div class="inline flex w-full justify-start">
            <p class="text-gray-900 font-medium title-font tracking-wider text-sm mr-1">{{person.name}}</p>
            <div v-if="person.linkedIn">
                <a :href="person.linkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </div>
        </div>
            <div class="text-gray-500" v-html="toMultiLine(person.title)"></div>
        </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    props: {
        person: Object,
        variant: String
    },
    metaInfo: {
        title: "Person"
    },
    methods: {
        imgSrc(img) {
			return "https:" + img.file.url;
        },
        toMultiLine(txt) {
            const split = txt.replace(';', "<br/>");
            return "<p>" + split + "</p>";
        }
    }
};
</script>