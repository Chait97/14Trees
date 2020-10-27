<template>
    <section class="text-gray-700 body-font">
        <div class="md:py-24 pt-16 mx-4">
            <div class="grid grid-cols-8">
                <div v-if="hasImgs" class="md:col-span-4 col-span-8 flex md:justify-end">
                    <div class="md:ml-4 md:p-8 md:w-10/12 w-full flex content-center h-full">
                        <!-- <div class="md:hidden">
                            <VueSlickCarousel :arrows="true" :dots="true">
                                <div v-for="(pic, index) in picturesToDisplay" :key="index">
                                    <g-image :src="imgSrc(pic)" class="object-contain w-full object-right" />
                                </div>
                            </VueSlickCarousel>
                        </div> -->
                        <div class="contents">
                            <div class="md:flex md:flex-wrap content-center">
                                <div class="md:hidden md:p-2 mb-4 md:mb-1 w-full">
                                    <div v-if="imgSrcInd(0)">
                                        <g-image :src="imgSrcInd(0)" class="object-contain w-full md:object-right object-center" />
                                    </div>
                                </div>
                                <div class="md:contents hidden md:p-2 mb-4 md:mb-1 w-full">
                                    <div v-if="imgSrcInd(0) && !imgSrcInd(1)">
                                        <g-image :src="imgSrcInd(0)" class="object-contain w-full md:object-right object-center" />
                                    </div>
                                </div>
                                <div class="md:contents hidden m-4" v-if="imgSrcInd(1) && !imgSrcInd(2)">
                                        <g-image :src="imgSrcInd(0)" class="object-contain md:p-2 p-4 w-full object-right" />
                                        <g-image :src="imgSrcInd(1)" class="object-contain md:p-2 p-4 w-full object-right" />
                                </div>
                                <div class="md:contents hidden" v-if="imgSrcInd(1) && imgSrcInd(2)">
                                        <g-image :src="imgSrcInd(1)" class="object-contain md:p-2 p-1 w-1/2 object-right" />
                                </div>
                                <div class="md:contents hidden" v-if="imgSrcInd(2)">
                                        <g-image :src="imgSrcInd(2)" class="object-contain md:p-2 p-1 w-1/2 object-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <span class="md:w-1 bg-green-300"></span>
                </div>
                <div class="col-span-8" :class="{ 'md:col-span-4 w-full' : hasImgs, 'md:col-span-7 md:col-start-2' : !hasImgs}">
                    <div class="md:w-3/4 md:pl-12 pb-4 flex flex-col justify-center w-full h-full text-left">
                        <div class="md:contents hidden">
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                <path
                                    d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                                </path>
                            </svg>
                        </div>
                        <p class="leading-relaxed text-md" v-html="content"></p>
                        <div class="flex justify-center">
                        <span class="text-center inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
                        </div>
                        <person :person="person"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import person from './person';

export default {
    components: { VueSlickCarousel, person},
    props: {
        title: String,
        person: Object,
        content: String,
        pictures: Array
    },
    methods : {
		imgSrc(img) {
			return "https:" + img.file.url;
        },
        imgSrcInd(ind) {
            if (ind < this.picturesToDisplay.length)
                return "https:" + this.picturesToDisplay[ind]?.file?.url;
            return null;
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