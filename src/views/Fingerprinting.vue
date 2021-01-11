<template>
  <div>
    <Banner img="img/backgrounds/bg-finger-print.jpg" title="Data fingerprinting" subTitle="Accelerating Data Mapping and Unification using Fingerprints" />
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="my-4 p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Data fingerprinting</h3>
        <h3 class="text-base font-normal text-gray-900">
          Modak’s Data fingerprinting provides a index value which differentiates between other record values, this value is called as fuzzy value and index is called as fuzzy index these are called as fingerprints of the data which are unique in nature, these values are used to match a similar leaves of a branch.
        </h3>
      </v-card>
      <v-img src="img/backgrounds/fingerprinting.png" class="my-8"></v-img>
      <v-card class="my-4 p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Why is data fingerprinting useful?</h3>
        <h3 class="text-base font-normal text-gray-900">
          In this process, the comparison of column values is done across different tables and a hash code against the column is generated. Irrespective of what the column name is labelled across different tables, if the column shares the same data, then a score will be generated from 0 to 1 as how much of data is matched and then the mapping of the data will be done and the data will be merged. This score will be generated using an algorithm.
          <br/><br/>For example, if there are different tables where the column is labelled as “col”, “column”, “col1”, but the data which is shared in the columns are same, then the data is checked, a hash will be generated against that column, a score between 0 to 1 is generated and then mapping of the data takes place by merging the columns.
        </h3>
      </v-card>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner'
export default {
  name: 'ManagedDataops',
  components: {
    Banner
  }
};
</script>

<style lang="scss" scoped>
</style>