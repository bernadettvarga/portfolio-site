<template>
  <div class="flex flex-col w-full min-h-screen">
    <Menu />
    <div id="main" class="flex flex-1 bg-light">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  components: {
    Menu,
  }
}
</script>
