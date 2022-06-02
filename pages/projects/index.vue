<template>
  <div class="overflow-y-scroll w-full p-4 md:p-6 md:pt-0">
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      <div class="project project--portrait te-3"></div>
      <div class="project project--portrait mad-prod-2"></div>
      <div class="project--intro">
        <div class="md:absolute md:inset-0 flex items-end">
          <div class="pt-5 md:pt-0 md:pl-10 md:pb-10">
            <h1 class="text-3xl md:text-4xl">Projects</h1>
            <p class="w-56 font-display leading-5 text-lg pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
      </div>
      <div class="project project--landscape sb-1"></div>
      <div class="project project--portrait enroute-french-2-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
}
</script>

<style>
.te-3 {
  background-image: url('~assets/img/overview/te-3.jpg');
}
.sb-1 {
  background-image: url('~assets/img/overview/sb-1.jpg');
}
.mad-prod-2 {
  background-image: url('~assets/img/overview/mad-prod-2.jpg');
}
.enroute-french-2-2 {
  background-image: url('~assets/img/overview/enroute-french-2-2.jpg');
}
</style>
