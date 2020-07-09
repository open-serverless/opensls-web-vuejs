// const { Nuxt } = require('nuxt')
const { Nuxt } = require('nuxt-start')
const nuxtConfig = require('../nuxt.config.js')

const nuxt = new Nuxt({ ...nuxtConfig, dev: false })

module.exports = { nuxt }
