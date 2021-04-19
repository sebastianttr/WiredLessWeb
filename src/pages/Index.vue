<script src="https://aframe.io/releases/1.0.2/aframe.min.js"/>
<script src="https://unpkg.com/aframe-orbit-controls@1.2.0/dist/aframe-orbit-controls.min.js"/>
<script src="https://unpkg.com/aframe-supercraft-loader@1.1.3/dist/aframe-supercraft-loader.js"/>
<script src="https://supereggbert.github.io/aframe-htmlembed-component/dist/build.js"/>
<template>
  <q-page id="page" class="flex flex-center bg-grey-10">
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
          <a-scene class="aframebox contentView3D q-mb-sm" vr-mode-ui="enabled: false" embedded>
            <a-assets>
              <a-asset-item id="cityModel" src="SensorNodePCB.obj"></a-asset-item>
              <img id="my-image" src="Dashboard_Bild1.PNG">
            </a-assets>
            <a-entity
              camera
              look-controls
              orbit-controls="target: 0 1.6 -0.5; minDistance: 0.5; maxDistance: 150; initialPosition: 0 5 15"
            >
              <a-entity v-if="index==1" rotation="0 0 0">
                <a-entity :rotation="'0 '+modelsRotation+' 0'" scale="0.4 0.4 0.4">
                  <a-entity :position="'-144 '+modelsPosition+' -4'" obj-model="obj:#cityModel;"></a-entity>
                </a-entity>
              </a-entity>
            </a-entity>
            <a-entity
              camera
              look-controls="false"
              orbit-controls="target: 0 1.6 -0.5; minDistance: 0.5; maxDistance: 150; initialPosition: 0 5 15"
            >
              <a-entity v-if="index==0" id="rig" scale="30 30 30">
                <a-entity position="0 -0.45 0" rotation="180 0 0">
                  <a-entity
                    geometry="primitive: box"
                    material="color: #545454"
                    scale="1.5 0.05 1"
                    color="#545454"
                  ></a-entity>
                  <a-entity position="0 0 0.5" rotation="-100 0 0">
                    <a-box position="0 0 -0.5" scale="1.5 0.05 1.05" color="#545454"></a-box>
                    <a-image position="0 0.03 -0.5" rotation="-90 0 0" width="1.45" src="#my-image"></a-image>
                  </a-entity>
                </a-entity>
              </a-entity>
            </a-entity>
          </a-scene>

          <div style="font-size:30px;color:white;max-width:300px;">{{item.title}}</div>
          <div
            class="q-mt-sm"
            style="font-size:20px;color:white;max-width:300px;"
          >{{item.description}}</div>
        </div>
      </div>
    </div>

    <!-- Tech Stack Section -->

    <div id="techstack" class="fit column wrap justify-center items-center content-center q-ma-md">
      <div style="font-size:50px; color:white;margin:10px;">My Tech Stack</div>
      <div class="fit column wrap justify-center items-center content-center">
        <div style="position:relative;margin-left:-35vw;margin-top:60px;">
          <div id="stack__layer1" class="layer-stack__layer stack__layer1"></div>
          <div id="stack__layer2" class="layer-stack__layer stack__layer2"></div>
          <div id="stack__layer3" class="layer-stack__layer stack__layer3"></div>
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

.projectsPic {
  border-style: hidden;
  border-radius: 10px;
  float: left;
  width: 300px;
  height: 300px;
  object-fit: cover;
}

.wiredlessTitle {
  animation: fadein 4s;
  color: black;
  font-size: 40px;
}

