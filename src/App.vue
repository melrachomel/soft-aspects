<template>
<div id="app">
  <img alt="Soft Aspects logo" id="site-logo" src="./assets/logo.png" v-draggable>

  <div class="about block purple-bg" v-draggable>
    <h1>About</h1>
    <p>Soft Aspects is the astrology practice + project of Amelia Ehrhardt</p>

    <p>I offer chart readings, transit (forecast) readings, and relationship readings. My focus is on using astrology as a source of empathy for ourselves, and for strengthening our emotional capacity. I believe that astrology’s unique ability to
      accurately describe the human psyche offers an opportunity for us to take greater responsibility for our words and actions. I am particularly interested in astrology as a descriptor of the psychological weather we are collectively facing.</p>

    <p>My astrological work is informed by my ongoing artistic practice as a choreographer, my regular research, and my extensive study with Toronto-based astrologer Julia Beyer.</p>

    <a href="mailto:ehrhardta@gmail.com">Email me</a>

  </div>


  <div class="prices block green-bg" v-draggable>
    <h1>Prices</h1>
    <p>1 hour <br />
      Sliding scale $40 - $65</p>

    <p>In a one-hour reading we go over the major thematics of your natal chart, focusing on your sun, moon, and ascendant, and the planets that aspect them.</p>

    <p>1.5 hours<br>
      Sliding scale $75-$100</p>

    <p>In a 1.5 hour reading we do all of the above with either a dive into the outer planets or a brief look at your upcoming year of astrology.</p>

    <p>2 hours<br>
      Sliding scale $110 - $125</p>

    <p>In a 2 hour reading we go over the major thematics of your natal chart, look deeply into the relationships between outer and inner planets, and go over a forecast of your upcoming year of astrology.</p>
    </p>
  </div>

  <div class="ig block red-bg" v-draggable>
    <span><em><a href="https://www.instagram.com/soft_aspects/">@soft_aspects</a></em></span>
  </div>

  <!-- <div class="blog  block orange-bg" v-draggable>
    <h1>Astro blog</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum.</p>


  </div> -->

  <div class="video block" v-draggable>
    <div class="handler" :ref="handleId">
    </div>
    <iframe title="vimeo-player" src="https://player.vimeo.com/video/334798307" width="640" height="360" frameborder="0" allowfullscreen></iframe>
  </div>

</div>
</template>

<script>
// import drag from '@branu-jp/v-drag'
import {
  Draggable
} from 'draggable-vue-directive'

export default {
  name: 'app',
  directives: {
    // drag,
    Draggable,

  },
  data() {
    return {
      handleId: "handle-id",
      draggableValue: {
        handle: undefined
      }
    };
  },
  mounted() {
    this.draggableValue.handle = this.$refs[this.handleId];
    // let galleryScript = document.createElement('script')
    // galleryScript.setAttribute('src', 'https://www.instagram.com/embed.js')
    // document.head.appendChild(galleryScript)
  }
}
</script>

<style lang="scss">
//reset
body {
    margin: 0;
    // cursor: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png"), auto;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewport='0 0 128 128' style='fill:black;font-size:68px;'><text y='50%'>🌛</text></svg>") 16 0,auto;
    /*!emojicursor.app*/
}

#site-logo {
    position: absolute;
    z-index: 9999;
    // max-width: 500px;
}

#app {
    font-family: serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
    background: #E6EA6B;
    background: rgb(230,234,107);
    background: linear-gradient(90deg, rgba(230,234,107,1) 0%, rgba(247,251,123,1) 18%, rgba(255,255,255,1) 100%);
    height: 100vh;
    // margin-top: 60px;

    // TRANSITION EVERYTHING
    // * {
    //     transition: all 0.1s ease-in;
    //     transition-property: all;
    //     transition-duration: 250ms;
    //     transition-timing-function: ease-in;
    //     transition-delay: 0s;
    // }

    // COLOURS
    $purple: #C5A5CB;
    $green: #7cf972;
    $orange: #F4C891;
    $red: #f05656;

    .block {
        position: absolute;
        padding: 30px;
        color: white;
    }

    //PAGES
    .about {
        max-width: 25%;
        top: 10%;
        left: 20%;
        z-index: 200;
    }

    .prices {
        max-width: 25%;
        top: 20%;
        left: 30%;
        z-index: 150;
    }

    .ig {
      // max-width: 25%;
      top: 40%;
      z-index: 9999;
      opacity: .65;
      span {
        font-size: 5em;
        a {
          text-decoration: none;
          color: white;
        }
      }
    }

    .blog {
        max-width: 25%;
        top: 30%;
        left: 40%;
        z-index: 100;
    }

    .video {
        z-index: 50;
        top: 40%;
        left: 50%;

        .handler {
            position: absolute;
            width: 640px;
            height: 310px;
        }
    }

    //END PAGES

    //BACKGROUNDS
    .purple-bg {
        background: $purple;
    }

    .green-bg {
        background: $green;
    }

    .orange-bg {
        background: $orange;
    }

    .red-bg {
      background: $red;
    }
    //END BACKGROUNDS
}

h1,
h2 {
    font-weight: normal;
}
p {
    font-size: 1.25em;
}
ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
