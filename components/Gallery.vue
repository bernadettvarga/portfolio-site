<template>
  <div class="p-4 md:p-6 md:pt-0 md:pr-0 flex flex-col md:flex-row flex-1 items-stretch space-y-4 md:space-y-0 md:space-x-4 overflow-x-scroll">
    <template v-if="title || description">
      <div class="w-full md:w-72 md:self-end flex-shrink-0">
        <template v-if="title">
          <h1 class="text-5xl">{{ title }}</h1>
        </template>
        <template v-if="description">
          <p class="font-display leading-5 text-lg p-10 pl-0 pt-5">{{ description }}</p>
        </template>
      </div>
    </template>

    <div class="flex-shrink-0 relative" v-for="item in content" :key="item.src">
      <template v-if="item.projectSlug">
        <NuxtLink :to="`/projects/${item.projectSlug}`">
          <GalleryImage :item="item" />

          <div class="gallery-image__button">
            See more
            <ArrowRight fillColor="#FEFEFE" :size="18" class="ml-3" />
          </div>
        </NuxtLink>
      </template>

      <template v-else>
        <GalleryImage :item="item" />
      </template>
    </div>

    <!--TODO: add animation-->
    <div v-if="showScrollHint" class="hidden md:block fixed top-1/2 right-0 opacity-80">
      <ChevronRightIcon fillColor="#FEFEFE" :size="48" />
    </div>
  </div>
</template>

<script>
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue'
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue'
import GalleryImage from '@/components/GalleryImage.vue'

export default {
  name: 'Gallery',
  components: { ChevronRightIcon, ArrowRight, GalleryImage },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    content: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showScrollHint: true,
    }
  },
  mounted() {
    this.listenToScroll()
  },
  methods: {
    listenToScroll() {
      window.addEventListener('scroll', this.hideScrollHint, true)
    },
    hideScrollHint() {
      this.showScrollHint = false
    },
  },
}
</script>
