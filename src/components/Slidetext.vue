<template>
  <div>
    <div class="client-quotes">
      <div class="client-quote active">
        <div class="quote">
          "Focus on creating and growing your projects and websites, and we‘ll take care of spinning up new designs for your users and making sure they’re great. Work with all types of customers just right out of the box!"
        </div>
        <div class="author">
          <span class="name">Jim Warner</span>
          <span class="role">CTO, Dribbble</span>
        </div>
      </div>
      <div class="client-quote">
        <div class="quote">
          "Bring all your ideas together and make customizations faster and better than ever. It works in all browsers and devices plus your clients can pay instantly, to improve their experience at all times anywhere they go."
        </div>
        <div class="author">
          <span class="name">Katia Stevens</span>
          <span class="role">Marketing Director, Twitter</span>
        </div>
      </div>
      <div class="client-quote">
        <div class="quote">
          "Focus on creating and growing your projects and websites, and we‘ll take care of spinning up new designs for your users and making sure they’re great. Work with all types of customers just right out of the box!"
        </div>
        <div class="author">
          <span class="name">John Roberts</span>
          <span class="role">Product Designer, Github</span>
        </div>
      </div>
      <div class="client-quote">
        <div class="quote">
          "Bring all your ideas together and make customizations faster and better than ever. It works in all browsers and devices plus your clients can pay instantly, to improve their experience at all times anywhere they go."
        </div>
        <div class="author">
          <span class="name">Ana Jones</span>
          <span class="role">Designer, Kickstarter</span>
        </div>
      </div>
      <div class="client-quote">
        <div class="quote">
          "Easily customize any part of your project for best results and quick great prototyping. Showcase your work on any computer or mobile device and all screen sizes. Bring all your ideas together and make customizations faster and better than ever."
        </div>
        <div class="author">
          <span class="name">Robert Williams</span>
          <span class="role">Marketing, Atlassian</span>
        </div>
      </div>
    </div>
    <div class="client-pictures">
      <div class="client-picture active">
        <img src="~theme-corporate/images/uifaces/16.jpg">
      </div>
      <div class="client-picture">
        <img src="~theme-corporate/images/uifaces/13.jpg">
      </div>
      <div class="client-picture">
        <img src="~theme-corporate/images/uifaces/17.jpg">
      </div>
      <div class="client-picture">
        <img src="~theme-corporate/images/uifaces/11.jpg">
      </div>
      <div class="client-picture">
        <img src="~theme-corporate/images/uifaces/14.jpg">
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
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
