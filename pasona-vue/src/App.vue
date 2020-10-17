<template>
  <div>
    <HeaderTwo v-if="currentUrl == '/web-hosting'"></HeaderTwo>
    <HeaderThree v-else-if="currentUrl == '/machine-learning'"></HeaderThree>
    <HeaderFour v-else-if="currentUrl == '/digital-agency'"></HeaderFour>
    <HeaderFour v-else-if="currentUrl == '/digital-agency'"></HeaderFour>
    <div v-else-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <Header v-else></Header>
    <PreLoader v-if="isLoading" />
    <router-view></router-view>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <Footer v-else></Footer>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import HeaderTwo from './components/layout/HeaderTwo';
import HeaderThree from './components/layout/HeaderThree';
import HeaderFour from './components/layout/HeaderFour';
import Footer from './components/layout/Footer';
import PreLoader from './components/layout/PreLoader';
export default {
  name: 'app',
  components: {
    Header, HeaderTwo, HeaderThree, HeaderFour, Footer, PreLoader
  },

  data() {
    return {
      isLoading: true,
      currentUrl: ''
    }
  },

  watch: {
    '$route'(pathUrl){
      this.currentUrl = pathUrl.path;
      this.isLoading = true;
      setTimeout(() => { this.isLoading = false }, 1500);
    }
  },

  mounted() {
    this.currentUrl = window.location.pathname;
    setTimeout(() => {
      this.isLoading = false
    }, 2000);
  }
}
</script>
