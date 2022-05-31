<template>
  <Gallery :description="description" />
</template>

<script>
import Gallery from '@/components/Gallery'

export default {
  components: {
    Gallery,
  },
  data() {
    return {
      description: ' Bernadett Varga is a self-thaught photographer based in Budapest whose main focus is fashion, portrait and product photography. She has been taking pictures for 12 years now and since then worked with local designers.',
    }
  },
}
</script>
