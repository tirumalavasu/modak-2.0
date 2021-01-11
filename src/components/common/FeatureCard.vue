<template>
  <div class="max-w-7xl mx-auto grid grid-cols-2 gap-16 my-24 items-center">
    <v-img :src='feature.img' cover v-if="feature.dir === 'left'" max-height="360" class="w-full"></v-img>
    <div class="flex flex-col">
      <h1 class="text-2xl font-bold text-gray-700 my-2 text-left">{{feature.title}}</h1>
      <h6 class="my-2" v-html="feature.description"></h6>
      <ul v-if="feature.items.length > 0" class="list-disc">
        <li v-for="(item, i) in feature.items" :key="i">{{item}}</li>
      </ul>
    </div>
    <v-img :src='feature.img' cover v-if="feature.dir === 'right'" max-height="360"></v-img>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: ['feature']
}
</script>

<style lang="scss" scoped>

</style>