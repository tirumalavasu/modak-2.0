<template>
  <div>
    <Banner img="img/backgrounds/anonymisation-3.jpg" title="Anonymization" subTitle="Sanitizing information to comply with data privacy standards" />
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="my-4 p-8">
        <h1 class="text-2xl font-bold text-gray-900">
          Data Anonymization
        </h1>
        <h3 class="text-base font-normal text-gray-900 mt-2">The goal of the anonymization routines is to anonymize and de-identify the protected health information in the clinical trial datasets based on the rules defined by HIPPA and by compliance legal department of the company.</h3>
      </v-card>
    </div>
    <div class="max-w-7xl mx-auto my-16">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">
        Use Machine Learning to Automate Anonymization
      </h1>    
      <v-img src="img/backgrounds/ML-Anonymize.png"></v-img>
      <p class="w-full text-center">The machine identifies and applies the last applied rules bypassing data classification and user review.</p>
    </div>
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="p-8 my-4">
        <h1 class="text-2xl font-bold text-gray-700 my-2 text-left">Data Anonymization</h1>
        <h3 class="text-base font-normal text-gray-900">
          We make use of “NLP POS” recognition and named entity extractions to annotate the unstructured data.
        </h3>
        <ul class="list-unstyled">
          <li><v-icon>mdi-check</v-icon> NLP POS Recognition</li>
          <li><v-icon>mdi-check</v-icon> Named Entity Extractions</li>
          <li><v-icon>mdi-check</v-icon> Master Data Elements</li>
        </ul>
      </v-card>
    </div>    
    <div class="max-w-7xl mx-auto my-16">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">
        Machine Learning Training for Document/Sentence Classification
      </h1>    
      <v-img src="img/backgrounds/Unstructured-anonymy.png"></v-img>
      <p class="w-full text-center">The machine identifies and applies the last applied rules bypassing data classification and user review.</p>
    </div>
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="p-8">        
        <h1 class="text-2xl font-bold text-gray-700 mb-4 text-left">How is Anonymization useful?</h1>
        <h3 class="text-base font-normal text-gray-900 my-4">
          In this process, the comparison of column values is done across different tables and a hash code against the column is generated. Irrespective of what the column name is labeled across different tables, if the column shares the same data, then a score will be generated from 0 to 1 based on how much data is matched. Then, the mapping of the data will be done and the data will be merged. This score will be generated using an algorithm.
        </h3>
        <h3 class="text-base font-normal text-gray-900">
          For example, if there are different tables where the column is labeled as “col”,” column”,”col1”, but the data which is shared in the columns are same, then the data is checked. A hash will be generated against that column, a score between 0 to 1 is generated and then the mapping of the data takes place by merging the columns.
        </h3>
      </v-card>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner'
export default {
  name: 'Anonamization',
  components: {
    Banner
  }
};
</script>

<style lang="scss" scoped>
</style>