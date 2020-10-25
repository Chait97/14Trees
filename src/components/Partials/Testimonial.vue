<template>
    <section class="text-gray-700 body-font">
        <div class="py-24 mx-2">
            <div class="grid grid-cols-8">
                <div v-if="hasImgs" class="md:col-span-3 col-span-8 flex justify-end">
                    <div class="ml-4 md:p-16 md:w-10/12 w-full flex content-center h-full">
                        <div class="md:hidden">
                            <VueSlickCarousel :arrows="true" :dots="true">
                                <div v-for="(pic, index) in picturesToDisplay" :key="index">
                                    <g-image :src="imgSrc(pic)" class="object-contain w-full object-right" />
                                </div>
                            </VueSlickCarousel>
                        </div>
                        <div class="hidden md:contents">
                            <div class="flex flex-wrap content-center">
                                <div class="md:p-2 p-1 w-full">
                                    <div v-if="imgSrcInd(0)">
                                        <g-image :src="imgSrcInd(0)" class="object-contain w-full object-right" />
                                    </div>
                                </div>
                                <div class="md:p-2 p-1 w-full" v-if="imgSrcInd(1) && !imgSrcInd(2)">
                                        <g-image :src="imgSrcInd(1)" class="object-contain w-full object-right" />
                                </div>
                                <div class="md:p-2 p-1 w-1/2" v-if="imgSrcInd(1) && imgSrcInd(2)">
                                        <g-image :src="imgSrcInd(1)" class="object-contain w-full object-right" />
                                </div>
                                <div class="md:p-2 p-1 w-1/2" v-if="imgSrcInd(2)">
                                        <g-image :src="imgSrcInd(2)" class="object-contain w-full object-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <span class="md:w-1 bg-green-300"></span>
                </div>
                <div class="col-span-8" :class="{ 'md:col-span-5' : hasImgs }">
                    <div class="md:w-3/4 md:pl-12 pb-16 flex flex-col justify-center w-full h-full text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                            <path
                                d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                            </path>
                        </svg>
                        <p class="leading-relaxed text-md" v-html="content"></p>
                        <div class="flex justify-center">
                        <span class="text-center inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
                        </div>
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
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: { VueSlickCarousel },
    props: {
        title: String,
        person: Object,
        content: String,
        pictures: Array
    },
    metaInfo: {
        title: "Home"
    },
    methods : {
		imgSrc(img) {
			return "https:" + img.file.url;
        },
        imgSrcInd(ind) {
            if (ind < this.picturesToDisplay.length)
                return "https:" + this.picturesToDisplay[ind]?.file?.url;
            return null;
        },
        toMultiLine(txt) {
            const split = txt.replace(';', "<br/>");
            return "<p>" + split + "</p>";
        }
    },
    computed : {
        picturesToDisplay() {
            let pics = [];
            if (this.pictures?.length >= 0) {
                pics.push(...this.pictures);
            }
            return pics;
        },
        hasImgs() {
            return this.picturesToDisplay.length > 0 || false; 
        },
	}
};
</script>