<template>
<div id="blog">
    <div class="blog block orange-bg" v-for="post in posts" v-draggable>
      <small>{{post.date}}</small>
      <h1>{{post.title.rendered}}</h1>
      <div v-html="post.content.rendered"></div>
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
      handleId: "handle-id",
      draggableValue: {
        handle: undefined
      },
      posts: null,
      //assign random number to left css prop - not working
      leftPos: Math.floor(Math.random() * 100) + 1
    };
  },
  created: function() {
    // var el = document.querySelector('.blog')
    // console.log("loaded ========>", el)
    // el.setAttribute('data-foo', 'Hello World!');
  },
  mounted() {

    this.draggableValue.handle = this.$refs[this.handleId];
    const apiUrl = "http://soft-aspects-cms.soft-aspects.net/?rest_route=/wp/v2/posts"
    axios.get(apiUrl, { crossdomain: true })
      .then(response => {
        const res = response.data
        this.posts = res
        // console.log("posts: ", this.posts)
      })
  },
  methods: {

  },
  computed: {
    // postTitle: function() {
    //   return this.info[0].title.rendered
    // },
    // postContent: function() {
    //   return this.info[0].content.rendered
    // }
  }
}
</script>

<style lang="css" scoped>
</style>
