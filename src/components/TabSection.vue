<template>
  <nav class="nav" v-if="tabActive !== ''">
    <div class="nav__item">
      <router-link to="/" 
          class="nav__link nav__link--left"
          :class="{'nav__link--active': tabActive === 'random'}">
        RANDOM
      </router-link>
    </div>
    <div class="nav__item">
      <router-link to="/categories/" 
          class="nav__link"
          :class="{'nav__link--active': tabActive === 'categories'}">
        CATEGORIES
      </router-link>
    </div>
    <div class="nav__item">
      <router-link to="/search/" 
          class="nav__link nav__link--right"
          :class="{'nav__link--active': tabActive === 'search'}">
        SEARCH
      </router-link>
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
    text-decoration: none;
    padding: 10px;
    background-color: #f05724;
    color: #fff;
    font-size: 14px;
    font-weight: 200;

    &--active{
      background-color: darken(#f05724, 10%);
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