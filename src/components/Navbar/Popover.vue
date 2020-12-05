<template>
    <section>
        <a @click="toggle" v-click-outside="close" class="block py-1" style="cursor:pointer;">
            <slot name="link" />
        </a>
        <nav :class="{hidden : isHidden}">
            <div class="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="z-20 relative grid gap-6 bg-white dark:bg-gray-600 px-2 py-8 sm:gap-8 sm:px-4">
                        <slot name="popover" />
                    </div>
                </div>
            </div>
        </nav>
    </section>
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