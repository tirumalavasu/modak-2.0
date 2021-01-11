<template>
  <div>
    <Banner img="img/backgrounds/employee-views.jpg" title="Employee views" subTitle="“To win in marketplace you must first win in the workplace” -Doug Conant<br/>The core of our organization are our Employees. We treat our employees as we treat our customers because we believe, satisfied employees create satisfied customers." />
    <div class="max-w-7xl mx-auto my-16 text-center">
      <h1 class="font-bold text-2xl">Employee Stories</h1>
    </div>    
    <div class="max-w-7xl mx-auto my-16 grid grid-cols-3 gap-16">
      <v-card
        class="mx-auto"
      >
        <h1 class="text-lg font-light p-4">
          "Modak has been a wonderful company with excellent work-life balance always evolving looking for the next innovation - never resting and allow us to stand out for personal advancement provided with lot of autonomy. Several things worth pointing out within the overall atmosphere; we have a pretty darned good solution to job satisfaction and company success, allows the management team to easily help everyone get acquainted with all-embracing job feel. Overall, it’s a fair trade, a great place to work and is built on work ethos of quality product, ethical action, and client success."
        </h1>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="text-primary font-bold">Archana P</v-list-item-title>
              <v-list-item-subtitle>Project Manager</v-list-item-subtitle>
            </v-list-item-content>

          </v-list-item>
        </v-card-actions>
      </v-card>
      <v-card
        class="mx-auto"
      >
        <h1 class="text-lg font-light p-4">
          "The most reliable company which gives you enough challenges to grow in professional life. Having completed 7 plus years of employment at Modak , I can proudly say that every day you are put through a challenging role, helping you to use your full potentials and thus, aiding to meet your personal and organizational goals. At Modak , technology and automation go hand in hand and its awesome to be part of this beautiful journey."
        </h1>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Gray&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=white"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="text-primary font-bold">Rajesh Vassey</v-list-item-title>
              <v-list-item-subtitle>Solution Architect & Tech Lead</v-list-item-subtitle>
            </v-list-item-content>

          </v-list-item>
        </v-card-actions>
      </v-card>
      <v-card
        class="mx-auto"
      >
        <h1 class="text-lg font-light p-4">
          "Modak has helped me in becoming  " a jack of all trades " by giving me the right guidance and providing me with opportunities to prove myself. The management is always open to new ideas and encourages every individual to be an innovator. Hence, it’s a right place for those who want to be self-driven."
        </h1>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="text-primary font-bold">Akhil Katkam</v-list-item-title>
              <v-list-item-subtitle>Business Analyst</v-list-item-subtitle>
            </v-list-item-content>

          </v-list-item>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner'
// import TextCard from '@/components/common/TextCard'
// import FeatureCard from '@/components/common/FeatureCard'
export default {
  name: 'EmployeeViews',
  components: {
    Banner,
    // TextCard,
    // FeatureCard
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