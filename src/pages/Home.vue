<template>
  <div class="grid__row">

    <div class="chuck" v-if="randomJokes && randomJokes.value">
      <img class="chuck__img" :src="randomJokes.icon_url" alt="">
      <div class="chuck__jokes">
        {{ randomJokes.value }}
      </div>

      <social-sharing-section
      :title="randomJokes.value"
      :description="randomJokes.value"
      :quote="randomJokes.value">
      </social-sharing-section>

    </div>

    <div class="empty-state" v-if="!randomJokes || !randomJokes.value">
      <img class="icon" :src="iamChuckNorris"/>
      <br/><br/>
      {{ $t('home.emptyJokes') }}
      <br/>
    </div>

    <div class="btn__jokes--wrapper">
      <button @click="generateJokes" class="btn__jokes">
      <i class="fa fa-refresh" aria-hidden="true"></i>
        {{ $t('action.getOtherJokes') }}
      </button>
    </div>

    <div class="google-ads">
      <InArticleAdsense
          root-class="wrapper VueInArticleAdsense"
          :data-ad-client="client"
          :data-ad-slot="slot">
      </InArticleAdsense>
    </div>

  </div>
</template>

<script>
import SocialSharingSection from 'components/SocialSharingSection.vue'
import mixin from '@/mixins'

export default {
  name: 'HomePage',
  mixins: [mixin],
  components: {
    SocialSharingSection
  },
  data () {
    return {
    }
  },
  computed: {
    iamChuckNorris () {
      return this.$store.getters.iamChuckNorris
    },
    randomJokes () {
      return this.$store.getters.randomJokes
    }
  },
  methods: {
    generateJokes: function () {
      this.$store.dispatch('getRandomJokes')
    }
  },
  mounted () {
    this.$store.commit('setTabActive', 'random')
    this.generateJokes()
  }
}

</script>

<style lang="scss" scoped>
.google-ads{
  width: 90%;
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

.chuck{
  text-align: center;
  margin-top: 100px;
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
