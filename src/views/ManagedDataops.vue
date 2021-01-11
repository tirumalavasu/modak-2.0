<template>
  <div>
    <Banner img="img/backgrounds/dataopsmain.jpg" title="Managed DataOps" subTitle="Agile operations for quicker analytics" />
    <TextCard :text="text" />
    <FeatureCard :feature="feature1" />
    <FeatureCard :feature="feature2" />
    <FeatureCard :feature="feature3" />
  </div>
</template>

<script>
import Banner from '@/components/common/Banner'
import TextCard from '@/components/common/TextCard'
import FeatureCard from '@/components/common/FeatureCard'
export default {
  name: 'ManagedDataops',
  components: {
    Banner,
    TextCard,
    FeatureCard
  },
  data () {
    return {
      text: 'DataOps is a data enablement approach designed for rapid, reliable and repeatable delivery of ready-made data with fully operational analytics. Modak’s DataOps majorly consists of faster data enablement by using Modak’s approach of Data Preparation. Agile and smarter data engineering can handle large-scale data rapidly and efficiently is key to success.',
      feature1: {
        img: 'img/backgrounds/Data%20Ops%20Svg.svg',
        dir: 'left',
        title: 'Highly Automated, Continuous & Agile',
        description: 'DataOps quickly enables enterprises to explore and understand the readily available data seamlessly and provides real-time data insights allowing multiple enterprise teams with different technologies to collaborate.',
        items: [
          'Highly-automated, augmented processes help in quicker and faster data enablement',
          'Improved standardization, continuous process monitoring and data quality checks',
          'About 4-10x reduction time in the development of new data pipelines',
          'Highly accelerated deployment processes',
          'Reduction in error rates and best practices ensures confidence in descriptive, predictive and prescriptive analytic solutions',
          'Reduction in hardware costs and better management of cloud infrastructure'
        ]
      },
      feature2: {
        img: 'img/backgrounds/analysis-chart.jpg',
        dir: 'right',
        title: 'Self-Service',
        description: 'As opposed to the traditional rigid schema model, where each use case must adapt to the ways of the model, DataOps provides self-service data analysis and data science solutions. Data consumers can analyse data and come up with new use cases for data-driven decisions. The approach provides production-ready data and empowers consumers to become creative in effectively using the enterprise data without having to deal with complexities, such as finding data, quality, access, data integrity, difficulties with modern data management and poorly-defined data.',
        items: []
      },
      feature3: {
        img: 'img/backgrounds/ad_edwdgd_011519.jpg',
        dir: 'left',
        title: 'Highly-Defined Data',
        description: 'DataOps aims to defeat the data chaos by turning raw data into valuable and meaningful information. It brings the ability to infer relations among semantic objects across data silos, and grants the capability to discover, analyse and act upon data with ease. Data consumers can use the robust search capabilities with the help of extensive collection of metadata, data tagging and data lineage driven by DataOps.',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>