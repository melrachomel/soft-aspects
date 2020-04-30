<template>
<div id="app">
  <p style="position: absolute">{{windowWidth}} <br /> {{windowWidthDetector}}</p>
  <img alt="Soft Aspects logo" id="site-logo" src="./assets/logo.png" v-draggable>

  <about id="about-page"/>

  <prices id="prices-page" />

  <div class="ig block red-bg" v-draggable="draggableValue_off_ig">
    <span><em><a href="https://www.instagram.com/soft_aspects/">@soft_aspects</a></em></span>
  </div>

  <!-- <blog/> -->

  <div class="video block" v-draggable="draggableValue_off_video">
    <div class="handler" :ref="handleId">
    </div>
    <iframe title="vimeo-player" src="https://player.vimeo.com/video/334798307" width="640" height="360" frameborder="0" allowfullscreen></iframe>
  </div>

</div>
</template>

<script>
// import drag from '@branu-jp/v-drag'
import about from './components/About'
import prices from './components/Prices'
import blog from './components/Blog'

// import axios from 'axios'
import {
  Draggable
} from 'draggable-vue-directive'

export default {
  name: 'app',
  components: {
    about,
    prices,
    blog
  },
  directives: {
    // drag,
    Draggable,
  },
  data() {
    return {
      handleId: "handle-id",
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
    console.log("~~~Vue lifecycle: created()~~~")
    //init
    this.getWindowWidth()
    this.getWindowHeight()
  },
  mounted() {
    console.log("~~~Vue lifecycle: mounted()~~~")
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)

    })
  },
  computed: {
    windowWidthDetector: function() {
      if (this.windowWidth < 768) {
        // do a loop
        // const els = document.querySelectorAll(".block");
        // for (var i = 0; i < els.length; i++) {
        //   // console.log(els[i]);
        // }
        this.draggableValue_off_ig.stopDragging = true
        this.draggableValue_off_video.stopDragging = true

        console.log(true, "window is LESS than 768")
      } else {
        this.draggableValue_off_ig.stopDragging = false
        this.draggableValue_off_video.stopDragging = false

        console.log(false, "window is GREATER than 768")
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
