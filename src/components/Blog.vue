<template>
<div>
  <span>{{windowWidthDetector}}</span>

  <div class="blog block orange-bg" v-for="post in posts" v-draggable="draggableValue_off_blog">
    <div class="container"><small>{{post.date}}</small>
      <h1>{{post.title.rendered}}</h1>
      <div v-html="post.content.rendered"></div>
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
  name: 'Blog',
  components: {

  },
  directives: {
    // drag,
    Draggable,
  },
  data() {
    return {
      draggableValue_off_blog: {
        stopDragging: undefined,
        onPositionChange: this.onPosChanged

      },
      posts: null,
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

    const apiUrl = "https://soft-aspects-cms.soft-aspects.net/?rest_route=/wp/v2/posts"
    axios.get(apiUrl, {
        crossdomain: true
      })
      .then(response => {
        const res = response.data
        this.posts = res
        // console.log("posts: ", this.posts)
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
        this.draggableValue_off_blog.stopDragging = true
      } else {
        this.draggableValue_off_blog.stopDragging = false
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
    // leftPos: Math.floor(Math.random() * 100) + 1
    onPosChanged: function(positionDiff, absolutePosition, event) {
      console.log("left corner", absolutePosition.left);
      console.log("top corner", absolutePosition.top);
    },
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth
    },
    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight
    }
  }
}
</script>

<style lang="css">
.wpsbc-calendar-wrapper {
  table {
     table-layout:fixed;
  }
}
</style>
