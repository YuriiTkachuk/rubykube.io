<template>
  <div id="app">
    <navbar/>
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
    <bottom/>
  </div>
</template>

<style lang="scss">
@import "~@/assets/styles/application.scss";

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
}
</style>

<script>
  import Navbar from '@/components/Navbar'
  import Bottom from '@/components/Footer'
  import $ from 'jquery'

  export default {
    name: 'App',
    components: {
      Navbar,
      Bottom
    },
    mounted: function () {
      var $quotes = $('.client-quote')
      var $faces = $('.client-picture')

      $faces.click(function (e) {
        var index = $faces.index(this)

        $quotes.removeClass('active')
        $quotes.eq(index).addClass('active')

        $faces.removeClass('active')
        $(this).addClass('active')
      })
    }
  }
</script>
