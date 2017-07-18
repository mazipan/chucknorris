import Vue from 'vue'
import router from 'src/router'
import store from 'src/store'
import Categories from 'src/pages/Categories'

describe('Categories.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(Categories)
    vm = new Constructor({
      router,
      store
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })
})
