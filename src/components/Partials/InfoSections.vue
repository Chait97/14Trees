<template>
    <div class="info-container md:mx-12 px-4 mb-8">
        <div v-for="(sec, ind) in sections" :key="sec.id" class="pb-12 md:pb-24">
                <div v-if="sec.image" class="md:flex mb-4">
                    <div class="md:w-1/3 w-full px-5" :class="{'md:order-last' : ind % 2 == 0}">
                        <h2 class="text-3xl">{{sec.header}}</h2>
                        <section class="post-content container mx-auto relative dark:text-gray-400">
                            <div v-html="withBreaks(sec.content)"></div>
                        </section>
                    </div>
                    <div class="md:w-3/5 w-full p-2" v-lazy-container="{ selector: 'img' }">
                        <img :data-src="imgSrc(sec.image)" class="self-center w-full" />
                    </div>
                </div>
                 <div v-else class="md:flex mb-4">
                    <div class="w-full px-5" :class="{'md:order-last' : ind % 2 == 0}">
                        <h2 class="text-3xl">{{sec.header}}</h2>
                        <section class="post-content container mx-auto relative dark:text-gray-400">
                            <div v-html="withBreaks(sec.content)"></div>
                        </section>
                    </div>
                </div>
        </div>
    </div>
</template>


<script>
import { withLineBreaks } from '~/utils';

export default {
    props: {
        sections: Array,
    },
	methods : {
		imgSrc(img) {
			return "https:" + img?.file?.url;
        },
        withBreaks(a) {
            return withLineBreaks(a);
        }
	}
}
</script>