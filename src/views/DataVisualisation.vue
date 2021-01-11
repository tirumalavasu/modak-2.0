<template>
  <div>
    <Banner img="img/backgrounds/digital-marketing.jpg" title="Data visualization" subTitle="Modak's data visualization services help clients in analyzing data for actionable insights and predictive analytics" />
    <FeatureCard :feature="feature1" />
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
      feature1: {
        img: 'img/backgrounds/analysis-chart.jpg',
        dir: 'left',
        title: 'Faster Decisions',
        description: 'Nowadays, faster decisions are the need of the hour. It is difficult to make business decisions based on the data at hand. The representation of the data helps business individuals to understand the data and to make quick decisions. At Modak, we generate dashboards that are visually appealing and easy to understand. Business users can tweak the necessary data from the visuals to customize, according to their requirements.',
        items: []
      },
      feature2: {
        img: 'img/backgrounds/chart-flow-chart-plan.jpg',
        dir: 'right',
        title: 'What is Data Visualization?',
        description: 'Data Visualization is the graphical representation of data using charts, graphs and maps. It helps in understanding the hidden patterns in data.<br/><br/>The process of reading and analyzing the data and coming up with business insights may take a lot of time in making business decisions. Instead, visualizing the data and generating business insights from the visuals makes it easier.',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>