<template>
<div>
  <span>{{windowWidthDetector}}</span>

  <div class="prices block green-bg" v-draggable="draggableValue_off_prices">
    <div class="container">

    <h1 v-if="info" v-html="postTitle"></h1>
    <div v-if="info" v-html="postContent"></div>
  </div>

  </div>
</div>
</template>

<script>
// import drag from '@branu-jp/v-drag'
import axios from 'axios'
import {
  Draggable
} from 'draggable-vue-directive'

export default {
  name: 'Prices',
  components: {

  },
  directives: {
    // drag,
    Draggable,
  },
  data() {
    return {
      draggableValue_off_prices: {
        stopDragging: undefined,
      },
      info: null,
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
    const apiUrl = "https://soft-aspects-cms.soft-aspects.net/?rest_route=/wp/v2/pages"
    axios.get(apiUrl, { crossdomain: true })
      .then(response => {
        const posts = response.data
        const sampleId = 12
        // this.info = posts.filter(post => post.title.includes('About'))
        // this.info = posts[0]
        this.info = posts.filter((object) => {
          return object.id === sampleId
        })
        // console.log(this.info[0].title.rendered)
      })

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
        this.draggableValue_off_prices.stopDragging = true
      } else {
        this.draggableValue_off_prices.stopDragging = false
      }
    },
    postTitle: function() {
      return this.info[0].title.rendered
    },
    postContent: function() {
      return this.info[0].content.rendered
    }
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

<style lang="css" scoped>
</style>
