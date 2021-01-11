<template>
  <div class="bg-gray-100 p-4 xl:py-8 2xl:py-8">
    <div class="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-5 2xl:grid-cols-5 gap-4 xs:gap-4">
      <v-card elevation="2" class="xl:p-2 2xl:p-2 text-center flex flex-col justify-between">
        <div>
          <img src="img/icons/home/smart_data_discovery.svg" alt="" class="h-20 mx-auto xs:my-2 xl:my-4 2xl:my-4" />
          <h1 class="xs:text-xl xl:text-lg 2xl:text-lg font-bold text-gray-700">Smart Data Discovery</h1>
          <span class="block xs:text-base xs:px-4 xl:text-sm 2xl:text-sm font-normal text-gray-700 mt-2">Data Spider to automate capturing of technical metadata for all data sources both on-premise and on cloud</span>
        </div>
        <div>
          <v-btn elevation="2" color="primary" text class="my-4 normal-case" href="smart-data-discovery.html">Learn more</v-btn>
        </div>
      </v-card>
      <v-card elevation="2" class="xl:p-2 2xl:p-2 text-center flex flex-col justify-between">        
        <div>
          <img src="img/icons/home/automated_ingestion.svg" alt="" class="h-20 mx-auto xs:my-2 xl:my-4 2xl:my-4" />
          <h1 class="xs:text-xl xl:text-lg 2xl:text-lg font-bold text-gray-700">Automated Ingestion</h1>
          <span class="block xs:text-base xs:px-4 xl:text-sm 2xl:text-sm font-normal text-gray-700 mt-2">Metadata driven approach to create and run data ingestion pipelines in an automated way</span>
        </div>
        <div>
          <v-btn elevation="2" color="primary" text class="my-4 normal-case" href="automated-data-ingestion.html">Learn more</v-btn>
        </div>
      </v-card>
      <v-card elevation="2" class="xl:p-2 2xl:p-2 text-center flex flex-col justify-between">        
        <div>
          <img src="img/icons/home/active_metadata.svg" alt="" class="h-20 mx-auto xs:my-2 xl:my-4 2xl:my-4" />
          <h1 class="xs:text-xl xl:text-lg 2xl:text-lg font-bold text-gray-700">Active metadata catalog</h1>
          <span class="block xs:text-base xs:px-4 xl:text-sm 2xl:text-sm font-normal text-gray-700 mt-2">Unified repository of metadata to automate and accelerate repetitive data engineering processes</span>
        </div>
        <div>
          <v-btn elevation="2" color="primary" text class="my-4 normal-case" href="Metaprogramming.html">Learn more</v-btn>
        </div>
      </v-card>
      <v-card elevation="2" class="xl:p-2 2xl:p-2 text-center flex flex-col justify-between">        
        <div>
          <img src="img/icons/home/finger_print.svg" alt="" class="h-20 mx-auto xs:my-2 xl:my-4 2xl:my-4" />
          <h1 class="xs:text-xl xl:text-lg 2xl:text-lg font-bold text-gray-700">Data Fingerprinting</h1>
          <span class="block xs:text-base xs:px-4 xl:text-sm 2xl:text-sm font-normal text-gray-700 mt-2">Unique identifier for a set of data that helps to quickly identify similar sets of data</span>
        </div>
        <div>
          <v-btn elevation="2" color="primary" text class="my-4 normal-case" href="data-fingerprinting.html">Learn more</v-btn>
        </div>
      </v-card>
      <v-card elevation="2" class="xl:p-2 2xl:p-2 text-center flex flex-col justify-between">        
        <div>
          <img src="img/icons/home/data_unification.svg" alt="" class="h-20 mx-auto xs:my-2 xl:my-4 2xl:my-4" />
          <h1 class="xs:text-xl xl:text-lg 2xl:text-lg font-bold text-gray-700">Data Unification</h1>
          <span class="block xs:text-base xs:px-4 xl:text-sm 2xl:text-sm font-normal text-gray-700 mt-2">Use of machine learning algorithms to automate and simplify ingestion, transformation and consumption of data</span>
        </div>
        <div>
          <v-btn elevation="2" color="primary" text class="my-4 normal-case" href="data-unification.html">Learn more</v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesSection'
}
</script>

<style lang="scss" scoped>

</style>