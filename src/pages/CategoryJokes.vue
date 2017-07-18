<template>
  <div class="grid__row">

    <div class="nav">
      <button class="nav__btn" @click="backToCategories">
        <i class="fa fa-angle-left" aria-hidden="true"></i> 
        <span>Back to Categories</span>
      </button>
    </div>

    <div class="chuck" v-if="randomJokesByCategory">
      <img class="chuck__img" :src="randomJokesByCategory.icon_url" alt="">
      <div class="chuck__jokes">
        {{ randomJokesByCategory.value }}
      </div>        
    </div>

    <div class="btn__jokes--wrapper">
      <button @click="generateCategoryJokes" class="btn__jokes">GET OTHER JOKES</button>      
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CategoryJokesPage',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['iamChuckNorris', 'selectedCategory', 'randomJokesByCategory'])    
  },
  methods: {
    backToCategories: function () {
      this.$store.commit('setTabActive', 'categories')
      this.$router.push('/categories')
    },
    generateCategoryJokes: function () {
      this.$store.dispatch('getRandomJokesByCategory', this.selectedCategory)
    }
  },
  mounted () {
    this.$store.commit('setTabActive', '')
    this.generateCategoryJokes()
  }
}

</script>

<style lang="scss" scoped>
.nav{
  &__btn{
    outline: none;
    border: none;
    background-color: transparent;    
    color: #f05724;
    i{
      font-size: 40px;
    }
    span{
      font-size: 20px;
      line-height: 2;
      vertical-align: top;
      padding-left: 10px;
    }
  }
}

.chuck{
  text-align: center;
  margin-top: 30px;
  padding: 0 15px;

  &__img{
    height: 70px;
  }
  &__jokes{
    font-style: italic;
    font-size: 36px;
  }
}


.btn__jokes{
  margin: 20px;
  display: inline-block;
  padding: 13px 20px;
  outline: none;
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background-color: #f05724;
  color: #fff;
  border-radius: .5em;

  -webkit-appearance : none;
  -moz-appearance : none;
  appearance : none;

  &--wrapper{text-align: center;}
}
</style>
