<template>
  <div>
    <Banner img="img/backgrounds/genomebg.jpg" title="Genome studies" subTitle="Genome wide association study is an approach that involves rapidly scanning markers across complete sets of DNA or genomes of numerous people to find differences associated to a particular type of disease. Once new differences are identified, they are analysed by the researchers and cure for those variations are found" />
    <FeatureCard :feature="feature1" />
    <FeatureCard :feature="feature2" />
    <FeatureCard :feature="feature3" />
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
        img: 'img/backgrounds/genetics.jpg',
        dir: 'left',
        title: 'High Performance Genome Analysis at Scale',
        description: '<h3 class="text-xl font-bold">GWAS (Genome Wide Association Study)</h3><br/><br/>This study helps to develop customized medicines depending on various factors that affect the subject, thereby reducing the risk of side effects and increasing the effectiveness.',
        items: []
      },
      feature2: {
        img: 'img/backgrounds/genetics2.jpg',
        dir: 'right',
        title: 'How is the study done?',
        description: 'The blood samples of two similar bodies are taken, of which one is affected with disease and the other is not. Then, the DNA of the subjects are collected from the blood samples and further study of the structures are done by trying to find the SNP’s, then those gaps are studied thoroughly, and a solution is found.<br/><br/>This process requires less number of human resources. Hence, it is cost effective. Here, precision is the key to success. Even a small error in calculation can cost lives.',
        items: []
      },
      feature3: {
        img: 'img/backgrounds/dna.jpg',
        dir: 'left',
        title: 'Our Solution',
        description: 'We use CUDA libraries to leverage GPU acceleration and harness the enormous computing power of Nvidia’s graphics processing units. Our tools are built to run on a GPU cluster and try to exploit the massively parallel architecture of GPUs. OpenMPI and Nvidia’s NCCL, NVBLAS libraries have been used to achieve this feat. We also support OpenCL platform using ArrayFire’s OpenCL at backend.',
        items: []
      }
    }    
  }
};
</script>

<style lang="scss" scoped>
</style>