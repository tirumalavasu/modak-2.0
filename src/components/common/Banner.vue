<template>
  <div>
    <v-img :src="img" alt="" cover :height='bgHeight'>
      <div class="max-w-7xl mx-auto flex flex-col justify-start self-center pt-16">
        <h1 class="text-3xl font-bold text-white align-middle">{{title}}</h1>
        <p class="text-xl font-normal text-white" v-html="subTitle"></p>
      </div>      
    </v-img>    
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: ['img', 'title', 'subTitle'],
  computed: {
    bgHeight: function () {
      return this.$vuetify.breakpoint.height/4
    }
  },
};
</script>

<style lang="scss" scoped>
</style>