<template>
<div id="app">

  <span>{{windowWidthDetector}}</span>
  <img alt="Soft Aspects logo" class="block" id="site-logo" src="./assets/logo.png" v-draggable="draggableValue_off_logo">

  <about id="about-page" />

  <prices id="prices-page" />

  <!-- <blog id="blog"/> -->

  <booking id="booking" />

  <div class="video block" v-draggable="draggableValue_off_video">
    <div class="handler" :ref="handleId">
    </div>
    <iframe title="vimeo-player" src="https://player.vimeo.com/video/334798307" width="640" height="360" frameborder="0" allowfullscreen></iframe>
  </div>

  <div class="ig block red-bg" v-draggable="draggableValue_off_ig">
    <div class="container">
      <span><em><a href="https://www.instagram.com/soft_aspects/">@soft_aspects</a></em></span>
    </div>

  </div>

</div>
</template>

<script>
// import drag from '@branu-jp/v-drag'
import about from './components/About'
import prices from './components/Prices'
import blog from './components/Blog'
import booking from './components/Booking'

// import axios from 'axios'
import {
  Draggable
} from 'draggable-vue-directive'

export default {
  name: 'app',
  components: {
    about,
    prices,
    blog,
    booking
  },
  directives: {
    // drag,
    Draggable,
  },
  data() {
    return {
      handleId: "handle-id",
      draggableValue_off_logo: {
        stopDragging: undefined,
      },
      draggableValue_off_ig: {
        stopDragging: undefined,
      },
      draggableValue_off_video: {
        stopDragging: undefined,
      },
      // draggable: true,
      windowWidth: 0,
      windowHeight: 0,
    };
  },
  created() {
    //init
    this.getWindowWidth()
    this.getWindowHeight()
  },
  mounted() {
    //For mobile, detect when in mobile
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)
    })

    //For GA track home
    this.$ga.page('/');

  },
  computed: {
    //For mobile, detect all .block divs and force static to prevent draggable directive
    windowWidthDetector: function() {
      const els = document.querySelectorAll(".block");

      if (this.windowWidth < 768) {
        // do a loop
        for (var i = 0; i < els.length; i++) {
          els[i].style.position = "static"
          els[i].style.width = "100%"
          // els[i].style.maxWidth = "100%"
        }
        this.draggableValue_off_logo.stopDragging = true
        this.draggableValue_off_ig.stopDragging = true
        this.draggableValue_off_video.stopDragging = true

      } else {
        for (var i = 0; i < els.length; i++) {
          els[i].style.position = ""
          els[i].style.width = ""
          // els[i].style.maxWidth = ""
        }
        this.draggableValue_off_logo.stopDragging = false
        this.draggableValue_off_ig.stopDragging = false
        this.draggableValue_off_video.stopDragging = false

      }
    },
  },
  methods: {

    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth
    },
    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight
    }
  }
}
</script>

<style lang="scss">
@import './assets/_main.scss'
</style>
