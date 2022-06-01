<template>
  <img
    :src="require(`~/assets/img/${item.src}.jpg`)"
    :class="`gallery-image gallery-image--${item.type}`"
    :alt="`Bernadett Varga Photography ${item.alt || ''}`"
  />
</template>

<script>
export default {
  name: 'GalleryImage',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
