<template>
  <div>
    <Banner img="img/backgrounds/pharmabg.jpg" title="Pharma R&D" subTitle="Pharma companies use science-based innovations, analytical tools and services to give out answers to some of the challenging healthcare problems" />
    <FeatureCard :feature="feature1" />
    <div class="max-w-7xl mx-auto grid grid-cols-2 gap-16 my-24 items-center">
      <div class="flex flex-col">
        Modak developed a system for integrating new studies that has already been standardized to SDTM (Study Data Tabulation Model) format. This helps to scale the larger number of legacy studies that could not be addressed and where ETL and statistical programming could not keep up. Modak combined machine learning and expert analytical tools to map legacy clinical trials to the master schema by :
            <ul>
              <li class="my-2"><v-icon>mdi-check</v-icon> Automatically ingesting thousands of study datasets and associated metadata from SAS binary files</li>
              <li class="my-2"><v-icon>mdi-check</v-icon> Applying machine learning-guided mapping of source datasets to the custom standard implementation</li>
              <li class="my-2"><v-icon>mdi-check</v-icon> Providing a point-and-click user interface for simple and complex transformations (e.g. pivoting)</li>
              <li class="my-2"><v-icon>mdi-check</v-icon> Automatically generating documentation of all the mapping and transformations performed in the system</li>
              <li class="my-2"><v-icon>mdi-check</v-icon> Plugging data into an existing data loading pipeline after it had been aligned to a standard schema</li>
            </ul>
        Modak’s Novel approach of preparing data for downstream analytics enables scientists to access more data to make better, faster and accurate decisions. Moreover, it enables biopharmaceutical organizations to finally see a return on their enormous data investment.
      </div>
      <v-img src='img/backgrounds/pharmard2.jpg' cover max-height="360"></v-img>
    </div>
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
        img: 'img/backgrounds/pharmard.jpg',
        dir: 'left',
        title: '',
        description: 'They help people live a long and healthy life. One such Fortune 500 pharma company wanted to analyse the biomarker data and unmined clinical trial. Modak Analytics, along with a consultant team, undertook this transformation. There were many challenge:<ul><li class="my-4">1. Large amount of legacy trial data – The biopharmaceutical company had thousands of legacy datasets ranging from past 10 years to a constantly-growing set of new clinical trial data, to be integrated.</li><li>2. No schema alignment across the trial data – Each study had a unique set of datasets and variables which varied in therapeutic area and trial type. In addition, internal data standards had changed over time and had different implementations.</li></ul>',
        items: []
      },
      feature2: {
        img: 'img/backgrounds/pharmard2.jpg',
        dir: 'right',
        title: 'Modak\'s solution',
        description: `
          Modak developed a system for integrating new studies that has already been standardized to SDTM (Study Data Tabulation Model) format. This helps to scale the larger number of legacy studies that could not be addressed and where ETL and statistical programming could not keep up. Modak combined machine learning and expert analytical tools to map legacy clinical trials to the master schema by :
          <ul>
            <li><v-icon>mdi-check</v-icon> Automatically ingesting thousands of study datasets and associated metadata from SAS binary files</li>
            <li><v-icon>mdi-check</v-icon> Applying machine learning-guided mapping of source datasets to the custom standard implementation</li>
            <li><v-icon>mdi-check</v-icon> Providing a point-and-click user interface for simple and complex transformations (e.g. pivoting)</li>
            <li><v-icon>mdi-check</v-icon> Automatically generating documentation of all the mapping and transformations performed in the system</li>
            <li><v-icon>mdi-check</v-icon> Plugging data into an existing data loading pipeline after it had been aligned to a standard schema</li>
          </ul>
          Modak’s Novel approach of preparing data for downstream analytics enables scientists to access more data to make better, faster and accurate decisions. Moreover, it enables biopharmaceutical organizations to finally see a return on their enormous data investment.
        `,
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>