<template>
  <div class="max-w-7xl mx-auto my-16">
    <v-card class="my-4">
      <h3 class="p-8 text-xl font-normal text-gray-900">
        {{text}}
      </h3>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'TextCard',
  props: ['text']
}
</script>

<style scoped>

</style>