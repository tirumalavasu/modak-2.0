<template>
  <div>
    <Banner img="img/backgrounds/key_differentiator.jpg" title="Key Differentiator" subTitle="Things that make us unique" />
    <FeatureCard :feature="feature1" />
    <FeatureCard :feature="feature2" />
    <FeatureCard :feature="feature3" />
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
        img: 'img/backgrounds/business-man-and-woman.jpg',
        dir: 'left',
        title: 'Honesty',
        description: 'Honesty is not just the best policy, but it is also one of the most important values to hold in any organization, as it’s the only way to build a successful organization. Our culture of honesty results in a merry and happy workplace environment. It also commands respect and results in a successful and profitable organization. Our employees proactively support by telling the truth without any fear or hesitation. Thus, small problems can be identified early on, and therefore our managers are armed beforehand with the information needed to make optimal decisions.',
        items: []
      },
      feature2: {
        img: 'img/backgrounds/blur-codes-coding.jpg',
        dir: 'right',
        title: 'Faster time to value',
        description: 'The core quality that drives Modak is to deliver services efficiently in time. Further, we at Modak don’t compromise on quality while delivering the services. This quality helps in drawing clients and also the overall work ecosystem. The employees at Modak are well-trained and have inherited the value of delivering services, while maintaining the quality.',
        items: []
      },
      feature3: {
        img: 'img/backgrounds/at-modak.jpeg',
        dir: 'left',
        title: 'Transparency',
        description: 'Transparency is given the highest priority in Modak\'s work culture. It always keeps the spirits of the employees high and allows them to share their opinions and communicate better. The agile methodology of working is the strongest pillar, which keeps the company stand tall.',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>