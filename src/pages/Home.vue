<template>
  <div class="grid__row">

    <div class="empty-state">      
      <i class="fa fa-exclamation-triangle icon" aria-hidden="true"></i>
      <br/><br/>
      Not found any jokes today!
      <br/>
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
    ...mapGetters([])    
  },
  activated () {
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
