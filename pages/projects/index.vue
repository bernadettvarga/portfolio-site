<template>
  <div class="overflow-y-scroll w-full p-4 md:p-6 md:pt-0">
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      <div class="project project--portrait" lazy-background="~assets/img/overview/te-3.jpg">
        <div class="project__overlay">
          <div class="project__overlay__details">
            <p class="font-display text-5xl">Eszter Tóth</p>
            <div class="project__overlay__details__separator"></div>
            <p class="uppercase tracking-widest">fashion portraits</p>
          </div>
        </div>
      </div>
      <div class="project project--portrait" lazy-background="~assets/img/overview/mad-prod-2.jpg"></div>
      <div class="hidden md:block project--intro">
        <div class="md:absolute md:inset-0 flex items-end">
          <div class="pt-5 md:pt-0 md:pl-10 md:pb-10">
            <h1 class="text-3xl md:text-4xl">Projects</h1>
            <p class="w-56 font-display leading-5 text-lg pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
      </div>
      <div class="project project--landscape" lazy-background="~assets/img/overview/sb-1.jpg"></div>
      <div class="project project--portrait"  lazy-background="~assets/img/overview/enroute-french-2-2.jpg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
}
</script>
