<template>
  <div class="grid__row">

    <div class="chuck" v-if="randomJokes && randomJokes.value">
      <img class="chuck__img" :src="randomJokes.icon_url" alt="">
      <div class="chuck__jokes">
        {{ randomJokes.value }}
      </div>  
    </div>

    <div class="empty-state" v-if="!randomJokes || !randomJokes.value">      
      <img class="icon" :src="iamChuckNorris"/>
      <br/><br/>
      Not found any jokes today!
      <br/>
    </div>

    <div class="btn__jokes--wrapper">
      <button @click="generateJokes" class="btn__jokes">GET OTHER JOKES</button>      
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['iamChuckNorris', 'randomJokes'])    
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
