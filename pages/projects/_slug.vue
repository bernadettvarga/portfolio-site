<template>
  <div>Project: {{ slug }}</div>
</template>

<script>
  export default {
    async asyncData({ params }) {
      const slug = params.slug
      return { slug }
    }
  }
</script>
