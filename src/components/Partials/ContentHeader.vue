<template>
    <div v-if="hasVideo" class="flex items-center justify-center">
        <div class="mt-20 mb-20 grid lg:grid-cols-4 grid-cols-1 gap-4 w-3/4">
            <div class="col-span-1 self-center">
                <h2 class="lg:text-5xl xl:text-7xl font-bold tracking-tight text-green-400 text-6xl leading-none">
                    {{ title }}
                </h2>
                <h2 class="text-xl text-gray-800 dark:text-gray-200">
                    <span>{{ sub }}</span>
                </h2>
            </div>

            <div class="col-span-1 self-center w-3/4 lg:place-self-end lg:col-span-3">
                <div class="video-container">
                    <iframe id="player" type="text/html" width="100%" height="100%" :src="getVideoUrl" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="items-center">
        <div class="my-20 object-center">
            <h2 class="text-center lg:text-7xl font-bold tracking-tight text-green-400 text-6xl leading-10">
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