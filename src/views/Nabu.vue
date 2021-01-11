<template>
  <div>
    <v-img src="img/backgrounds/Banner-nebo.jpg" cover :height="bgHeight">
      <div
        class="max-w-7xl mx-auto flex flex-col justify-start self-center pt-16"
      >
        <h1 class="text-4xl font-light text-white align-middle mb-4">
          Modak NabuTM accelerates the journey<br />
          from data to business value
        </h1>
        <h4 class="text-lg font-light text-white">
          “Featured in Gartner’s Market Guide for Data Preparation Tools, 2020”
        </h4>
        <p class="text-xl font-light mt-8 text-white my-8">
          80% time of data scientists is taken up in data preparation.
          <br />Modak NabuTM accelerates data preparation by 4X, at petabyte
          scale,<br />
          by automating repetitive tasks, with active metadata services.
        </p>
      </div>
    </v-img>
    <div class="bg-gray-100 py-16">
      <!-- <h1 class="text-center mx-auto text-3xl font-extrabold mb-8">Product – Modak Nabu™</h1> -->
      <div class="max-w-7xl mx-auto grid grid-cols-5 gap-4 nabu-features">
        <v-card elevation="2" class="p-0">
          <h3 class="font-bold text-lg bg-blue-500 text-white p-4 text-center">
            Active Metadata Catalog
          </h3>
          <v-img
            src="img/icons/nabu/datacatalof.svg"
            width="90"
            class="mx-auto my-8"
          ></v-img>
          <p class="text-base my-2 p-4">
            Accelerate data preparation with metadata including technical,
            operational, social and business metadata
          </p>
        </v-card>
        <v-card elevation="2" class="p-0">
          <h3 class="font-bold text-lg bg-blue-500 text-white p-4 text-center">
            Automated Ingestion Pipelines
          </h3>
          <v-img
            src="img/icons/nabu/ingestion.svg"
            width="90"
            class="mx-auto my-8"
          ></v-img>
          <p class="text-base my-2 p-4">
            Automate building ingestion pipelines in minutes, using active
            metadata.
          </p>
        </v-card>
        <v-card elevation="2" class="p-0">
          <h3 class="font-bold text-lg bg-blue-500 text-white p-4 text-center">
            Search and Exploration
          </h3>
          <v-img
            src="img/icons/nabu/datadiscovery.svg"
            width="90"
            class="mx-auto my-8"
          ></v-img>
          <p class="text-base my-2 p-4">
            Intuitive search and exploration capabilities to discover data,
            explore relationships and assess quality
          </p>
        </v-card>
        <v-card elevation="2" class="p-0">
          <h3 class="font-bold text-lg bg-blue-500 text-white p-4 text-center">
            Data Standardization
          </h3>
          <v-img
            src="img/icons/nabu/mappingandstandardizaion.svg"
            width="90"
            class="mx-auto my-8"
          ></v-img>
          <p class="text-base my-2 p-4">
            Standardize hundreds of data formats across thousands of datasets in
            days, using Modak’s data fingerprinting technology
          </p>
        </v-card>
        <v-card elevation="2" class="p-0">
          <h3 class="font-bold text-lg bg-blue-500 text-white p-4 text-center">
            Enterprise Ready
          </h3>
          <v-icon class="mx-auto my-6 shield">mdi-shield-check</v-icon>
          <p class="text-base my-2 p-4">
            Comply with data privacy, governance and regulatory requirements
            with role based access control, data anonymization, data lineage and
            audit trails.
          </p>
        </v-card>
      </div>
    </div>
    <div>
      <h1 class="text-center mx-auto text-3xl font-extrabold mt-8">
        How does Nabu help you?
      </h1>
      <div
        class="max-w-3xl mx-auto my-16 grid grid-cols-3 grid-rows-2 gap-4 nabu-features"
      >
        <v-card elevation="2" class="p-0">
          <img
            class="mx-auto h-24 w-auto"
            src="https://blog.idatainc.com/hs-fs/hubfs/ICO-Icon/Icons_10%20Executive-Manager.png?width=240&name=Icons_10%20Executive-Manager.png"
            alt="Chief Data Officer"
          />
          <h2 class="text-center text-xl font-extrabold text-gray-900">
            Chief Data Officer
          </h2>
          <p class="p-4 text-center text-sm text-gray-600">
            Democratize data access to empower citizen data scientists.
          </p>
        </v-card>
        <v-card elevation="2" class="p-0">
          <img
            class="mx-auto h-24 w-auto"
            src="https://blog.idatainc.com/hs-fs/hubfs/ICO-Icon/Icons_10%20Executive-Manager.png?width=240&name=Icons_10%20Executive-Manager.png"
            alt="Chief Data Officer"
          />
          <h2 class="text-center text-xl font-extrabold text-gray-900">
            Data Scientist
          </h2>
          <p class="p-4 text-center text-sm text-gray-600">
            Get access to datasets in minutes, not weeks.
          </p>
        </v-card>
        <v-card elevation="2" class="p-0">
          <img
            class="mx-auto h-24 w-auto"
            src="https://blog.idatainc.com/hs-fs/hubfs/ICO-Icon/Icons_10%20Executive-Manager.png?width=240&name=Icons_10%20Executive-Manager.png"
            alt="Chief Data Officer"
          />
          <h2 class="text-center text-xl font-extrabold text-gray-900">
            Data Engineer
          </h2>
          <p class="p-4 text-center text-sm text-gray-600">
            Quickly orchestrate data ingestion and curation, at petabyte scale
          </p>
        </v-card>
        <v-card elevation="2" class="p-0">
          <img
            class="mx-auto h-24 w-auto"
            src="https://blog.idatainc.com/hs-fs/hubfs/ICO-Icon/Icons_10%20Executive-Manager.png?width=240&name=Icons_10%20Executive-Manager.png"
            alt="Chief Data Officer"
          />
          <h2 class="text-center text-xl font-extrabold text-gray-900">
            Business Manager
          </h2>
          <p class="p-4 text-center text-sm text-gray-600">
            Find the most relevant datasets for a business case.
          </p>
        </v-card>
        <v-card elevation="2" class="p-0">
          <img
            class="mx-auto h-24 w-auto"
            src="https://blog.idatainc.com/hs-fs/hubfs/ICO-Icon/Icons_10%20Executive-Manager.png?width=240&name=Icons_10%20Executive-Manager.png"
            alt="Chief Data Officer"
          />
          <h2 class="text-center text-xl font-extrabold text-gray-900">
            Enterprise Architect
          </h2>
          <p class="p-4 text-center text-sm text-gray-600">
            Drive data standards and compliance across the organization.
          </p>
        </v-card>
        <v-card elevation="2" class="p-0">
          <img
            class="mx-auto h-24 w-auto"
            src="https://blog.idatainc.com/hs-fs/hubfs/ICO-Icon/Icons_10%20Executive-Manager.png?width=240&name=Icons_10%20Executive-Manager.png"
            alt="Chief Data Officer"
          />
          <h2 class="text-center text-xl font-extrabold text-gray-900">
            Data Analyst
          </h2>
          <p class="p-4 text-center text-sm text-gray-600">
            Explore datasets, understand relationships and assess quality.
          </p>
        </v-card>
      </div>
    </div>
    <div class="py-8 max-w-7xl mx-auto">
      <v-img src="img/backgrounds/augmenteddatapreparation_v2.svg" class=""></v-img>
    </div>    
  </div>
</template>

<script>
export default {
  name: "Nabu",
  computed: {
    bgHeight: function () {
      return this.$vuetify.breakpoint.height / 2;
    },
  },
};
</script>

<style lang="scss" scoped>
.shield {
  width: 100% !important;
  font-size: 5rem !important;
  color: #29abe2 !important;
}
.nabu-features h3 {
  height: 90px;
}
</style>