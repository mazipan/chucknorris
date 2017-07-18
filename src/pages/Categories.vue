<template>
  <div class="categories">
    <div class="category"
        v-for="cat in categories" 
        @click="seeCategoryJokes(cat)">
      {{ cat }}
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CategoriesPage',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['iamChuckNorris', 'categories'])    
  },
  methods: {
    getCategories: function () {
      this.$store.dispatch('getCategories')
    },
    seeCategoryJokes: function (category) {
      this.$store.commit('setTabActive', '')
      this.$store.commit('setSelectedCategory', category)
      this.$store.dispatch('getRandomJokesByCategory', category)
      this.$router.push('/category/jokes')
    }
  },
  mounted () {
    this.$store.commit('setTabActive', 'categories')
    this.getCategories()
  }
}

</script>

<style lang="scss" scoped>
.empty-state{
  text-align: center;
  font-size: 24px;
  margin-top: 100px;
  color: #ccc;

  .icon{
    font-size: 48px;
  }
}
.categories{
  margin: 20px 0;
}
.category{
  display: block;
  padding: 15px 20px;
  margin-bottom: 5px;
  text-transform: uppercase;
  background-color: #ff7850 ;
  color: #fff;
  cursor: pointer;

  i{
    float: right;
    font-size: 16px;
    margin-top: -4px;
  }
}
</style>
