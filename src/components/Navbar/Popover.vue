<template>
    <main v-click-outside="close">
        <a @click="toggle" class="block py-1" style="cursor:pointer;">
            <slot name="link" />
        </a>
        <nav :class="{hidden : isHidden}" @click="close">
            <div class="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 md:w-screen w-3/4 max-w-md sm:px-0">
                <div class="md:rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="z-20 relative grid gap-6 bg-gray-200 md:bg-white dark:bg-darker-grey px-2 md:py-8 sm:gap-8 sm:px-4">
                        <slot name="popover"/>
                    </div>
                </div>
            </div>
        </nav>
    </main>
</template>

<script>
export default {
  data: function() {
    return {
      show: false
    };
  },
  methods: {
      toggle(event) {
          this.show = !this.show;
      },
      close(event) {
          this.show = false;
      }
  },
  computed: {
      isHidden() {
          return !this.show;
      }
  }
}
</script>