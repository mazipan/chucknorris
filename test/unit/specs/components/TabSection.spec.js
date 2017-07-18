import Vue from 'vue'
import router from 'src/router'
import store from 'src/store'
import TabSection from 'src/components/TabSection'

describe('TabSection.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(TabSection)
    vm = new Constructor({
      router,
      store
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })
})
