<template>
  <img
    :src="require(`~/assets/img/${folder}/${item.src}.jpg`)"
    :class="`gallery-image gallery-image--${item.type}`"
    :alt="`Bernadett Varga Photography ${item.alt || ''}`"
  />
</template>

<script>
export default {
  name: 'GalleryImage',
  props: {
    folder: {
      type: String,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
