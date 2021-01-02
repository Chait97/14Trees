<template>
  <a role="button" @click.prevent="toggleTheme()"  
      :aria-label="'Toggle ' + nextTheme" 
      :title="'Toggle ' + nextTheme"
      class="toggle-theme"
    >
    
    <font-awesome :icon="['fas', 'sun']" v-if="theme === dark"></font-awesome>
    <font-awesome :icon="['fas', 'moon']" v-if="theme === light"></font-awesome>
  </a>
</template>

<script>
const themes = Object.freeze({'light': 0, 'dark': 1, 'length': 2})

export default {
  props: {
    theme: {
      type: Number,
    },
  },
  data: function(){
    return {
      light: themes.light,
      dark: themes.dark
    }
  },
  computed: {
    nextTheme() {
      const nextTheme = (this.theme + 1) % themes.length;
      return nextTheme
    }
  },
  methods: {
    toggleTheme() {
      this.setTheme(this.nextTheme)
        // Whenever the user explicitly chooses to respect the OS preference
        // localStorage.removeItem('theme')
    },
    setTheme(theme) {
      if (theme === themes.dark) {
        this.storeTheme(theme)
        document.querySelector('html').classList.add('dark')
      } else {
        this.storeTheme(theme)
        document.querySelector('html').classList.remove('dark')
      }
    },
    storeTheme(theme) {
        localStorage.setItem('theme', theme);
        this.$emit('setTheme', theme)
    },
    getStoredTheme() {
      if ('theme' in localStorage)
        return parseInt(localStorage.getItem('theme'))
      else 
        return null
    }
  },
  async mounted() {
    // set default
    if(typeof localStorage.getItem('theme') != undefined) {
      let storedTheme = this.getStoredTheme()
      if (typeof storedTheme === "number" && 0 <= storedTheme && storedTheme < themes.length) {
        this.setTheme(storedTheme)
        return
      }
    }
    this.setTheme(themes.light)
  }
}
</script>