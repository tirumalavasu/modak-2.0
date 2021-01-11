<template>
  <div>
    <Banner img="img/backgrounds/codes-monitor-programming.jpg" title="Metaprogramming" subTitle="Modak uses Metaprogramming approach to generate code through metadata, which is stored in a metadata respository. This approach significantly accelerates data and analytics processes." />
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="my-4">
        <h3 class="p-8 text-base font-normal text-gray-900">
          Using Metaprogramming approach, Modak has gained a significant advantage in Data Analytics industry          
        </h3>
      </v-card>
    </div>
    <FeatureCard :feature="feature1" />
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="my-4">
        <h3 class="pt-8 px-8 text-base font-normal text-gray-900">
          <strong>According to Gartner,</strong> more than 70% of big data projects have failed due to the large amount of time spent on data preparation and curation. Most businesses spend more time in generating insights using machine learning and automation. By the time the data reaches the visualization phase, either the data becomes outdated or the technology becomes outdated. At Modak, our metaprogramming approach focuses mainly on the data preparation phase. The metaprogramming approach drastically accelerates the data preparation and curation processes.
        </h3>
        <h3 class="p-8 text-base font-normal text-gray-900">
          Metadata is essential for data preparation in any big data platform. It contains key information about the data. Modak's nabu metaprogramming approach leverages the metadata to ingest, curate and unify the data sets. Metaprogramming basically generates code through metadata, which we capture from the source and destination, save into technical, operational and business metadata catalogues.
        </h3>
      </v-card>
    </div>
    <FeatureCard :feature="feature2" />
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
        img: 'img/backgrounds/laptop-analytics.jpg',
        dir: 'left',
        title: '',
        description: 'Modak’s Metaprogramming approach is a clever technique which runs blocks of code on billions of rows and records at an instance. Modak’s Metaprogramming technique is capable enough to read, generate, analyze or transform other programs, and even modify itself while running.',
        items: []
      },
      feature2: {
        img: 'img/backgrounds/blur-codes-coding.jpg',
        dir: 'right',
        title: '',
        description: 'One of the benefits of metaprogramming is it increases the productivity of developers once they get past the convention and configuration phases. In metaprogramming, metadata is used in data ingestion, cascading templates and creating entities which is helpful for data visualization. Through meta programming approach, we follow a complete automated end-to-end process right from source to ingestion & curation, so that users can utilize optimized data for their process.',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>