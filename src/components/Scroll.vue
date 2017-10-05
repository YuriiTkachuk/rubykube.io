<template>
  <ul class="nav features justify-content-center">
    <li>
      <a href="#friends" class="scroll nav-link active featureFadeInDown">
        Message your friends
      </a>
    </li>
    <li>
      <a href="#camera" class="scroll nav-link featureFadeInDown">
        All your photos online
      </a>
    </li>
    <li>
      <a href="#user" class="scroll nav-link featureFadeInDown">
        Sync your contacts
      </a>
    </li>
    <li>
      <a href="#files" class="scroll nav-link featureFadeInDown">
        All your files secured
      </a>
    </li>
  </ul>
</template>

<script>
  import $ from 'jquery'
  export default {
    mounted: function () {
      // let features = this.$el
      var $features = $(this.$el)
      var position = this.$el.offsetHeight
      $(window).scroll(function () {
        var top = $(this).scrollTop()
        if (top > position + 530 && !$features.hasClass('fixed')) {
          $features.addClass('fixed fadeInDown')
        } else if (top < position + 500 && $features.hasClass('fixed')) {
          $features.removeClass('fixed fadeInDown')
          $features.find('li:eq(0) .nav-link').addClass('active')
        }
      })

      setTimeout(function () {
        $('.nav-link').removeClass('featureFadeInDown')
      }, 1500)
    }
  }
</script>
