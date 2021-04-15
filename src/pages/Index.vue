<script src="https://aframe.io/releases/1.0.2/aframe.min.js"/>
<script src="https://unpkg.com/aframe-orbit-controls@1.2.0/dist/aframe-orbit-controls.min.js"/>
<script src="https://unpkg.com/aframe-supercraft-loader@1.1.3/dist/aframe-supercraft-loader.js"/>
<script src="https://supereggbert.github.io/aframe-htmlembed-component/dist/build.js"/>
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
        <div v-for="(item,index) in cards" :key="index" class="card">
          <div class="contentView">
            <a-scene v-if="index==1" class="aframebox" embedded>
              <a-assets>
                <a-asset-item id="cityModel" src="../assets/3D/SensorNodePCB.obj"></a-asset-item>
              </a-assets>
              <a-entity rotation="-90 0 0">
                <a-entity :rotation="roll + ' ' + pitch + ' 0'" scale="0.4 0.4 0.4">
                  <a-entity position="-144 80 -4" obj-model="obj:#cityModel;"></a-entity>
                </a-entity>
              </a-entity>

              <a-entity
                camera
                look-controls
                orbit-controls="target: 0 1.6 -0.5; minDistance: 0.5; maxDistance: 150; initialPosition: 0 5 15"
              ></a-entity>
            </a-scene>
          </div>
          <div class="q-mt-sm" style="font-size:30px;color:white;max-width:300px;">{{item.title}}</div>
          <div
            class="q-mt-sm"
            style="font-size:20px;color:white;max-width:300px;"
          >{{item.description}}</div>
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
  height: 550px;
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
    height: auto;
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
import Vue from "vue";
import VueAframe from "vue-aframe";

Vue.use(VueAframe);

export default {
  name: "PageIndex",
  data() {
    return {
      roll: 0,
      pitch: 0,
      cards: [
        {
          title: "ThingsDash",
          description:
            "An Internet of Things dashboard application with the ability for the user to create its own UI and manages its things. ",
          picType: "picture",
          src: "",
          madeUsing: "Vue.js | Quasar"
        },
        {
          title: "SensorNode",
          description:
            "A Prototyping Platform for internet of things applications. ",
          picType: "3D",
          src: "",
          madeUsing: "KiCad | PlatformIO Embedded Framework"
        },
        {
          title: "Mecanum Wheel Robot",
          description:
            "A robot with mecanum wheels able to move in any direction.",
          picType: "3D",
          src: "",
          madeUsing: "Native Android Studio | Arduino"
        },
        {
          title: "Smart Touch Display with ESP32",
          description:
            "A touch display which shows the time, weather and gives some smart home functionalities.",
          picType: "3D",
          src: "",
          madeUsing: "ESP-IDF | Arduino"
        },
        {
          title: "LED Matrix ",
          description: "A LED Matrix Display with WiFi-functionalities",
          picType: "3D",
          src: "",
          madeUsing: "ESP-IDF | Arduino"
        },
        {
          title: "Room-Quality WebApp",
          description:
            "A roomquality Web-App for monitoring the Temps & CO2-Levels in classrooms",
          picType: "picture",
          src: "Blazor SSR | ASP.NET WebAPI | MySql"
        },
        {
          title: "Room-Quality Mobile App",
          description:
            "A roomquality Mobile-App for monitoring the Temps & CO2-Levels in classrooms",
          picType: "picture",
          src: "Flutter"
        },
        {
          title: "Blinds Controls",
          description:
            "A Device which is connected to the internet to turn on/off the blinds in a house.",
          picType: "3D",
          src: "",
          madeUsing: "ESP-IDF | Arduino"
        }
      ]
    };
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
  computed: {
    sensorNode() {
      return require("../assets/images/github_logo.png");
    }
  },
  beforeDestroy() {
    // Don't forget to turn the listener off before your component is destroyed
    this.$root.$off("scrollToSocials", () => {});
    this.$root.$off("scrollToProjekts", () => {});
    this.$root.$off("scrollToHome", () => {});
  }
};
</script>
