<template>
  <div>
    <Banner img="img/backgrounds/blur-calm-waters.jpg" title="Governed Data Lake Made Simple" subTitle="Data Lake creation and management made faster and simpler" />
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
        img: 'img/backgrounds/data-lake-360.png',
        dir: 'left',
        title: 'Data Governance',
        description: 'Over 80% of the world’s data is unstructured. Terabytes of data is being generated every minute and fast processing of this volume of data is becoming the need of the hour. More and more firms are now waking up to the reality of the big data.<br/><br/>Modak\'s Powered Data Lakes are governed, automated and are designed to address the issues associated with organizational siloes. Our meta-programming approach ensures faster and effective implementation of governed data lakes. At each layer of the governed data lake, integrity and security concerns are handled effectively.',
        items: []
      },
      feature2: {
        img: 'img/backgrounds/data-governance.jpg',
        dir: 'right',
        title: 'Smart Approach to Data Governance',
        description: 'Data Governance helps in maintaining integrity, availability and security of the information being used in various business functions. It ensures high quality throughout the life cycle of the data. Consistent and trustworthy data ensures business benefits.<br><br>Modak\'s Agile Governed Data Lake and metadata catalog discovers and secures the data which comply to the industry standards. Users can easily evaluate the data quality and manage metadata. They can even stay aligned with the terminologies and definitions. Data users can manage external data sources and provide the unified and transformed data to external applications. Our product makes it easy for people throughout the enterprise to consume data with ease.',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>