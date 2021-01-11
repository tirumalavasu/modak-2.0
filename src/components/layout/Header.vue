<template>
  <div class="">    
    <v-app-bar
      app
      color="white"
      light      
      height="60px"
      class="xl:hidden 2xl:hidden"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <img src="img/logos/modak.svg" alt="Modak Logo" class="h-8" />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list>
        <v-list-item href="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-group
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>Solutions</v-list-item-title>
          </template>
          <v-list-item
              v-for="([title, link], i) in solutions"
              :key="i"
              link
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
            </v-list-item>
          <v-list-group
            no-action
            sub-group
            class="sub-group"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Augmented Data Preparation</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="([title, link], i) in augmentedList"
              :key="i"
              link
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-group>

        <v-list-group
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>Product</v-list-item-title>
          </template>

          <v-list-item
              v-for="([title, link], i) in products"
              :key="i"
              link
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>Data Lab</v-list-item-title>
          </template>

          <v-list-item
              v-for="([title, link], i) in dataLabList"
              :key="i"
              link
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>Resources</v-list-item-title>
          </template>

          <v-list-item
              v-for="([title, link], i) in resources"
              :key="i"
              link
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>Careers</v-list-item-title>
          </template>

          <v-list-item
              v-for="([title, link], i) in careers"
              :key="i"
              link
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>About us</v-list-item-title>
          </template>

          <v-list-item
              v-for="([title, link], i) in aboutList"
              :key="i"
              link
              :href="link"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="white"
      light      
      height="90px"
      class="block xs:hidden sm:hidden md:hidden lg:hidden"
    >
      <div class="flex flex-row max-w-7xl mx-auto items-center">
        <router-link to="/"><img src="img/logos/modak.svg" alt="Modak Logo" class="h-12" /></router-link>

        <v-spacer></v-spacer>

        <ul class="mega-menu flex flex-row justify-space-around">
          <li>
            <a href="">Solutions</a>
              <div class="dropdown-menu grid grid-cols-2 gap-16 p-8">
                <ul>
                  <li><router-link to="/managed-dataops">Managed DataOps</router-link></li>
                  <li><router-link to="/data-fabric">Data Fabric</router-link></li>
                  <li><router-link to="/metaprogramming">Metaprogramming</router-link></li>
                  <li><router-link to="/governed-datalake">Governed Data Lake</router-link></li>
                  <li><router-link to="/data-visualisation">Data Visualization</router-link></li>
                  <li><router-link to="/data-migration">Data Migration</router-link></li>
                  <li><router-link to="/hadoop-managed-services">Hadoop Managed Services</router-link></li>
                </ul>
                <ul>
                  <li><a class="text-lg font-bold">Augmented Data Preparation</a></li>
                  <li><router-link to="/smart-data-discovery">Smart Data Discovery</router-link></li>
                  <li><router-link to="/automated-data-ingestion">Automated Ingestion</router-link></li>
                  <li><router-link to="/data-unification">Data Unification</router-link></li>
                  <li><router-link to="/data-fingerprinting">Fingerprinting</router-link></li>
                  <li><router-link to="/data-anonymization">Anonymization</router-link></li>
                </ul>
              </div>
          </li>
          <li>
            <a href="">Product</a>
              <div class="dropdown-menu grid grid-cols-2 gap-16 p-8">
                <ul class="">
                  <li><router-link to="/nabu">nabu&trade;</router-link></li>
                </ul>
              </div>
          </li>
          <li>
            <a href="">Data Lab</a>
              <div class="dropdown-menu grid grid-cols-2 gap-16 p-8">
                <ul class="">
                  <li><router-link to="/Botworks">BOTWorks</router-link></li>
                </ul>
              </div>
          </li>
          <li>
            <a href="">Resources</a>
              <div class="dropdown-menu grid grid-cols-2 gap-16 p-8">
                <ul class="">
                  <li><router-link to="/FHIR">FHIR</router-link></li>
                  <li><router-link to="/DataOps">DATAOPS</router-link></li>
                  <li><router-link to="/genome-studies">Genome Studies</router-link></li>
                  <li><router-link to="/pharma-research">Pharma R&D</router-link></li>
                  <li><router-link to="/pharma-firms">Pharma Firms</router-link></li>
                  <li><router-link to="/work-from-home">Work From Home</router-link></li>
                </ul>
              </div>
          </li>
          <li>
            <a href="">Careers</a>
              <div class="dropdown-menu grid grid-cols-2 gap-16 p-8">
                <ul class="">
                  <li><router-link to="/work-culture">Work Culture</router-link></li>
                  <li><router-link to="/life-modak">Life@Modak</router-link></li>
                  <li><router-link to="/employee-views">Employee views</router-link></li>
                  <li><router-link to="/current-openings">Current openings</router-link></li>
                </ul>
              </div>
          </li>
          <li>
            <a href="">About us</a>
              <div class="dropdown-menu grid grid-cols-2 gap-16 p-8">
                <ul class="">
                  <li><router-link to="/about">About Modak</router-link></li>
                  <li><router-link to="/key-differentiator">Key Differentiator</router-link></li>
                  <li><router-link to="/global-presence">Global Presence</router-link></li>
                </ul>
              </div>
          </li>
        </ul>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        drawer: false,
        group: null,
        items: [
          { title: 'Managed DataOps' },
          { title: '' },
          { title: 'Click Me' },
          { title: 'Click Me 2' },
        ],
        solutions: [
          ['Managed DataOps', 'managed-dataops'],
          ['Data Fabric', 'data-fabric'],
          ['Metaprogramming', 'Metaprogramming'],
          ['Governed Data Lake', 'governed-datalake'],
          ['Data Visualization', 'data-visualisation'],
          ['Data Migration', 'data-migration'],
          ['Hadoop Managed Services', 'hadoop-managed-services'],
        ],
        augmentedList: [
          ['Smart Data Discovery', 'smart-data-discovery'],
          ['Automated Ingestion', 'automated-data-ingestion'],
          ['Data Unification', 'data-unification'],
          ['Fingerprinting', 'data-fingerprinting'],
          ['Anonymization', 'data-anonymization']
        ],
        products: [
          ['nabu™', 'nabu']
        ],
        dataLabList: [
          ['BOTWorks', 'Botworks']
        ],
        resources: [
          ['FHIR', 'FHIR'],
          ['DATAOPS', 'DataOps'],
          ['Genome Studies', 'genome-studies'],
          ['Pharma R&D', 'pharma-research'],
          ['Pharma Firms', 'pharma-firms'],
          ['Work From Home', 'work-from-home']
        ],
        careers: [
          ['Work Culture', 'work-culture'],
          ['Life@Modak', 'life-modak'],
          ['Employee views', 'employee-views'],
          ['Current openings', 'current-openings']
        ],
        aboutList: [
          ['About Modak', 'about'],
          ['Key Differentiator', 'key-differentiator'],
          ['Global Presence', 'global-presence']
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>