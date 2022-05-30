<template>
  <div class="flex flex-col w-full min-h-screen">
    <Menu/>
    <div class="flex-1">
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
