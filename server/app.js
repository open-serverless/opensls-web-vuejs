// server/app.js
const express = require('express')
const { nuxt } = require('./nuxt')

const app = express()

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
const BASE_URL = '/dev'
const REGEXP_BASE_URL = new RegExp(`^${BASE_URL}`)
const BASE_URL_TO_BE_ADDED = BASE_URL.replace(/\/$/, '')
const buildPath = (originalPath) => {
  if (REGEXP_BASE_URL.test(originalPath) === true) {
    return originalPath
  }
  return `${BASE_URL_TO_BE_ADDED}${originalPath}`
}

const envMiddleware = (req, res, next) => {
  const originalUrl = req.url
  console.log('originalUrl: ', originalUrl)
  console.log('req: ', req)
  const envUrl = buildPath(originalUrl)
  console.log('envUrl: ', envUrl)
  req.url = envUrl
  next()
}
if (process.env.NODE_ENV !== 'prod') {
  app.use(envMiddleware)
}
app.use(async (req, res, next) => {
  await nuxt.ready()
  nuxt.render(req, res, next)
})
// const { host, port } = nuxt.options.server
// app.listen(port, host)
module.exports = app
