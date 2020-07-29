const colorsObj = require('vuetify/es5/util/colors')
const colors = colorsObj.default
const nodeEnv = process.env.NODE_ENV
console.log('nodeEnv: ', nodeEnv)
const nuxtEnv = {}
if (nodeEnv === 'prod') {
  Object.assign(nuxtEnv, {
    S3_ASSETS_BUCKET: 'https://opensls-web-vuejs-assets-prod.s3.ap-northeast-2.amazonaws.com',
    DOMAIN: 'https://open-serverless.com',
    API_GATEWAY: 'https://bh9ikbid75.execute-api.ap-northeast-2.amazonaws.com/prod'
  })
} else {
  Object.assign(nuxtEnv, {
    S3_ASSETS_BUCKET: 'https://opensls-web-vuejs-assets-dev.s3.ap-northeast-2.amazonaws.com',
    DOMAIN: 'https://6cbhcl0mo2.execute-api.ap-northeast-2.amazonaws.com/dev',
    API_GATEWAY: 'https://6cbhcl0mo2.execute-api.ap-northeast-2.amazonaws.com/dev'
  })
}
module.exports = {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  env: nuxtEnv,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + '서버리스 기반 외주 개발팀',
    title: '오픈 서버리스',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '오픈 서버리스는 서버리스, MSA 아키텍처 기반으로 웹서비스/모바일앱 개발이 필요한 스타트업 또는 기업을 위해 직접 개발, 컨설팅, 교육까지 다양한 방법으로 지원하고 있습니다.', },
      { hid: 'keyword', name: 'keyword', content: '스타트업, 외주개발, 앱개발, 개발 의뢰, 앱 개발, 외주개발사, 외주, 개발자, 서버리스, 마이크로서비스, 오픈서버리스, Developer, Startup, 벤처, Outsourcing, Outsource, 아웃소싱, CTO, 불면증, 위워크, 앱개발, 어플개발, 어플리케이션 개발, 개발, 웹앱, 웹앱 개발, 리액트 네이티브, 개발자, 아이폰, 안드로이드, 반응형웹, 모바일, 모바일 개발, 벤처, 이성훈, 멋쟁이 사자처럼, 레일스, 파이썬, 루비, 스타트업 개발, 창업, 앱 창업, 앱 외주, 어플 외주, 애플리케이션 외주', },
      { hid: 'author', name: 'author', content: '오픈서버리스', },
      { hid: 'og:title', property: 'og:title', content: '오픈 서버리스 - 서버리스 기반 외주 개발팀' },
      { hid: 'og:image', property: 'og:image', content: `${nuxtEnv.DOMAIN}/ogtagimg.png` },
      { hid: 'og:description', property: 'og:description', content: '오픈 서버리스는 서버리스, MSA 아키텍처 기반으로 웹서비스/모바일앱 개발이 필요한 스타트업 또는 기업을 위해 직접 개발, 컨설팅, 교육까지 다양한 방법으로 지원하고 있습니다.' },
      { hid: 'og:url', property: 'og:url', content: nuxtEnv.DOMAIN },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:title', name: 'twitter:title', content: '오픈 서버리스 - 서버리스 기반 외주 개발팀' },
      { hid: 'twitter:url', name: 'twitter:url', content: nuxtEnv.DOMAIN },
      { hid: 'twitter:image', content: `${nuxtEnv.DOMAIN}/ogtagimg.png` },
      { hid: 'twitter:description', name: 'twitter:description', content: '오픈 서버리스는 서버리스, MSA 아키텍처 기반으로 웹서비스/모바일앱 개발이 필요한 스타트업 또는 기업을 위해 직접 개발, 컨설팅, 교육까지 다양한 방법으로 지원하고 있습니다.' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: 'w3oGsofDTkjN1WIJRvISddGGFuCVm886XyHVyUm9ohw' },
      { hid: 'naver-site-verification', name: 'naver-site-verification', content: '3383f014c17b6af774dc6c5bbe3db80109e654e9' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css' }
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  router: {
    base: nodeEnv !== 'prod' ? '/dev' : ''
  },
  render: {
    static: {
      prefix: true
    }
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/mixin' },
    { src: '~/plugins/vue-line-clamp', ssr: false },
    { src: '~/plugins/vue-responsive-video-background-player', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/vuetify',
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-analytics', {
      id: 'UA-172637181-1'
    }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
  ],
  pwa: {
    workbox: {
    }
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: '/sitemap.xml'
  },
  sitemap: {
    hostname: 'https://open-serverless.com',
    gzip: true,
    routes: [
      '/'
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   ** //colors.blue.darken2,
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: {
        family: 'NanumSquare' 
      },
      icons: 'mdi'
    },
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.red.darken1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
