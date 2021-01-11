<template>
  <div>
    <Banner img="img/backgrounds/ball.jpg" title="Data migration" subTitle="Discover a faster and more secure ride to cloud" />
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="p-8 my-4">
        <h1 class="text-2xl font-bold text-gray-700 my-2 text-left">Data Migration</h1>
        <h3 class="text-base font-normal text-gray-900">
          Transferring information from one place to another by itself does not create a business value. Modak's data migration solution ensures an effective migration of data and improved data quality. The solution shifts the focus from customized traditional solutions to standardized implementations in order to achieve
        </h3>
        <ul class="list-unstyled">
          <li><v-icon>mdi-check</v-icon> upgrades</li>
          <li><v-icon>mdi-check</v-icon> Adequate migration</li>
          <li><v-icon>mdi-check</v-icon> Significant savings in operational costs</li>
        </ul>
      </v-card>
    </div>
    <div class="max-w-7xl mx-auto my-16">
      <v-img src="img/backgrounds/DM1.png"></v-img>
    </div>
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="p-8 my-4">
        <h1 class="text-2xl font-bold text-gray-700 my-2 text-left">Our Capabilities</h1>
        <ul class="list-unstyled">
          <li><v-icon>mdi-check</v-icon> Data Migration from any platform to the desired source</li>
          <li><v-icon>mdi-check</v-icon> Hadoop to Hadoop file transfer</li>
          <li><v-icon>mdi-check</v-icon> Migration of legacy data to advanced cloud services like AWS and Microsoft Azure</li>
        </ul>
        <br/>
        <h3 class="text-base font-normal text-gray-900">
          We integrate innovative processes, tools, and solutions to ensure that your data migration is carried out quickly and effectively.
          <br/><br/>
          We use our industrialized data migration factory to help you combine data migration with an effective archival strategy. This ensures that new systems are commissioned and old systems are decommissioned more quickly.
          <br/><br/>
          We execute these data migrations using our Global Delivery Model approach where both, onsite and offsite teams collaborate to provide top value to the customers.
          <br/><br/>
          While each data migration method is exclusive and unique, we tend to perceive what has worked for others. This expertise would help in running your project smoothly. Modak provides you with the finest professionals possessing the precise skill sets required to complete the project successfully.
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