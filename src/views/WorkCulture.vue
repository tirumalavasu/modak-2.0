<template>
  <div>
    <Banner img="img/backgrounds/culture-diversity.jpeg" title="Culture and Diversity" subTitle="At Modak, we strongly believe that culture and diversity are a business priority and hence important. In order to provide a unique solution to a different set of people, it is important that we have diverse opinions and people from all the walk of life. Thus, Modak believes in versatility." />
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
        img: 'img/backgrounds/culture-and-diversity.jpg',
        dir: 'left',
        title: '',
        description: 'To have a blend in diversity, we have employees from various educational backgrounds, bringing together experience in varied portfolios that has helped us to earn loyal clients. Understanding how to work in a cross-cultural environment and leveraging the diversity of multiple cultures is inherent to the unique way we do things. At Modak, we follow a very good gender ratio, providing equal opportunity for equal work. Modak has also emerged as one of the best companies for women to work at.',
        items: []
      },
      feature2: {
        img: 'img/backgrounds/office-fun.jpg',
        dir: 'right',
        title: '',
        description: 'We believe that fun and learning go hand in hand. At Modak, employees have ample scope of learning and can work on their skills under their mentors. Fairness and respect are pillars of the company and we have a strong foundation to hold it. These values we hold, combined with our excellent business understanding, guides us in bringing about a unique experience in the way we serve our clients and care for our employees.',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>