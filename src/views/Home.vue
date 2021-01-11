<template>
  <div class="home xs:-mt-10 sm:-mt-10 md:-mt-10 lg:-mt-10">
    <HomeBanner />
    <CertSection />
    <Achievments />
    <DemoSection />
    <FeaturesSection />
    <DataAutomation />
    <Clients />
    <TechStack />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '@/components/home/HomeBanner'
import CertSection from '@/components/home/CertSection'
import Achievments from '@/components/home/Achievments'
import FeaturesSection from '@/components/home/FeaturesSection'
import DemoSection from '@/components/home/DemoSection'
import DataAutomation from '@/components/home/DataAutomation'
import Clients from '@/components/home/Clients'
import TechStack from '@/components/home/TechStack'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    CertSection,
    Achievments,
    FeaturesSection,
    DemoSection,
    DataAutomation,
    Clients,
    TechStack
  },
  // mounted () {
  //   if (this.$router.currentRoute.fullPath !== '/') {
  //     console.log(this)
  //   }
  // }
}
</script>

<style>
.home .v-responsive__content {
  display: flex;
  flex-grow: 1;
}
</style>
