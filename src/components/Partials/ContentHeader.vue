<template>
    <div v-if="hasVideo" class="flex items-center justify-center">
        <div class="mt-4 mb-4 grid lg:grid-cols-4 grid-cols-1 gap-4 md:w-3/4 px-4">
            <div class="col-span-1 self-center">
                <h2 class="lg:text-5xl xl:text-7xl font-bold 
                          tracking-tight text-green-400 text-4xl leading-normal">
                    {{ title }}
                </h2>
                <p class="md:text-xl font-medium text-gray-800 dark:text-gray-200">
                    <span>{{ sub }}</span>
                </p>
            </div>

            <div class="col-span-1 md:self-center md:w-5/6 md:place-self-end md:col-span-3 w-full">
                <div class="video-container">
                    <iframe id="player" type="text/html" width="100%" height="100%" :src="getVideoUrl" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="items-center">
        <div class="my-20 object-center">
            <h2 class="text-center lg:text-5xl font-bold tracking-tight text-4xl leading-12">
                <span>{{ title }}</span>
            </h2>
            <h3 class="text-center text-xl text-grey-600">
                <span>{{ sub }}</span>
            </h3>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    sub: {
      type: String,
      default: null
    },
    videoUrl: {
      type: String,
      default: null
    },
    opacity: {
      type: Number,
      default: 50
    }
  },
  computed: {
    hasVideo() {
      return this.videoUrl ? true : false;
    },
    getVideoUrl() {
        return "https://www.youtube.com/embed/" + this.videoUrl + "?enablejsapi=1&origin=https://14trees.org";
    }
  }
};
</script>

<style>
</style>