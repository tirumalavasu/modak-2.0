<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },  
  data: () => ({
    //
  }),
};
</script>

<style>
@font-face {
  font-family: 'Avenir Next LT Pro Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Regular'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-Regular.woff) format('woff');
}
@font-face {
  font-family: 'Avenir Next LT Pro Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Regular'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-Regular.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Condensed';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Condensed'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-Cn.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Condensed Italic';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Condensed Italic'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-CnIt.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Italic';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Italic'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-It.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Ultra Light';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Ultra Light'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-UltLt.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Ultra Light Italic';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Ultra Light Italic'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-UltLtIt.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Ultra Light Condensed';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Ultra Light Condensed'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-UltLtCn.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Ultra Light Condensed Italic';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Ultra Light Condensed Italic'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-UltLtCnIt.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Medium Condensed';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Medium Condensed'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-MediumCn.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Medium Italic';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Medium Italic'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-MediumIt.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Medium Condensed Italic';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Medium Condensed Italic'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-MediumCnIt.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Demi';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Demi'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-Demi.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Demi Condensed';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Demi Condensed'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-DemiCn.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Demi Condensed Italic';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Demi Condensed Italic'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-DemiCnIt.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Demi Italic';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Demi Italic'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-DemiIt.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Bold';
  font-style: normal;
  font-weight: bold;
  src: local('Avenir Next LT Pro Bold'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-Bold.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Bold Condensed';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Bold Condensed'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-BoldCn.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Bold Condensed Italic';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Bold Condensed Italic'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-BoldCnIt.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Heavy';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Heavy'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-Heavy.woff) format('woff');
}
  
@font-face {
  font-family: 'Avenir Next LT Pro Heavy Italic';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Heavy Italic'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-HeavyIt.woff) format('woff');
}
    

@font-face {
  font-family: 'Avenir Next LT Pro Heavy Condensed';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Heavy Condensed'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-HeavyCn.woff) format('woff');
}
    

@font-face {
  font-family: 'Avenir Next LT Pro Heavy Condensed Italic';
  font-style: normal;
  font-weight: normal;
  src: local('Avenir Next LT Pro Heavy Condensed Italic'), url(./fonts/avenir-next-lt-pro/AvenirNextLTPro-HeavyCnIt.woff) format('woff');
}
</style>
