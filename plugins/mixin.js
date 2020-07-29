import Vue from 'vue'
const GlobalMixin = {
  install (Vue) {
    Vue.mixin({
      data: () => ({
        s3AssetsBucket: process.env.S3_ASSETS_BUCKET
      })
    })
  }
}
Vue.use(GlobalMixin)
