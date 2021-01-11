<template>
  <div>
    <Banner img="img/backgrounds/Big-Data.jpg" title="Smart Data Discovery" subTitle="To bring intelligence to every business user" />
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="my-4">
        <h3 class="p-8 text-base font-normal text-gray-900">
          <blockquote cite="#">
          <p class="uk-margin-small-bottom">Smart, Governed, Hadoop-based, Search-based and Visual-based Data
          Discovery will converge into a single set of next-generation data discovery capabilities as components
          of a modern business intelligence and analytics platform.</p>
          <footer>Gartner</footer>
          </blockquote>
        </h3>
      </v-card>
    </div>
    <FeatureCard :feature="feature1" />
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="my-4">
        <h3 class="p-8 text-base font-normal text-gray-900">
          <strong>Data Spider’s</strong> built-in automation capabilities help in discovering new data sources, change source definitions and schema drifts with ease. It ensures to keep metadata up-to-date and helps in data profiling. Hence, latest information is available for search engines. This helps data analysts and data scientists discover information easily.
        </h3>
      </v-card>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner'
// import TextCard from '@/components/common/TextCard'
import FeatureCard from '@/components/common/FeatureCard'
export default {
  name: 'ManagedDataops',
  components: {
    Banner,
    // TextCard,
    FeatureCard
  },
  data () {
    return {
      text: 'DataOps is a data enablement approach designed for rapid, reliable and repeatable delivery of ready-made data with fully operational analytics. Modak’s DataOps majorly consists of faster data enablement by using Modak’s approach of Data Preparation. Agile and smarter data engineering can handle large-scale data rapidly and efficiently is key to success.',
      feature1: {
        img: 'img/backgrounds/data-preparation-ipad.png',
        dir: 'left',
        title: '',
        description: 'Organizations invest huge amount of time and money in building data. However, most of that data turns into data swamps.<br/><br/>Data Spider crawls and captures metadata from several structured and unstructured data sources and then stores the metadata as operational, business and technical metadata. It helps in discovering data available in the organization and maintains the integrity between source and destination databases.<br/><br/>Using its built-in intelligence, Data Spider handles Change Data Capture and manages snapshots of metadata for reference.',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>