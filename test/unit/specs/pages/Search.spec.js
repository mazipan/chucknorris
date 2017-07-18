import Vue from 'vue'
import router from 'src/router'
import store from 'src/store'
import Search from 'src/pages/Search'

describe('Search.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(Search)
    vm = new Constructor({
      router,
      store
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })
})
