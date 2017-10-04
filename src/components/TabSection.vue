<template>
  <nav class="nav" v-if="tabActive !== ''">
    <div class="nav__item">
      <a href="javascript:void(0)" 
          @click="changeTabActive('random')"
          class="nav__link nav__link--left"
          :class="{'nav__link--active': tabActive === 'random'}">
        <i class="fa fa-random" aria-hidden="true"></i> {{ $t('tab.random') }}
      </a>
    </div>
    <div class="nav__item">
      <a href="javascript:void(0)" 
          @click="changeTabActive('categories')"
          class="nav__link"
          :class="{'nav__link--active': tabActive === 'categories'}">
        <i class="fa fa-th-list" aria-hidden="true"></i> {{ $t('tab.categories') }}
      </a>
    </div>
    <div class="nav__item">
      <a href="javascript:void(0)" 
          @click="changeTabActive('search')"
          class="nav__link nav__link--right"
          :class="{'nav__link--active': tabActive === 'search'}">
        <i class="fa fa-search" aria-hidden="true"></i> {{ $t('tab.search') }}
      </a>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'TabSection',
  props: ['tabActive'],
  data () {
    return {
    }
  },
  methods: {
    changeTabActive: function (tabName) {
      this.$store.commit('setTabActive', tabName)
      if (tabName === 'random') {
        this.$router.push('/')
      } else this.$router.push('/' + tabName)  
    }
  }
}

</script>

<style lang="scss" scoped>
.nav{
  text-align: center;
  margin-top: 10px;

  &__item{
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  &__link{
    position: relative;
    display: block;
    color: #000;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px;
    background-color: #f05724;
    color: #fff;
    font-size: 14px;
    font-weight: 200;

    &--active{
      background-color: darken(#f05724, 10%);
      font-weight: bold;
    }

    &--left{
      border-bottom-left-radius: .5em;
      border-top-left-radius: .5em;
    }

    &--right{
      border-bottom-right-radius: .5em;
      border-top-right-radius: .5em;
    }
  }
}
</style>