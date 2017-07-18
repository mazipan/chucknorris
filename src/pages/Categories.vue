<template>
  <div class="grid__row">

    <div class="empty-state">      
      <img class="icon" :src="iamChuckNorris"/>
      <br/><br/>
      Not found any jokes today!
      <br/>
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
    ...mapGetters(['iamChuckNorris'])    
  },
  activated () {
    this.$store.commit('setTabActive', 'categories')
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
</style>
