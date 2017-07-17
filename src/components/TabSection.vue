<template>
  <nav class="nav">
    <div class="nav__item">
      <a href="javascript:void(0)" 
          title="" 
          class="nav__link nav__link--left nav__link--active">RANDOM</a>
    </div>
    <div class="nav__item">
      <a href="javascript:void(0)" 
          title="" 
          class="nav__link">CATEGORIES</a>
    </div>
    <div class="nav__item">
      <a href="javascript:void(0)" 
          title="" 
          class="nav__link nav__link--right">SEARCH</a>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'TabSection',
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