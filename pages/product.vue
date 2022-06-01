<template>
  <Gallery :title="title" :description="description" :content="content" />
</template>

<script>
import Gallery from '@/components/Gallery'
import contentObj from '@/components/content/gallery/product.js'

export default {
  name: 'Product',
  components: {
    Gallery,
  },
  data() {
    return {
      title: 'Product',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      content: contentObj,
    }
  },
}
</script>
