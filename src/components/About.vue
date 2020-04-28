<template>
<div>
  <div class="about block purple-bg" v-draggable>
    <h1 v-if="info" v-html="postTitle"></h1>
    <div v-if="info" v-html="postContent"></div>

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
  name: 'About',
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
      info: null,
    };
  },
  mounted() {
    this.draggableValue.handle = this.$refs[this.handleId];
    const apiUrl = "http://soft-aspects-cms.soft-aspects.net/?rest_route=/wp/v2/pages"
    axios.get(apiUrl, { crossdomain: true })
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
  },
  computed: {
    postTitle: function() {
      return this.info[0].title.rendered
    },
    postContent: function() {
      return this.info[0].content.rendered
    }
  }
}
</script>

<style lang="css" scoped>
</style>
