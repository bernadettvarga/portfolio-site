<template>
  <div class="fixed flex w-full bg-light shadow-sm md:shadow-none">
    <div class="flex flex-grow items-center p-4 md:p-6">
      <NuxtLink to="/">
        <h1 class="text-2xl md:text-3xl hover:opacity-80 whitespace-nowrap">Bernadett Varga</h1>
      </NuxtLink>
      <p class="hidden md:block pl-4 mt-2 ml-4 text-sm tracking-widest uppercase border-l border-dark border-opacity-30 opacity-50 cursor-default">
        photographer
      </p>
      <nav class="hidden md:flex flex-grow justify-end ml-4 space-x-4">
        <NuxtLink to="/fashion" class="hover:opacity-70">
          Fashion
        </NuxtLink>
        <NuxtLink to="/portrait" class="hover:opacity-70">
          Portrait
        </NuxtLink>
        <NuxtLink to="/projects" class="hover:opacity-70">
          Projects
        </NuxtLink>
        <NuxtLink to="/about" class="hover:opacity-70">
          About
        </NuxtLink>
        <NuxtLink to="/contact" class="hover:opacity-70">
          Contact
        </NuxtLink>
      </nav>
    </div>
    <div @click="toggleMenu" class="md:hidden p-4 md:p-6 cursor-pointer flex items-center">
      <MenuIcon v-if="!show" fillColor="#363636" />
      <CloseIcon v-else fillColor="#363636" />
    </div>
    <div v-if="show" class="fixed inset-0 bg-light bg-opacity-80 mobile-menu">
      <nav class="flex flex-col p-6 space-y-1 text-xl">
        <NuxtLink to="/fashion" class="p-2 hover:opacity-70">
          Fashion
        </NuxtLink>
        <NuxtLink to="/portrait" class="p-2 hover:opacity-70">
          Portrait
        </NuxtLink>
        <NuxtLink to="/projects" class="p-2 hover:opacity-70">
          Projects
        </NuxtLink>
        <NuxtLink to="/about" class="p-2 hover:opacity-70">
          About
        </NuxtLink>
        <NuxtLink to="/contact" class="p-2 hover:opacity-70">
          Contact
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'

export default {
  name: 'Menu',
  components: { MenuIcon, CloseIcon },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    toggleMenu() {
      this.show = !this.show
    },
  },
}
</script>
