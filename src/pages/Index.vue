<template>
  <q-page class="flex flex-center bg-grey-10">
    <!-- Main Section -->

    <div id="main" class="main" style="color:white">
      <div class="fit column wrap justify-center items-start content-center">
        <div class="fadeInThisIs" style="font-size:20px;color:black;">This is</div>

        <div class="wiredlessTitle">
          <b>@wiredlessmaker</b>
        </div>

        <div class="fadeInAka" style="font-size:20px;color:black;">also known as Sebastian Tatar</div>
      </div>
    </div>

    <!-- Projekts Section -->

    <div id="projects" class="fit column wrap justify-center items-center content-center">
      <div style="font-size:50px; color:white;margin:10px;">Projects</div>
      <div class="fit row wrap justify-center items-center content-center">
        <div class="card">
          <div class="contentView">pic or 3D</div>
          <div style="font-size:20px">Flutter App</div>
        </div>
        <div class="card">
          <div class="contentView">pic or 3D</div>
          <div style="font-size:20px">Flutter App</div>
        </div>
        <div class="card">
          <div class="contentView">pic or 3D</div>
          <div style="font-size:20px">Flutter App</div>
        </div>
        <div class="card">
          <div class="contentView">pic or 3D</div>
          <div style="font-size:20px">Flutter App</div>
        </div>
        <div class="card">
          <div class="contentView">pic or 3D</div>
          <div style="font-size:20px">Flutter App</div>
        </div>
        <div class="card">
          <div class="contentView">pic or 3D</div>
          <div style="font-size:20px">Flutter App</div>
        </div>
      </div>
    </div>

    <!-- Socials Section -->

    <div id="socials" class="fit column wrap justify-center items-center content-center q-ma-md">
      <div style="font-size:50px; color:white;margin:10px;">Socials</div>
      <div class="fit column wrap justify-center items-center content-center">
        <div class="cardSocials" @click="redirectInsta()">
          <img class="socials_icon" src="../assets/images/instagram_logo.png">
          <div>Instagram</div>
          <div style="font-size:25px">@wired_less_maker</div>
        </div>
        <div class="cardSocials" @click="redirectGithub()">
          <img class="socials_icon" src="../assets/images/github_logo.png">
          <div>Github</div>
          <div style="font-size:25px">wired_less_maker</div>
        </div>
      </div>
      <div></div>
    </div>
  </q-page>
</template>

<style>
.main {
  width: 100%;
  height: 100vh;
  background: white;
}

.maintext {
  background-color: red;
  transition: background-color 2s ease-in;
}

.maintext {
  margin-top: 25px;
  font-size: 21px;
  text-align: center;

  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;
}

.fadeInThisIs {
  animation: fadein 1.4s;
}

.fadeInAka {
  animation: fadein 3.2s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.heigth100 {
  height: 1000px;
}
.socials_icon {
  margin-left: -3px;
  margin-top: -3px;
  margin-bottom: -1px;
  margin-right: 10px;
  border-style: hidden;
  border-radius: 10px;
  max-width: 120px;
  float: left;
  width: 100px;
  height: 100;
  object-fit: cover;
}

.wiredlessTitle {
  animation: fadein 4s;
  color: black;
  font-size: 40px;
}

.cardSocials {
  border: solid #363636;
  background: #363636;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 2px 2px 15px rgba(0, 10, 12, 0.8);
  color: white;
  width: 400px;
  padding: 10px;
  transition: 500ms;
}

.cardSocials:hover {
  box-shadow: 2px 2px 15px rgba(242, 105, 7, 0.4);
  transition: 500ms;
}

.card {
  border: solid #363636;
  background: #363636;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 5px 5px 15px rgba(0, 10, 12, 0.4);
  color: black;
  padding: 10px;
  transition: 500ms;
}

.card:hover {
  box-shadow: 2px 2px 15px rgba(242, 105, 7, 0.4);
  transition: 500ms;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-enter-to {
  opacity: 1;
}

@font-face {
  font-family: "Montserrat";
  src: "../assets/fonts/Montserrat-Regular.ttf";
}

.contentView {
  width: 300px;
  height: 300px;
  border: solid black;
  border-radius: 10px;
}

@media only screen and (max-width: 768px) {
  .card {
    width: 100%;
  }
  .wiredlessTitle {
    color: black;
    font-size: 30px;
  }

  .cardSocials {
    width: 100%;
  }
}
</style>


<script>
import { scroll } from "quasar";
const { getScrollTarget, setScrollPosition } = scroll;
import { setTimeout } from "timers";

export default {
  name: "PageIndex",
  data() {
    return {};
  },
  methods: {
    redirectInsta() {
      window.location.href = "https://www.instagram.com/wired_less_maker/";
    },
    redirectGithub() {
      window.location.href = "https://github.com/sebastianttr";
    }
  },
  created() {
    this.$root.$on("scrollToProjekts", msg => {
      const yOffset = -60;
      const ele = document.getElementById("projects"); // You need to get your element here
      const y = ele.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });

    this.$root.$on("scrollToSocials", msg => {
      const yOffset = -50;
      const ele = document.getElementById("socials"); // You need to get your element here
      const y = ele.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });

    this.$root.$on("scrollToHome", msg => {
      const ele = document.getElementById("main"); // You need to get your element here
      const y = ele.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  },
  beforeDestroy() {
    // Don't forget to turn the listener off before your component is destroyed
    this.$root.$off("scrollToSocials", () => {});
    this.$root.$off("scrollToProjekts", () => {});
    this.$root.$off("scrollToHome", () => {});
  }
};
</script>
