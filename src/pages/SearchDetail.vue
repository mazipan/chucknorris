<template>
  <div class="grid__row">

    <div class="nav">
      <button class="nav__btn" @click="backToSearch">
        <i class="fa fa-angle-left" aria-hidden="true"></i> 
        <span>{{ $t('action.back') }}</span>
      </button>
    </div>

    <div class="chuck" v-if="searchDetailView">
      <img class="chuck__img" :src="searchDetailView.icon_url" alt="">
      <div class="chuck__jokes">
        {{ searchDetailView.value }}
      </div> 

      <social-sharing-section 
      :title="searchDetailView.value"
      :description="searchDetailView.value"
      :quote="searchDetailView.value">        
      </social-sharing-section> 
             
    </div>

  </div>
</template>

<script>
import SocialSharingSection from 'components/SocialSharingSection.vue'

export default {
  name: 'SearchDetailPage',
  components: {
    SocialSharingSection
  },
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
    iamChuckNorris () {
      return this.$store.getters.iamChuckNorris
    },
    searchDetailView () {
      return this.$store.getters.searchDetailView
    }
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
