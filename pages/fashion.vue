<template>
  <Gallery :title="title" :description="description" :content="content" />
</template>

<script>
import Gallery from '@/components/Gallery'
import contentObj from '@/components/content/gallery/fashion.js'

export default {
  name: 'Fashion',
  components: {
    Gallery,
  },
  data() {
    return {
      title: 'Fashion',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      content: contentObj,
    }
  },
}
</script>
