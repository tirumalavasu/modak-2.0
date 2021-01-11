<template>
  <div>
    <Banner img="img/backgrounds/bots.jpg" title="BOTWorks" subTitle="Bots are independent units with scalable functionality. They accelerate development of business logic by separating it from code and also help in easy integration of complex workflows" />
    <div class="bg-gray-100">
      <div class="max-w-7xl mx-auto py-16">
        <v-img src="img/backgrounds/Bots_2.png" width="50%" class="mx-auto"></v-img>
      </div>
    </div>
    <FeatureCard :feature="feature1" />
    <div class="bg-gray-100">
      <div class="max-w-7xl mx-auto py-16">
        <h1 class="text-2xl font-bold text-gray-900 mb-4 text-left">Why Bots?</h1>
        <div class="max-w-7xl mx-auto grid grid-cols-3 grid-rows-5 gap-8">
          <v-card class="py-4 px-16 flex items-center" v-for="(item, i) in items" :key="i">
            <img :src="item.icon" class="inline h-8 mr-4 fill-blue-500" />
            <span>{{item.title}}</span>
          </v-card>
        </div>
        <div class="max-w-7xl mx-auto grid grid-cols-2 gap-8 mt-10">
          <v-card class="py-6 px-16 flex items-center">
            <img src="https://modak.com/img/icons/controlcenter.svg" class="inline h-8 mr-4 fill-blue-500" />
            <span>Control center (Spin up, Pause, Stop Bots)</span>
          </v-card>
          <v-card class="py-6 px-16 flex items-center">
            <img src="https://modak.com/img/icons/highvolumemessagehandling.svg" class="inline h-8 mr-4 fill-blue-500" />
            <span>High volume messaging/High events handling</span>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner'
import FeatureCard from '@/components/common/FeatureCard'
export default {
  name: 'ManagedDataops',
  components: {
    Banner,
    FeatureCard
  },
  data () {
    return {
      feature1: {
        img: 'img/backgrounds/bot-img.jpg',
        dir: 'right',
        title: 'Smart Bots',
        description: '<h3 class="text-base font-bold">Resilient and scalable</h3><br>Smart Bots are decentralized event-driven workflow engines, which can scale-up based on workload.<br><br>The core feature of bots is being asynchronous and able to run numerous tasks parallelly. Earlier, identifying a failed job and rerunning it was a nightmare for data ingestion and curation. Due to manual efforts involved in recurring the failed jobs, SLA breaches were quite frequent and tedious. However, bots are empowered to craft high-performance variants of themselves. They are the medium, mechanism, and platform for getting greater value from data analytics and augmented data preparation.',
        items: []
      },
      items: [
        {
          icon: 'img/icons/decoupled.svg',
          title: 'Fully decoupled'
        },
        {
          icon: 'https://modak.com/img/icons/asynchronous.svg',
          title: 'Asynchronous'
        },
        {
          icon: 'https://modak.com/img/icons/stateless.svg',
          title: 'Stateless Bot'
        },
        {
          icon: 'https://modak.com/img/icons/stateful.svg',
          title: 'Stateful message'
        },
        {
          icon: 'https://modak.com/img/icons/polumorphic.svg',
          title: 'Polymorphic'
        },
        {
          icon: 'https://modak.com/img/icons/faulttolerant.svg',
          title: 'Fault tolerant'
        },
        {
          icon: 'https://modak.com/img/icons/gxp.svg',
          title: 'Compliance to GxP'
        },
        {
          icon: 'https://modak.com/img/icons/schemaindepedent.svg',
          title: 'Schema independent'
        },
        {
          icon: 'https://modak.com/img/icons/failurenotification.svg',
          title: 'Failure notification'
        },
        {
          icon: 'https://modak.com/img/icons/kafkabus.svg',
          title: 'Persistence in the bus (Kafka)'
        },
        {
          icon: 'https://modak.com/img/icons/monitoringandauditing.svg',
          title: 'Monitoring, auditing & logging'
        },
        {
          icon: 'https://modak.com/img/icons/regressionttesting.svg',
          title: 'Intrinsic regression testing'
        },
        {
          icon: 'https://modak.com/img/icons/distributedforautoscaling.svg',
          title: 'Distributed for auto-scaling'
        },
        {
          icon: 'https://modak.com/img/icons/metamessagesworkflow.svg',
          title: 'Workflow using meta messages'
        },
        {
          icon: 'https://modak.com/img/icons/robusterrorhandling.svg',
          title: 'Robust error handling (Resilience)'
        }
      ]
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>