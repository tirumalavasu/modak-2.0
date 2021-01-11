<template>
  <div class="max-w-3xl mx-auto my-16">
    <div class="block flex justify-end">
      <a href="assets/DATAOPS DOC_PDF_compressed.pdf" download=""><v-btn color="primary" class="mb-4" download="">Download pdf</v-btn></a>
    </div>
    <h1 class="text-4xl font-extrabold mb-8">DataOps, a growing trend in data engineering</h1>
    <v-img src="img/backgrounds/DataOps_agility_speed.jpg" height="360"></v-img>
    <h2 class="border-l-4 border-blue-500 pl-4 my-8 text-xl text-gray-900 font-bold italic">
      From the need to deliver quality data quickly and continuously, emerges DataOps, an approach that promises agile data operations for analytics. Speed, agility, automation, and quality is what it aims to achieve the highest degree.
    </h2>
    <p class="my-4 text-xl text-gray-900">
      With the exponential increase in data volumes at enterprises in recent years, there has been an ever-growing need to leverage data and to streamline it faster for the decision-making process. For enterprises to adapt to this new normal and to become data-driven, the teams that consume and produce data must collaborate effectively and use data at each step of the process of making every business decision, regardless of whether the decision is big or small. To achieve robust and rapid insights, there should be a continuous and real-time delivery of data for analytics.
    </p>
    <p class="my-4 text-xl text-gray-900">
      A faster and agile approach for the delivery of analytic-ready data requires accelerated data pipelines that can ingest, test and deploy data rapidly and can handle huge volumes of data quickly and continuously. DataOps is a principles-based practice that aims to achieve faster delivery of reliable, self-service data. The approach needs continuous monitoring of inputs, outputs and business logic. Speed, agility, metadata, automation and self-service culture are some of the building blocks of DataOps.
    </p>
    <h1 class="font-bold text-2xl">Self-Service and Collaboration</h1>
    <p class="my-4 text-xl text-gray-900">Self-service data is a form of Business Intelligence (BI), in which line-of-business professionals are enabled and encouraged to perform queries and generate reports in close collaboration with the data analytics team.</p>
    <p class="my-4 text-xl text-gray-900">When business users are empowered to explore data and test their hypothesis without much IT help, the practice naturally internalizes data in the decision-making process. Business users can become innovative and propose new use cases for analytics. New analytics can be created quickly with the proposed use cases and businesses can see value in data analytics projects. This DataOps practice can quickly lead to incredible agility among data teams within organizations. The practice improves teamwork.</p>
    <p class="my-4 text-xl text-gray-900">So, this shared mindset is important. However, for all this to be practical, the underlying data engineering process should be robust and agile enough to provide analytics-ready data quickly and continuously to its data consumers.</p>
    <v-img src="img/backgrounds/data_market_place_consumption.png" height="360" class="my-8"></v-img>
    <h1 class="font-bold text-2xl">Metadata is the bedrock</h1>
    <p class="my-4 text-xl text-gray-900">Such faster and continuous delivery of quality data can be achieved with the support of metadata. Collecting extensive metadata is the key practice of DataOps. Maintaining consistency in metadata and capturing schema drifts is crucial. Metadata gives information about data. Once the collection process begins, it empowers data engineers to automate data processes and implementation of thousands of test cases in data pipelines. Continuous automated testing will improve data quality, and thereby trust in data analytics. The collection of descriptive, administrative, and structural metadata would give us the essential information required to implement automation.</p>
    <h1 class="font-bold text-2xl">Automation to highest degree</h1>
    <p class="my-4 text-xl text-gray-900">DataOps is not feasible without automation. Highly automated and augmented data pipelines will only deliver faster data enablement. As data pipelines grow in number and size, the organizations need to set some standards to govern data at various stages in the pipelines. Standardization and repeatability are the core components of automation. The organization that implements automation is more impregnable to schema drifts and changes in data.</p>
    <h1 class="font-bold text-2xl">Building trust in data</h1>
    <p class="my-4 text-xl text-gray-900">Automated continuous testing is essential in building trust in data. Thousands of test cases can be generated automatically for data pipelines and can be used to test data continuously. The tests are simple and addictive. Whenever a change is made to data pipelines, test cases are created in DataOps. These tests are the early warning indicators of data quality issues.</p>
    <p class="my-4 text-xl text-gray-900">As the complexity of data pipelines rises, the interconnections in the data elements also become complex and the pipelines are prone to more errors. Automated continuous testing can help boost confidence in data.</p>
    <p class="my-4 text-xl text-gray-900">Further, statistical process controls to ensure continuous monitoring of the data pipelines by analyzing the output data. Any variations in data outputs can be identified, studied and appropriate action can be taken to resolve the issues.</p>
    <p class="border-l-4 border-blue-500 pl-4 my-8 text-xl text-gray-900">All these practices of DataOps, if applied to the fullest, can reduce cycle time drastically allowing the business users to dive deep into the data without any waiting time. It also encourages a collaborative working environment and promotes agility.</p>
  </div>
</template>

<script>
export default {
  name: 'DataOps'
};
</script>

<style lang="scss" scoped>
</style>