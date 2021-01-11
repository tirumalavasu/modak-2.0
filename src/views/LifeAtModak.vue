<template>
  <div>
    <Banner img="img/backgrounds/modak-party.jpeg" title="Modak's Vibrant team" subTitle="" />
    <FeatureCard :feature="feature1" />    
    <FeatureCard :feature="feature2" />
    <v-img src="img/backgrounds/at-modak.jpeg" height="640"></v-img>
    <div class="max-w-7xl mx-auto my-16 grid grid-cols-3 gap-4">
      <v-card color="blue" class="p-8">
        <h1 class="text-2xl font-bold text-white">Do it Once</h1>
        <p class="text-white">Modak Analytics recognizes the amount of effort a customer makes in selecting products and services. Modak Analytics solutions make it possible to make a wise decision only once.</p>
      </v-card>
      <v-card class="p-8">
        <h1 class="text-2xl font-bold">Do it Right</h1>
        <p>In implementing customer solutions, Modak Analytics always aim to do it right, as per customer’s terms, and in the customer’s allotted time frame.</p>
      </v-card>
      <v-card color="#26c6da" class="p-8">
        <h1 class="text-2xl font-bold text-white">Make it Last</h1>
        <p class="text-white">Modak Analytics employees, products, and services gives importance to customer satisfaction and thereby, builds long-lasting customer relationship.</p>
      </v-card>
    </div>
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
      text: 'DataOps is a data enablement approach designed for rapid, reliable and repeatable delivery of ready-made data with fully operational analytics. Modak’s DataOps majorly consists of faster data enablement by using Modak’s approach of Data Preparation. Agile and smarter data engineering can handle large-scale data rapidly and efficiently is key to success.',
      feature1: {
        img: 'img/backgrounds/about-us-collaboration-community.jpg',
        dir: 'left',
        title: 'A Culture of Trust',
        description: 'A culture of trust prevails in our organization. And we believe that trust can only come from our commitment to our corporate culture. We adhere to a culture of – no hidden agendas, no office politics, zero fear to expression of ideas and transparent communications. Every employee in our organization makes a commitment to promote honesty and integrity at work.',
        items: []
      },
      feature2: {
        img: 'img/backgrounds/office-culture.jpg',
        dir: 'right',
        title: 'Corporate culture',
        description: 'Our corporate culture sets apart in a highly competitive marketplace. We believe in our ideals to preserve our corporate culture. Our commitment is our insurance for success. During the period of challenges and opportunities, we encountered, our culture and values has encouraged us to face them and deliver quality deliverables to our clients.',
        items: []
      },
      feature3: {
        img: 'img/backgrounds/Company_pic.jpeg',
        dir: 'right',
        title: 'Women in Analytics',
        description: 'We pride ourselves in being a Women Led organization and being an equal employment provider. More than 30% of our workforce is comprised of women and we believe women has a big role to play in the analytics for being more analytical thinkers, this has helped us to an extent while finding solutions to some of the most complex analytical solutions.<br/><br/>Being led by Aarti Joshi, as the chief architect of People and Business growth of the organization, she has been critical in building Modak from a 3-member team into a dynamic, cross-functional 150-professionals strong company in a span of 5 years.',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>