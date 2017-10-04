<template>
  <div class="grid__row">

    <div class="search">
      <input class="search__text" type="text" name="Search" v-model="searchText" :placeholder="$t('search.placeholder')">
      <button class="search__btn" @click="searchJokes">
        <i class="fa fa-search" aria-hidden="true"></i> {{ $t('search.button') }}
      </button>
    </div>

    <div class="chucklist" v-if="searchCount > 0">

      <div class="chuck" 
            v-for="chuck in searchList" 
            @click="seeDetail(chuck)">

        <img class="chuck__img" :src="chuck.icon_url" alt="">
        <div class="chuck__jokes">
          {{ chuck.value }}
        </div>

      </div>

    </div>

    <div class="empty-state"  v-if="!searchResultJokes && searchCount === 0">      
      <img class="icon" :src="iamChuckNorris"/>
      <br/><br/>
      {{ $t('search.emptyState') }}
      <br/>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SearchPage',
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    searchJokes: function () {
      this.$store.dispatch('searchJokes', this.searchText)
    },
    seeDetail: function (jokes) {
      this.$store.commit('setSearchDetailView', jokes)
      this.$store.commit('setTabActive', '')
      this.$router.push('/search/detail/')
    }
  },
  computed: {
    ...mapGetters(['iamChuckNorris', 'searchResultJokes']),
    searchList: function () {
      return this.searchResultJokes.result
    },
    searchCount: function () {
      return this.searchResultJokes.total
    }
  },
  mounted () {
    this.$store.commit('setTabActive', 'search')
  }
}

</script>

<style lang="scss" scoped>
.search{
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__text{
    width: 100%;
    padding: 12px;
    outline: none;
    border: 1px solid #f05724;
    border-bottom-left-radius: .5em;
    border-top-left-radius: .5em;
  }
  &__btn{
    width: 120px;
    padding: 12px;
    outline: none;
    border: 1px solid #f05724;
    background-color: #f05724;
    color: #fff;
    border-bottom-right-radius: .5em;
    border-top-right-radius: .5em;
  }
}

.chucklist{
  margin: 20px 0;
}

.chuck{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  &__img{
    width: 50px;
    margin-right: 10px;
    align: top;
  }

  &__jokes{
    width: 100%;
    font-size: 16px;
    font-style: italic;
  }
}

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
