<template>
	<nav
		class="hidden md:block lg:block xl:block flex items-center justify-between flex-wrap container mx-auto py-3 z-20 dark:text-gray-400">
		<div class="block flex-grow flex items-center w-auto mx-4">
			<div class="block flex items-center w-auto mx-6">
				<div class="flex items-center flex-shrink-0 mr-3">
					<span class="font-semibold text-xl tracking-tight">{{ $static.metadata.siteName }}</span>
				</div>
				<div class="h-auto">
					<g-image src="~/assets/images/logo.png" height="40em" width="40em"></g-image>
				</div>
			</div>
			<div class="flex-grow pl-3 md:border-l md:border-gray-400">
				<ul class="list-none flex justify-left ">
					<li v-for="navItem in getNavItems" :key="navItem.name" class="px-4 py-1">
						<g-link class="block py-1 text-black" :to="navItem.link" :title="navItem.name"
							v-if="navItem.external!=true && navItem.children.length <=0">{{ navItem.name}}</g-link>
						<a class="block text-black" :href="navItem.link" target="_blank" :title="navItem.name"
							v-if="navItem.external==true && navItem.children.length <=0">{{ navItem.name}}</a>
						<ClientOnly>
							<v-popover placement="top" popoverClass="navbar-popover" offset="16"
								v-if="navItem.children.length > 0">
								<a class="block py-1 text-black" style="cursor:pointer;">
									{{ navItem.name }}
									<font-awesome :icon="['fas', 'angle-down']"></font-awesome>
								</a>

								<template slot="popover">
									<ul>
										<li v-for="subItem in navItem.children" :key="subItem.name"
											class="px-4 py-2 submenu-item hover:text-white">
											<g-link class="block text-gray-400" :to="subItem.link" :title="subItem.name"
												v-if="subItem.external!=true">
												{{ subItem.name}}</g-link>
											<a class="block text-gray-400" :href="subItem.link" target="_blank" :title="subItem.name"
												v-if="subItem.external==true">{{ subItem.name}}</a>
										</li>
									</ul>
								</template>
							</v-popover>
						</ClientOnly>
					</li>
				</ul>
			</div>

			<div class="inline-block">
				<ul class="list-none flex justify-center md:justify-end">
					<!-- <li class="mr-6">
              <search-button v-on="$listeners"></search-button>
            </li> -->
					<li>
						<theme-switcher v-on="$listeners" :theme="theme" />
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<static-query>
query {
  metadata {
    siteName
    headerNavigation {
      name
      link
      external
      children {
        name
        link
        external
      }
    }
  }
  campaigns: allContentfulCampaign {
    edges {
      node {
        title
        heading
      }
    }
  }
}
</static-query>

<script>
import ThemeSwitcher from "~/components/Navbar/ThemeSwitcher.vue";
import SearchButton from "~/components/Navbar/SearchButton.vue";

export default {
  data: function() {
    return {
      vcoConfig: {
        events: ["dblclick", "click"],
        isActive: true
	  },
    };
  },
  components: {
    ThemeSwitcher,
    SearchButton,
  },
  props: {
    theme: {
      type: String
    },
    hideSubnav: {
      type: Boolean
    }
  },
  computed:{
	  getNavItems() {
			const navItems = this.$static.metadata.headerNavigation;
			const campaigns = this.$static.campaigns.edges.map(edge=> {
				return {
					name: edge.node.heading,
					link: "/Projects/" + edge.node.title,
					external: false
				}
			})
			let ind = navItems.findIndex(it => it.name === "Projects");
			navItems[ind].children = campaigns;
			return navItems;
	  }
	}
};
</script>

