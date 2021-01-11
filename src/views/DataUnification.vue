<template>
  <div>
    <Banner img="img/backgrounds/bg-unify.jpg" title="Data unification" subTitle="UNIFY >> FINGERPRINT >> CLASSIFY" />
    <TextCard text="Modak's unification process combines human expertise, machine learning algorithms, data science and in-house developed fingerprinting technology" />
    <FeatureCard :feature="feature1" />
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="my-4 p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Problem</h3>
        <h3 class="text-base font-normal text-gray-900">
          The problem of unifying 3 different data standards with 10 records each doesn’t require a tool. Instead, the user can utilize a whiteboard and a pen to solve the issue. When it comes to five different data standards with 1 lakh rows, traditional ETL approach can be used. But, if the problem is to solve tens or hundreds of separate data sources with 5000+ mapping rules, 3000+ variations in column names and billions of records in each source, then the traditional ETL solution is not feasible.
        </h3>
      </v-card>
    </div>
    <FeatureCard :feature="feature2" />
    <div class="max-w-7xl mx-auto my-16">
      <v-card class="my-4 p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Purpose</h3>
        <h3 class="text-base font-normal text-gray-900">
          While handling large amounts of data located at various locations (databases, schemas), it is better to unify all information into one table and perform the next steps of unification, rather than considering single table at a time. This feature allows the user to unify the list of tables using column similarity and fingerprinting rules. The user can define the cluster for the column, or he can even change the unification rule. The user can also cast the datatype and transform the unification table into the required format.
        </h3>
      </v-card>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner'
import TextCard from '@/components/common/TextCard'
import FeatureCard from '@/components/common/FeatureCard'
export default {
  name: 'ManagedDataops',
  components: {
    Banner,
    TextCard,
    FeatureCard
  },
  data () {
    return {
      feature1: {
        img: 'img/backgrounds/data-unification.jpg',
        dir: 'left',
        title: 'Data unification',
        description: 'Data unification is basically the process of ingesting, transforming, mapping, deduplicating and exporting data from multiple sources. Two types of methodologies are routinely used to accomplish this task — Extract, Transform and Load (ETL), and Master Data Management (MDM). MDM is basically a method used to define and manage the critical sets of data of an organization in order to provide data integration and a single point of reference. The data that is mastered by the tool may include reference data, the set of permissible values, and the analytical data that supports decision making.',
        items: []
      },
      feature2: {
        img: 'img/backgrounds/Unification.svg',
        dir: 'right',
        title: 'Solution',
        description: 'Let’s consider a real-time scenario. There are 3 data sources which has the same data “study id” associated with each source but the column name for the data associated are different in each source. The challenge is to unify the data and produce a unified target data. Modak Analytics’s product nabu uses a Machine Learning algorithm to automate the process of grouping similar variables since many internal standards and the substantial number of studies and datasets are involved. This involves an initial process of making the system learn as a result of which the effort of mapping is reduced when we execute at a large scale. (across 2600 studies as in the challenge). Machine learning capability of nabu helps the user to understand the data associated with the different sources and generates a fingerprint value against each column and unifies the data efficiently. To unify the above data, data scientists initially had no platform and hence took 1,000 hours to process 5,000 queries which is now currently reduced by 80-90% using nabu and the job is finished in a single day.',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>