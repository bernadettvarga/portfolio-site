<template>
  <div class="overflow-y-scroll w-full p-4 md:p-6 md:pt-0">
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      <div
        v-for="(project, index) in projects"
        :key="project.index"
        :class="project.img ? `project project--${project.img.type}`: ''"
        :lazy-background="project.img ? require(`~/assets/img/${project.img.src}`) : ''"
      >
        <template v-if="project.type === 'intro'">
          <div class="hidden md:block project--intro">
            <div class="md:absolute md:inset-0 flex items-end">
              <div class="pt-5 md:pt-0 md:pl-10 md:pb-10">
                <h1 class="text-3xl md:text-4xl">{{ project.title }}</h1>
                <p class="w-56 font-display leading-5 text-lg pt-2">{{ project.description }}</p>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <NuxtLink :to="`/projects/${project.slug}`">
            <div class="project__overlay">
              <div class="project__overlay__details">
                <p v-if="project.title" class="font-display text-5xl">{{ project.title }}</p>
                <template v-if="project.subtitle">
                  <div class="project__overlay__details__separator"></div>
                  <p class="uppercase tracking-widest">{{ project.subtitle }}</p>
                </template>
              </div>
            </div>
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import contentArray from '@/components/content/projects/index.js'

export default {
  name: 'Projects',
  data() {
    return {
      projects: contentArray,
    }
  },
}
</script>
