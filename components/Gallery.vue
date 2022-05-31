<template>
  <div class="p-6 md:pt-0 flex flex-1 items-stretch space-x-4">
    <template v-if="title || description">
      <div class="w-72 self-end flex-shrink-0">
        <template v-if="title">
          <h1 class="text-5xl">{{ title }}</h1>
        </template>
        <template v-if="description">
          <p class="font-display leading-5 text-lg p-10 pl-0 pt-5">{{ description }}</p>
        </template>
      </div>
    </template>
    <div class="flex-shrink-0">
      <img src="~/assets/img/overview/te-3.jpg" class="gallery-image__portrait" />
    </div>
    <div class="flex-shrink-0">
      <img src="~/assets/img/overview/mad-prod-2.jpg" class="gallery-image__portrait" />
    </div>
    <div class="flex-shrink-0">
      <img src="~/assets/img/overview/enroute-french-2-2.jpg" class="gallery-image__portrait" />
    </div>
    <div class="flex-shrink-0">
      <img src="~/assets/img/overview/sb-1.jpg" class="gallery-image__landscape" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>
