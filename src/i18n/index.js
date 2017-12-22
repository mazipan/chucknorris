import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en.json'
import id from './id.json'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'EN',
  messages: {
    'EN': en,
    'ID': id
  }
})
