import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Anonymization from '../views/Anonymization.vue'
import AutomatedIngestion from '../views/AutomatedIngestion.vue'
import BotWorks from '../views/BotWorks.vue'
import ContactUs from '../views/ContactUs.vue'
import CurrentOpenings from '../views/CurrentOpenings.vue'
import DataFabric from '../views/DataFabric.vue'
import DataMigration from '../views/DataMigration.vue'
import DataOps from '../views/DataOps.vue'
import DataUnification from '../views/DataUnification.vue'
import DataVisualisation from '../views/DataVisualisation.vue'
import EmployeeViews from '../views/EmployeeViews.vue'
import FHIR from '../views/FHIR.vue'
import Fingerprinting from '../views/Fingerprinting.vue'
import GenomeStudies from '../views/GenomeStudies.vue'
import GlobalPresence from '../views/GlobalPresence.vue'
import GovernedDatalake from '../views/GovernedDatalake.vue'
import HadoopManagedServices from '../views/HadoopManagedServices.vue'
import KeyDifferentiator from '../views/KeyDifferentiator.vue'
import LifeAtModak from '../views/LifeAtModak.vue'
import ManagedDataops from '../views/ManagedDataops.vue'
import Metaprogramming from '../views/Metaprogramming.vue'
import Nabu from '../views/Nabu.vue'
import PharmaFirms from '../views/PharmaFirms.vue'
import PharmaResearch from '../views/PharmaResearch.vue'
import RequestDemo from '../views/RequestDemo.vue'
import SmartDataDiscovery from '../views/SmartDataDiscovery.vue'
import WorkCulture from '../views/WorkCulture.vue'
import WorkFromHome from '../views/WorkFromHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/data-anonymization',
    name: 'Anonymization',
    component: Anonymization
  },
  {
    path: '/automated-data-ingestion',
    name: 'AutomatedIngestion',
    component: AutomatedIngestion
  },
  {
    path: '/Botworks',
    name: 'BotWorks',
    component: BotWorks
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/current-openings',
    name: 'CurrentOpenings',
    component: CurrentOpenings
  },
  {
    path: '/data-fabric',
    name: 'DataFabric',
    component: DataFabric
  },
  {
    path: '/data-migration',
    name: 'DataMigration',
    component: DataMigration
  },
  {
    path: '/DataOps',
    name: 'DataOps',
    component: DataOps
  },
  {
    path: '/data-unification',
    name: 'DataUnification',
    component: DataUnification
  },
  {
    path: '/data-visualisation',
    name: 'DataVisualisation',
    component: DataVisualisation
  },
  {
    path: '/employee-views',
    name: 'EmployeeViews',
    component: EmployeeViews
  },
  {
    path: '/FHIR',
    name: 'FHIR',
    component: FHIR
  },
  {
    path: '/data-fingerprinting',
    name: 'Fingerprinting',
    component: Fingerprinting
  },
  {
    path: '/genome-studies',
    name: 'GenomeStudies',
    component: GenomeStudies
  },
  {
    path: '/global-presence',
    name: 'GlobalPresence',
    component: GlobalPresence
  },
  {
    path: '/governed-datalake',
    name: 'GovernedDatalake',
    component: GovernedDatalake
  },
  {
    path: '/hadoop-managed-services',
    name: 'HadoopManagedServices',
    component: HadoopManagedServices
  },
  {
    path: '/key-differentiator',
    name: 'KeyDifferentiator',
    component: KeyDifferentiator
  },
  {
    path: '/life-modak',
    name: 'LifeAtModak',
    component: LifeAtModak
  },
  {
    path: '/managed-dataops',
    name: 'ManagedDataops',
    component: ManagedDataops
  },
  {
    path: '/metaprogramming',
    name: 'Metaprogramming',
    component: Metaprogramming
  },
  {
    path: '/nabu',
    name: 'Nabu',
    component: Nabu
  },
  {
    path: '/pharma-firms',
    name: 'PharmaFirms',
    component: PharmaFirms
  },
  {
    path: '/pharma-research',
    name: 'PharmaResearch',
    component: PharmaResearch
  },
  {
    path: '/request-demo',
    name: 'RequestDemo',
    component: RequestDemo
  },
  {
    path: '/smart-data-discovery',
    name: 'SmartDataDiscovery',
    component: SmartDataDiscovery
  },
  {
    path: '/work-culture',
    name: 'WorkCulture',
    component: WorkCulture
  },
  {
    path: '/work-from-home',
    name: 'WorkFromHome',
    component: WorkFromHome
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
