<template>
  <div>
    <Banner img="img/backgrounds/f2.jpeg" title="Data Fabric" subTitle="Unified platform for comprehensive data management" />
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="my-4">
        <h3 class="p-8 text-base font-normal text-gray-900">
          Modak’s Data Fabric is an architecture and set of data services that provide consistent capabilities across a choice of endpoints spanning on-premises and multiple cloud environments. Data Fabric simplifies and integrates data management across cloud and on-premises to accelerate digital transformation.
          <br/><br/>A single platform that stitches data together and enables data management and integration can handle these challenges. Data Fabric provides such a unified data platform that stretches across location, including on-premise, cloud or edge, data types, and access methods. It is the fabric that provides an ensemble of tools and technologies surrounding disparate data siloes to ensure that the data is treated consistently.
          <ul class="list-disc mt-4">
            <li>Scales with growing data volumes and access methods</li>
            <li>Provides common ways for users to access data processing tools</li>
            <li>Enables data integration across data nodes</li>
            <li>Fully supports automation needed for DataOps</li>
            <li>Moves computation to the data</li>
            <li>Manages data across all environments for batch and real-time needs</li>
            <li>Supports complete API life cycle</li>
          </ul>          
        </h3>
      </v-card>
    </div>
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
      text: 'DataOps is a data enablement approach designed for rapid, reliable and repeatable delivery of ready-made data with fully operational analytics. Modak’s DataOps majorly consists of faster data enablement by using Modak’s approach of Data Preparation. Agile and smarter data engineering can handle large-scale data rapidly and efficiently is key to success.',
      feature1: {
        img: 'img/backgrounds/ats-evolution.jpg',
        dir: 'left',
        title: 'Distributed Location Support',
        description: 'Workflows are orchestrated right from data ingestion and preparation to deployment and consumption through the execution of services of data capture, storage, integration, governance, provision, and application. The fabric provides a single control platform to execute a sequence of services built with pre-packaged diverse technologies and distributed across multiple execution environments. It also automates the coordination of distributed multi-services workflows.',
        items: []
      },
      feature2: {
        img: 'img/backgrounds/chart-flow-chart-plan.jpg',
        dir: 'right',
        title: 'Uniform Governance Model',
        description: 'The fabric ensures data consistency locally and provides a simple consistency model to implement across data locations. It integrates multiple data types across discrete data stores. The data is secured at the lowest granularity within the fabric rather than just as a function of access methods.',
        items: []
      },
      feature3: {
        img: 'img/backgrounds/Structured-Query-Language-Server-Integration-Services.jpg',
        dir: 'left',
        title: 'Distributed Metadata',
        description: 'Data fabric does an extensive collection of metadata to discover, access, search, and integrate data silos. It allows metadata to be distributed across all data nodes to avoid any bottlenecks. The metadata is also useful in minimizing cloud lock-ins.',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>