<template>
  <Gallery :description="description" :content="content" />
</template>

<script>
import Gallery from '@/components/Gallery'

export default {
  components: {
    Gallery,
  },
  data() {
    return {
      description:
        'Bernadett Varga is a self-thaught photographer based in Budapest whose main focus is fashion, portrait and product photography. She has been taking pictures for 12 years now and since then worked with local designers.',
      content: {
        folder: 'overview',
        items: [
          {
            src: 'te-3',
            type: 'portrait',
          },
          {
            src: 'mad-prod-2',
            type: 'portrait',
          },
          {
            src: 'enroute-french-2-2',
            type: 'portrait',
          },
          {
            src: 'sb-1',
            type: 'landscape',
          },
        ],
      },
    }
  },
}
</script>
