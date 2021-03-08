<template>
    <main v-click-outside="close">
        <a @click="toggle" class="block py-1" style="cursor:pointer;">
            <slot name="link" />
        </a>
        <nav class="flex flex-wrap gap-1" :class="{hidden : isHidden}" @click="close">
            <div class="block w-1/12 border-r-2 border-gray-600"></div>
            <div class="rounded-sm shadow-sm overflow-hidden w-10/12">
                <div class="z-20 pr-2">
                    <slot name="popover"/>
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