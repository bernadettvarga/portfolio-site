<template>
  <Gallery :description="description" :content="content" />
</template>

<script>
import Gallery from '@/components/Gallery'
import contentArray from '@/components/content/gallery/overview.js'

export default {
  name: 'Index',
  components: {
    Gallery,
  },
  data() {
    return {
      description:
        'Bernadett Varga is a self-thaught photographer based in Budapest whose main focus is fashion, portrait and product photography. She has been taking pictures for 12 years now and since then worked with local designers.',
      content: contentArray,
    }
  },
}
</script>
