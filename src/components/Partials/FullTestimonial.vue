<template>
    <div>
        <main class="scoll-page">
            <section class="relative block" style="height: 50vh;">
                <div class="absolute top-0 w-full h-full bg-center bg-cover rounded-lg"
                    :style="bgImg">
                    <span id="blackOverlay" class="w-full h-full absolute opacity-25 bg-black rounded-lg"></span>
                </div>
                <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                    style="height: 70px; transform: translateZ(0px);">
                    <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
            <section class="relative bg-white">
                <div class="container mx-auto px-4">
                    <div
                        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 -mt-64">
                        <div class="px-6">
                            <Person :image="person.image" :name="person.name" :linkedIn="person.linkedIn" :title="person.title" variant="profile"/>
                        </div>
                    </div>
                    <div class="md:py-10">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full lg:w-9/12 px-4">
                                <p class="mb-4 text-sm md:text-lg leading-relaxed text-gray-800" v-html="content"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { imgSrc } from '@/utils';
import Person from './Person';

export default {
    components: {
        Person,
    },
    props: {
        title: String,
        person: Object,
        content: String,
        pictures: Array
    },
    methods: {
        imgSrc(img) {
            return imgSrc(img, 600);
        },
        imgSrcInd(ind) {
            if (ind < this.pictures.length) {
                return imgSrc(this.pictures[ind], 600);
            }
            return null;
        },
        truncated(text, size = 400) {
            const dots = text.length <= size ? "" : "...";
            return text.slice(0, size) + dots;
        }
    },
    computed: {
        bgImg() {
            let img = this.imgSrcInd(0);
            return `background-image: url("${img}");`
        },
        hasImgs() {
            return this.pictures.length > 0 || false;
        },
    }
} 
</script>