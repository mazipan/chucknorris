/* eslint-disable no-unused-vars */

import Vue from 'vue'
import config from './config'
import {saveDataToStorage, checkDataFromStorage} from './util'

const basePath = config.api.base_path
const whitelist = `${basePath}jokes/random`

function getDataViaApi (path, cb, errorHandler, payload) {
  let sessionRes = checkDataFromStorage(path, true)
  if (sessionRes !== null) {
    console.log('Read from session data : ', path)
    cb(sessionRes)
  } else {
    Vue.http.get(path, {
      params: payload,
      headers: {
        'Accept': '(application/json|text/plain)'
      }
    }).then((res) => {
      console.log('You just call api : ', path)
      saveDataToStorage(path, res)
      cb(res)
    }, (error) => {
      console.log('Sorry, api ' + path + ' error : ', error)
      if (typeof errorHandler === 'function') {
        errorHandler(error)
      }
    })
  }  
}

export default {
  getRandomJokes: (cb, errorHandler) => {
    let path = `${basePath}jokes/random/`
    getDataViaApi(path, cb, errorHandler, null)
  },
  getRandomJokesByCategory: (cb, errorHandler, category) => {
    let path = `${basePath}jokes/random/?category=${category}`
    getDataViaApi(path, cb, errorHandler, null)
  },
  getCategories: (cb, errorHandler) => {
    let path = `${basePath}jokes/categories/`
    getDataViaApi(path, cb, errorHandler, null)
  },
  searchJokes: (cb, errorHandler, keyword) => {
    let path = `${basePath}jokes/search/?query=${keyword}`
    getDataViaApi(path, cb, errorHandler, null)
  }
}
