<template>
  <v-app>
    <v-app-bar
      fixed
      :color="scrollY > screenHeight ? 'black' : 'transparent'"
      dark
      flat
      >
      <img src="/1logo_w.png" alt="" :style="{ height: '36px' }">
      <v-spacer />
      <v-btn rounded depressed color="primary">문의하기</v-btn>
    </v-app-bar>
   
    <v-main>
      <nuxt />
    </v-main>
    <!-- <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
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
      console.log('window.scrollY: ', window.scrollY)
      this.scrollY = window.scrollY
    }
  }
}
</script>
