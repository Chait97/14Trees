<template>
  <div class="h-16 dark:bg-gray-900 bg-white dark:bg-dark-grey">
    <headroom :classes="{'initial' : 'headroom bg-white dark:bg-dark-grey border-black dark:border-gray-900'}" :downTolerance="10" :upTolerance="20" :offset="15" @unpin="navbarUnpinned=true" @pin="navbarUnpinned=false">
      <navbar-desktop class="hidden md:contents"
        v-on="$listeners" 
        @openSearchModal="openSearchModal"
        :theme="theme"
        :hideSubnav="this.navbarUnpinned"
      />

      <navbar-mobile class="md:hidden"
        @openSearchModal="openSearchModal"
        @openNavbarModal="openNavbarModal"
        v-on="$listeners"
        :theme="theme"
      />


    </headroom>

    <!-- Disabled for now. TODO: Implement Search-->
    <!-- <modal :showModal="this.showSearchModal" @close="closeSearchModal">
      <search-modal></search-modal>
    </modal> -->

    <modal :showModal="this.showNavbarModal" @close="closeNavbarModal">
      <navbar-modal></navbar-modal>
    </modal>
  </div>
</template>

<script>
import NavbarDesktop from "~/components/Navbar/NavbarDesktop.vue";
import NavbarMobile from "~/components/Navbar/NavbarMobile.vue";
import Modal from "~/components/Modal/Modal.vue";
import SearchModal from "~/components/Modal/SearchModal.vue";
import NavbarModal from "~/components/Modal/NavbarMobileModal.vue";
import { headroom } from "vue-headroom";

export default {
  props: {
    theme : {
      type: Number 
    }
  },
  data: function() {
    return {
      showSearchModal: false,
      showNavbarModal: false,
      headerHeight: 100,
      navbarUnpinned: false
    };
  },
  components: {
    NavbarDesktop,
    NavbarMobile,
    Modal,
    SearchModal,
    NavbarModal,
    headroom
  },
  methods: {
    openSearchModal() {
      this.showSearchModal = false;   // disabled for now
    },
    closeSearchModal() {
      this.showSearchModal = false;
    },
    openNavbarModal() {
      this.showNavbarModal = true;
    },
    closeNavbarModal() {
      this.showNavbarModal = false;
    }
    
  },
  watch:{
    $route (to, from){
      this.closeNavbarModal();
      this.closeSearchModal();
    }
  } 
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
