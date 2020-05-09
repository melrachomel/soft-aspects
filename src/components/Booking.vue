<template>
<div>
  <span>{{windowWidthDetector}}</span>

  <div class="booking block indigo-bg" v-draggable="draggableValue_off_booking">
    <h1 v-if="info" v-html="postTitle"></h1>
    <div v-if="info" v-html="postContent"></div>
    <div v-if="!sent" class="formGroup">
      <form id="bookingform" @submit="onSubmit">
        <label for="name">
          Name:
          <input id="input-name" v-model="form.name" type="text" required placeholder="Name" />
        </label>
        <br>
        <label for="email">
          Email:
          <input id="input-email" v-model="form.email" type="text" required placeholder="Email" />
        </label>
        <br>
        <label for="info">
          Please indicate your birth date, time, and location. Without this information I cannot give you a reading.
          <textarea id="input-info" v-model="form.info" type="text" required placeholder="i.e. Jan. 9. 1988, Manila, PHIL" />
        </label>
        <label for="info">
          What date are you looking to book?
          <textarea id="textarea-date" v-model="form.date" type="text" required placeholder="Date to book" />
        </label>
        <br>
        <button type="submit" name="postform" @click="submitted">
          Submit to book
        </button>
      </form>
    </div>
    <div id="thankYou"></div>

  </div>

</div>
</div>
</template>

<script>
const querystring = require("querystring");

import axios from 'axios'
import {
  Draggable
} from 'draggable-vue-directive'

export default {
  name: 'Booking',
  components: {

  },
  directives: {
    Draggable,
  },
  data() {
    return {
      info: null,
      draggableValue_off_booking: {
        stopDragging: undefined,
      },
      // draggable: true,
      windowWidth: 0,
      windowHeight: 0,
      sent: false,
      form: {
        name: "",
        email: "",
        info: "",
        date: "",
      }
    };
  },
  created() {
    //init
    this.getWindowWidth()
    this.getWindowHeight()


  },
  mounted() {
    const apiUrl = "https://soft-aspects-cms.soft-aspects.net/?rest_route=/wp/v2/pages"
    axios.get(apiUrl)
      .then(response => {
        const posts = response.data
        const sampleId = 33
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
        this.draggableValue_off_booking.stopDragging = true
      } else {
        this.draggableValue_off_booking.stopDragging = false
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
    onSubmit(e) {
      e.preventDefault();
      let data = querystring.stringify(this.form)
      axios.post(
          "https://soft-aspects-cms.soft-aspects.net/mail.php",
          data
        )
        .then(res => {
          console.log(res)
          this.sent = true;
        });
        this.form.name = "";
        this.form.email = "";
        this.form.info = "";
        this.form.date = "";
        document.getElementById('thankYou').innerHTML = '<p>Thanks! I\'ll be in touch shortly. </p>'

    },
    submitted(e) {
      console.log("This fired!")
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

<style lang="css" scoped>
</style>
