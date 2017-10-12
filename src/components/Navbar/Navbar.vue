<template src='./assets/Navbar.html'></template>
<style lang='scss' src='./assets/Navbar.scss' scoped></style>

<script>
import $ from 'jquery'
export default {
  /*eslint-disable*/
  mounted: function () {
    var $click_nav = false;
    var $el = $("#navbar-collapse");
    $(".navbar-toggler").click(function(){
      if($click_nav == false) {
        $click_nav = true;
        $el.removeAttr("id");
        $el.addClass("show");
      }
      else {
        $click_nav = false;
        $el.removeClass("show");
      }
    });

    $('.myMenu ul li.has-children > a').click(function() {
      $(this).parent().siblings().find('ul').slideUp(300);
      $(this).next('ul').stop(true, false, true).slideToggle(300);
      return false;
    });
  }
}
</script>
