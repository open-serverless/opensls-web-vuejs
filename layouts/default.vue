<template>
  <v-app>
    <v-app-bar
      fixed
      :color="scrollY > screenHeight ? 'black' : 'transparent'"
      dark
      flat
      >
      <nuxt-link to="/">
        <img :src="`${s3AssetsBucket}/images/logo_w.png`" alt="" :style="{ height: '36px' }">
      </nuxt-link>
      <v-spacer />
      <v-btn class="font-weight-black" rounded depressed color="primary" target="_blank" :href="devLink">개발 문의하기</v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer dark>
      <span>&copy; 2018 Timecoach Inc</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      devLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf2bjggCRVhqquaA8Czc3aqUuO_9Z3ai0V6X22tUTT4Az5_3g/viewform?usp=sf_link',
      title: 'TEAM OPEN SERVERLESS',
      scrollY: 0,
      screenHeight: 0
    }
  },
  created () {
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
    this.screenHeight = window.innerHeight
  },
  methods: {
    handleScroll (event) {
      this.scrollY = window.scrollY
    }
  }
}
</script>
