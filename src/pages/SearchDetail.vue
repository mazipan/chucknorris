<template>
  <div class="grid__row">

    <div class="nav">
      <button class="nav__btn" @click="backToSearch">
        <i class="fa fa-angle-left" aria-hidden="true"></i> 
        <span>Back to Search Result</span>
      </button>
    </div>

    <div class="chuck" v-if="searchDetailView">
      <img class="chuck__img" :src="searchDetailView.icon_url" alt="">
      <div class="chuck__jokes">
        {{ searchDetailView.value }}
      </div>        
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SearchDetailPage',
  data () {
    return {
    }
  },
  methods: {
    backToSearch: function () {
      this.$store.commit('setTabActive', 'search')
      this.$router.push('/search')
    }
  },
  computed: {
    ...mapGetters(['iamChuckNorris', 'searchDetailView'])
  },
  mounted () {
    this.$store.commit('setTabActive', '')
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
</style>
