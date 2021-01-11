<template>
  <div class="home-banner">
    <v-img src="img/backgrounds/home-bg.svg" alt="" cover :height='bgHeight'>
      <div class="flex-1 flex items-stretch max-w-7xl mx-auto px-8 2xl:px-0">
        <div class="flex-1 grid grid-rows-3 xs:gap-4 xs:pt-4 md:pt-12 lg:pt-12">
          <div class="self-end xs:self-start xs:text-center">
              <h1 class="xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl text-white mb-2 font-thin">We deliver your</h1>
              <h1 class="xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-5xl text-white font-normal">Intelligent Data Platform</h1>
          </div>
          <div class="self-end xs:text-center">
              <h1 class="xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl text-white mb-2 font-light">Accelerate your data transformation journey into cloud<br/> by 4x with Modak Nabu™</h1>
          </div>
          <div class="self-center max-w-7xl mx-auto text-center">
              <v-btn color="primary" depressed @click="gotoRoute()">Request Demo</v-btn>
          </div>
        </div>             
      </div>
    </v-img>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  computed: {
    bgHeight: function () {
      return (this.$vuetify.breakpoint.width === 800 || this.$vuetify.breakpoint.width === 1024) ? this.$vuetify.breakpoint.height/3 : this.$vuetify.breakpoint.height/2
    }
  },
  methods: {
    gotoRoute () {
      window.open('/request_demo.html', '_self')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>