.cardSocials {
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

.contentViewPicture {
  width: 300px;
  height: 300px;
  background-color: white;
}

.contentView3D {
  width: 300px;
  height: 300px;
}

.layer-stack__layer {
  height: 250px;
  width: 250px;
  position: relative;
  transform: rotateX(45deg) rotateZ(45deg) translateZ(0);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-out;
  border: solid grey;
  border-radius: 10px;
}

.stack__layer1 {
  background: #363636;
  z-index: 2;
}

.stack__layer2 {
  z-index: 1;
  transform: rotateX(45deg) rotateZ(45deg) translateZ(300px);
  background: #363636;
}

.stack__layer3 {
  transform: rotateX(45deg) rotateZ(45deg) translateZ(600px);
  background: #363636;
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

  .contentViewPicture {
    width: 100%;
    height: auto;
    background-color: white;
  }

  .contentView3D {
    width: 100%;
  }
}
</style>

<script>
import { setTimeout, setInterval } from "timers";
import Vue from "vue";
import VueAframe from "vue-aframe";
import "../libs/aframe_orbit.js";
import "../libs/aframe-supercratf-loader.js";
import { scroll } from "quasar";
const { getScrollPosition, setScrollPosition } = scroll;

Vue.use(VueAframe);

Vue.config.ignoredElements = [/a-.*/];

export default {
  name: "PageIndex",
  data() {
    return {
      roll: 0,
      pitch: 0,
      laptopModelAngels: 0,
      laptopModelCamDistance: 0,
      modelsRotation: 0,
      modelsPosition: 0,
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
    },
    scrollToSection(section) {
      const yOffset = -60;
      const ele = document.getElementById(section); // You need to get your element here
      const y = ele.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
    map(value, min1, max1, min2, max2) {
      return ((value - min1) * (max2 - min2)) / (max1 - min1) + min2;
    },
    computeLaptopAngle(percentage) {
      var openedAngle = 110;
    },
    computeLaptopCamDistance(percentage) {
      var openedDistance = 0;
    },
    compute3DModelsTransformation(percentage) {
      this.modelsPosition = this.map(percentage, 0, 100, 30, 85);
      this.modelsRotation = this.map(percentage, 0, 100, -110, 0);
    },
    computeStackPositions(percentage) {
      var positionedLayer2 = 300;
      var positionedLayer3 = 600;

      var posLayer2 = this.map(percentage, 0, 100, positionedLayer2, 100);
      var posLayer3 = this.map(percentage, 0, 100, positionedLayer3, 200);

      document.getElementById("stack__layer2").style.opacity = percentage / 100;
      document.getElementById("stack__layer2").style.transform =
        "rotateX(45deg) rotateZ(45deg) translateZ(" + posLayer2 + "px)";

      document.getElementById("stack__layer3").style.opacity = percentage / 100;
      document.getElementById("stack__layer3").style.transform =
        "rotateX(45deg) rotateZ(45deg) translateZ(" + posLayer3 + "px)";
    }
  },
  created() {
    console.log("Browser Height: " + window.innerHeight);
    var v = this;

    this.$root.$on("scrollToProjekts", msg => {
      v.scrollToSection("projects");
    });

    this.$root.$on("scrollToSocials", msg => {
      v.scrollToSection("socials");
    });

    this.$root.$on("scrollToHome", msg => {
      v.scrollToSection("main");
    });

    document.addEventListener("scroll", function(e) {
      //projects
      var scrollRelativeToTop =
        document.getElementById("main").getBoundingClientRect().bottom - 60;
      scrollRelativeToTop = scrollRelativeToTop >= 0 ? scrollRelativeToTop : 0;
      var min1 = 0;
      var max1 = window.innerHeight;

      var mappedRange_Projects = Math.round(
        v.map(scrollRelativeToTop, min1, max1, 100, 0)
      );

      //tech stack

      var scrollRelativeToTop_TechStack = document
        .getElementById("techstack")
        .getBoundingClientRect().top;
      scrollRelativeToTop_TechStack =
        scrollRelativeToTop_TechStack >= 0 ? scrollRelativeToTop_TechStack : 0;

      var mappedRange_techstack = Math.round(
        v.map(scrollRelativeToTop_TechStack, min1, max1, 100, 0)
      );

      //console.log(mappedRange_techstack);
      //console.log(scrollRelativeToTop_TechStack);

      //computes

      //console.log(mappedRange);
      v.computeLaptopAngle(mappedRange_Projects);
      v.computeLaptopCamDistance(mappedRange_Projects);
      v.compute3DModelsTransformation(mappedRange_Projects);
      v.computeStackPositions(mappedRange_techstack);
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
