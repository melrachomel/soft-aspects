<template>
<div>
  <span>{{windowWidthDetector}}</span>

  <div class="about block purple-bg" v-draggable="draggableValue_off_about">
    <h1 v-if="info" v-html="postTitle"></h1>
    <div v-if="info" v-html="postContent"></div>

  </div>
</div>
</template>

<script>
import axios from 'axios'
import {
  Draggable
} from 'draggable-vue-directive'

export default {
  name: 'About',
  components: {

  },
  directives: {
    Draggable,
  },
  data() {
    return {
      info: null,
      draggableValue_off_about: {
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
    const apiUrl = "https://soft-aspects-cms.soft-aspects.net/?rest_route=/wp/v2/pages"
    axios.get(apiUrl, {
        crossdomain: true
      })
      .then(response => {
        const posts = response.data
        const sampleId = 5
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
        this.draggableValue_off_about.stopDragging = true
      } else {
        this.draggableValue_off_about.stopDragging = false
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
