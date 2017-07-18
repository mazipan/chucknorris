<template>
  <div class="grid__row about">
    <img v-lazy="'/chucknorris/static/images/chucknorris-logo.png'" />
    <h1>Chuck Norris Jokes</h1>
    <h5>See Source Code : 
      <a href="https://github.com/mazipan/chucknorris" target="_blank">
        https://github.com/mazipan/chucknorris
      </a>
    </h5>
    <h5>API by ChuckNorris.io : 
      <a href="https://api.chucknorris.io/" target="_blank">
        https://api.chucknorris.io/
      </a>
    </h5>
    <br>
    <p>
      <h5>Crafted with <i class="fa fa-heart"></i> by : </h5>
      <a href="mailto:mazipanneh@gmail.com">
        <img v-lazy="'https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600'" alt="Email" class="badge">
      </a>
      <a href="https://mazipanneh.com/blog/">
        <img v-lazy="'https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600'" alt="Website" class="badge">
      </a>
      <a href="https://facebook.com/mazipanneh">
        <img v-lazy="'https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600'" alt="Facebook" class="badge">
      </a>
    </p>
    <p>
      <a href="https://twitter.com/Maz_Ipan">
      <img v-lazy="'https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600'" alt="Twitter"  class="badge"></a>
      <a href="https://id.linkedin.com/in/irfanmaulanamazipan">
      <img v-lazy="'https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600'" alt="Linkedin" class="badge"></a>
      <a href="https://www.slideshare.net/IrfanMaulana21">
      <img v-lazy="'https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600'" alt="Slideshare" class="badge"></a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  mounted () {
    this.$store.commit('setTabActive', '')
  }
}

</script>

<style lang="scss" scoped>
.about{
  text-align: center;

  a{
    color: #0096d9;
    text-decoration: none;
  }

  .fa-heart{
    color: red;
  }

  .badge{
    width: auto;
    height: 20px;
  }
}
</style>
