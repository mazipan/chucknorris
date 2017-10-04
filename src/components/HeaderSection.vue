<template>
  <header class="header">
    <div class="header__sticky">
      <div class="header__nav">
        <a class="header__hamburger" href="javascript:void(0)" @click="toggleSidebar" title="Open Sidebar">
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <div class="header__content">
        <router-link to="/">
          <img class="header__brand" v-lazy="'/chucknorris/static/images/chucknorris-logo-white.png'" alt="Chuck Norris">
        </router-link>
      </div>
      <div class="header__nav pointer">
        <div class="header__search">
          <a @click="changeLanguage('EN')" href="javascript:void(0)">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">
              <path style="fill:#41479B;" d="M503.172,423.725H8.828c-4.875,0-8.828-3.953-8.828-8.828V97.104c0-4.875,3.953-8.828,8.828-8.828  h494.345c4.875,0,8.828,3.953,8.828,8.828v317.793C512,419.772,508.047,423.725,503.172,423.725z" />
              <path style="fill:#F5F5F5;" d="M512,97.104c0-4.875-3.953-8.828-8.828-8.828h-39.495l-163.54,107.147V88.276h-88.276v107.147  L48.322,88.276H8.828C3.953,88.276,0,92.229,0,97.104v22.831l140.309,91.927H0v88.276h140.309L0,392.066v22.831  c0,4.875,3.953,8.828,8.828,8.828h39.495l163.54-107.147v107.147h88.276V316.578l163.54,107.147h39.495  c4.875,0,8.828-3.953,8.828-8.828v-22.831l-140.309-91.927H512v-88.276H371.691L512,119.935V97.104z" />
              <g>
                <polygon style="fill:#FF4B55;" points="512,229.518 282.483,229.518 282.483,88.276 229.517,88.276 229.517,229.518 0,229.518    0,282.483 229.517,282.483 229.517,423.725 282.483,423.725 282.483,282.483 512,282.483  " />
                <path style="fill:#FF4B55;" d="M178.948,300.138L0.25,416.135c0.625,4.263,4.14,7.59,8.577,7.59h12.159l190.39-123.586h-32.428   V300.138z" />
                <path style="fill:#FF4B55;" d="M346.388,300.138H313.96l190.113,123.404c4.431-0.472,7.928-4.09,7.928-8.646v-7.258   L346.388,300.138z" />
                <path style="fill:#FF4B55;" d="M0,106.849l161.779,105.014h32.428L5.143,89.137C2.123,90.54,0,93.555,0,97.104V106.849z" />
                <path style="fill:#FF4B55;" d="M332.566,211.863L511.693,95.586c-0.744-4.122-4.184-7.309-8.521-7.309h-12.647L300.138,211.863   H332.566z" />
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
            </svg>
          </a>
          <a @click="changeLanguage('ID')" href="javascript:void(0)">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
              <path style="fill:#C8414B;" d="M512,256H0V97.103c0-4.875,3.953-8.828,8.828-8.828h494.345c4.875,0,8.828,3.953,8.828,8.828L512,256  L512,256z" />
              <path style="fill:#F5F5F5;" d="M0,256h512v158.897c0,4.875-3.953,8.828-8.828,8.828H8.828c-4.875,0-8.828-3.953-8.828-8.828V256z" />
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      showSearchBlock: false,
      keyword: ''
    }
  },
  computed: {
  },
  methods: {
    toggleSidebar: function() {
      this.$emit('toggleSidebar')
    },
    changeLanguage: function(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}

.header {
  height: 60px;

  &__sticky {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    display: table;
    margin: 0;
    height: 60px;
    background: #f05724;
    text-align: center;
    color: #fff;
    width: 100%;
  }

  &__content {
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
  &__brand {
    width: auto;
    height: 50px;
  }
  &__nav {
    color: #fff;
    display: table-cell;
    vertical-align: middle;

    &:first-child {
      text-align: left;
      padding-left: 15px;
      width: 50px;
    }
    &:last-child {
      text-align: right;
      padding-right: 15px;
      width: 50px;
    }
  }

  &__hamburger {
    background: none;
    border: none;
    padding: 0;
    outline: none;
    color: #fff;
    font-size: 30px;
  }
  &__search {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>