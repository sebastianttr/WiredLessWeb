<template>
  <q-page id="page" class="flex flex-center bg-grey-10">
    <!-- Main Section -->

    <div id="main" class="main" style="background-color:white;">
      <div class="fit column wrap justify-center items-start content-center">
        <div class="fadeInThisIs" style="font-size:20px;">This is</div>

        <div class="wiredlessTitle">@wiredlessmaker</div>

        <div class="fadeInAka" style="font-size:20px;">by Sebastian Tatar</div>
        <div class="row justify-center items-start content-center q-ma-sm">
          <q-btn
            class="q-ma-sm"
            push
            color="deep-orange-10"
            @click="scrollToSection('projects')"
            label="Explore Projects"
          />
          <q-btn
            class="q-ma-sm"
            outline
            color="deep-orange-10 "
            @click="scrollToSection('tryouts')"
            label="Try Out!"
          />
        </div>
      </div>
       <div>

       </div>
    </div>

    <!-- Projects Section -->
    <div id="projects" class="fit column wrap justify-center items-center content-center">
      <div style="font-size:50px; color:white;margin:10px;">Projects</div>
      <div class="fit row wrap justify-center items-center content-center">
        <div v-for="(item,index) in cards" :key="index" class="card">
          <q-img
            :src="item.src"
            :img-style="{'border-radius':'15px','box-shadow': '2px 2px 15px rgba(0, 10, 12, 0.8);'}"
            :ratio="1"
          />
          <div style="font-size:30px;color:white;max-width:300px;margin-top:10px;">{{item.title}}</div>
          <div
            class="q-mt-sm"
            style="font-size:20px;color:white;max-width:300px;"
          >{{item.description}}</div>
        </div>
      </div>
    </div>

    <!-- Try-Outs Section -->
    <div id="tryouts" class="fit column wrap justify-center items-center content-center q-ma-md q-mt-xl">
      <div style="font-size:50px; color:white;margin:10px;">Try these out:</div>
      <div
        v-for="(item,index) in tryouts"
        :key="index"
        class="fit column wrap justify-center items-center content-center q-ma-md q-pa-md"
        style="color:white;"
      >
        <video class="tryoutVideo" autoplay loop muted>
          <source :src="item.videopath" type="video/mp4">
        </video>
        <div style="font-size:35px; margin-top:10px;">{{item.title}}</div>
        <div style="font-size:15px; margin-top:10px;">{{item.description}}</div>
        <q-btn
          class="q-ma-md"
          outline
          color="deep-orange-10"
          label="Try It Out"
          @click="redirect(item.link)"
        />
      </div>
    </div>

    <!-- Socials Section -->

    <div id="socials" class="fit column wrap justify-center items-center content-center q-ma-md">
      <div style="font-size:50px; color:white;margin:10px;">Socials</div>
      <div class="fit column wrap justify-center items-center content-center">
        <div class="cardSocials" @click="redirectInsta()">
          <img class="socials_icon" src="../../public/assets/images/instagram_logo.png">
          <div>Instagram</div>
          <div style="font-size:25px">@wired_less_maker</div>
        </div>
        <div class="cardSocials" @click="redirectGithub()">
          <img class="socials_icon" src="../../public/assets/images/github_logo.png">
          <div>Github</div>
          <div style="font-size:25px">wired_less_maker</div>
        </div>
      </div>
    </div>
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space/>

          <q-btn
            dense
            flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle"
          >
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle"
          >
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section
          class="q-pt-none"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { setTimeout, setInterval } from "timers";
import Vue from "vue";
//import VueAframe from "vue-aframe";
//import "../libs/aframe_orbit.js";
//import "../libs/aframe-supercratf-loader.js";
import { scroll } from "quasar";
const { getScrollPosition, setScrollPosition } = scroll;

//Vue.use(VueAframe);

Vue.config.ignoredElements = [/a-.*/];

export default {
  name: "PageIndex",
  data() {
    return {
      dialog: false,
      maximizedToggle: true,
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
          type: "app",
          src: "/pictures/ThingsDash.PNG",
          imgSrc: "ThingsDash_iphone12promaxgraphite_portrait.PNG",
          madeUsing: "Vue.js | Quasar",
          options: {
            scale: {
              x: 0.15,
              y: 0.15,
              z: 0.15
            },
            rotation: {
              yaw: 0,
              roll: 0,
              pitch: 0
            },
            position: {
              x: 10,
              y: -18,
              z: -3.5
            }
          }
        },
        {
          title: "Mecanum Wheel Robot",
          description:
            "A robot with mecanum wheels able to move in any direction.",
          type: "app",
          madeUsing: "Native Android Studio | Arduino",
          src: "/pictures/MecanumWheelRobot.PNG",
          imgSrc: "MecanumWheelRobot_iphone12promaxgraphite_portrait.PNG",
          options: {
            scale: {
              x: 0.15,
              y: 0.15,
              z: 0.15
            },
            rotation: {
              yaw: 0,
              roll: 0,
              pitch: 0
            },
            position: {
              x: 10,
              y: -18,
              z: -3.5
            }
          }
        },
        {
          title: "Presentr",
          description:
            "A web app for sharing live captures from remote resources",
          type: "app",
          madeUsing: "Vue | Quasar | Node.js",
          src: "/pictures/Presentr.PNG",
          options: {
            scale: {
              x: 0.25,
              y: 0.25,
              z: 0.25
            },
            rotation: {
              yaw: 0,
              roll: 0,
              pitch: 0
            },
            position: {
              x: 8.5,
              y: 3.5,
              z: 0
            }
          }
        },
        {
          title: "Gmail2ECM",
          description:
            "A web app for sharing live captures from remote resources -> https://www.gmail2ecm.com/",
          type: "app",
          madeUsing: "React | Gatsby | Spring Boot",
          src: "/pictures/Gmail2ECM.PNG",
          options: {
            scale: {
              x: 0.25,
              y: 0.25,
              z: 0.25
            },
            rotation: {
              yaw: 0,
              roll: 0,
              pitch: 0
            },
            position: {
              x: 8.5,
              y: 3.5,
              z: 0
            }
          },
          onOpenLinkClick:"https://www.gmail2ecm.com/"
        },


        {
          title: "Room-Quality Mobile/Web App",
          description:
            "A roomquality Mobile/Web App for monitoring the Temps & CO2-Levels in classrooms",
          type: "app",
          src: "/pictures/RaumklimaAppPNG.PNG",
          imgSrc: "RaumklimaApp_iphone12promaxgraphite_portrait.PNG",
          options: {
            scale: {
              x: 0.15,
              y: 0.15,
              z: 0.15
            },
            rotation: {
              yaw: 0,
              roll: 0,
              pitch: 0
            },
            position: {
              x: 10,
              y: -18,
              z: -3.5
            }
          }
        }
        /*
        {
          title: "LED Matrix ",
          description: "A LED Matrix Display with WiFi-functionalities",
          type: "device",
          src: "",
          madeUsing: "ESP-IDF | Arduino"
        },
        {
          title: "Blinds Controls",
          description:
            "A Device which is connected to the internet to turn on/off the blinds in a house.",
          type: "device",
          src: "",
          madeUsing: "ESP-IDF | Arduino"
        }
        */
      ],
      stacksWeb: [
        {
          name: "Vue.js",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
        },
        {
          name: "Quasar",
          imgSrc: "favicon.ico"
        },
        {
          name: "Blazor",
          imgSrc:
            "https://devblogs.microsoft.com/aspnet/wp-content/uploads/sites/16/2019/04/BrandBlazor_nohalo_1000x.png"
        },
        {
          name: "ASP.NET",
          imgSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jBXxdLLo5W9GdGSPHdb0aY07TKpVddtCCnLk68mZ1OM_CiPzzlXxoZpxyZylx8k8R8E&usqp=CAU"
        },
        {
          name: "Node.js",
          imgSrc:
            "https://icons-for-free.com/iconfiles/png/512/install+javascript+js+node+npm+tools+icon-1320165731324625592.png"
        }
      ],
      stacksMobile: [
        {
          name: "Flutter",
          imgSrc: "https://img.icons8.com/color/452/flutter.png"
        },
        {
          name: "Vue.js",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
        },
        {
          name: "Quasar",
          imgSrc: "favicon.ico"
        }
      ],
      stacksEmbedded: [
        {
          name: "Arduino",
          imgSrc:
            "https://w7.pngwing.com/pngs/676/338/png-transparent-arduino-computer-software-library-electronics-computer-electronics-baby-computer-thumbnail.png"
        },
        {
          name: "ESP-IDF",
          imgSrc:
            "https://media.glassdoor.com/sqll/1451712/espressif-squarelogo-1584093022410.png"
        },
        {
          name: "MDK-ARM",
          imgSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxpuGMpGHAFyc9ElwwrBGnWwfdGBfaRCyJKxeGOM4aZPP8b54Yv6pUHZMoiv4ILjz8dM&usqp=CAU"
        }
      ],
      tryouts: [
        {
          title: "Presentation App for MS Teams and Zoom",
          description:
            "When you have multiple video inputs and want to display it all on one screen.",
          link: "https://presentr.wiredless.io/",
          videopath: "/videos/webrtc_presentration_app.mp4"
        },
        {
          title: "ThingsDash - An app for your Internet of Things uses",
          description:
            "A dashboard application for visualizing and managing data from smart devices.",
          link: "https://wiredless.io/#/error",
          videopath: "/videos/thingsdash_demovideo.mp4"
        },
        {
          title: "Room Climate App",
          description:
            "Monitor the room climate indoor to make sure the climate is well",
          link: "https://wiredless.io/#/error",
          videopath: "/videos/room_climate.mp4"
        }
      ]
    };
  },
  methods: {
    redirect(link) {
      window.location.href = link;
    },
    redirectInsta() {
      window.location.href = "https://www.instagram.com/wired_less_maker/";
    },
    redirectGithub() {
      window.location.href = "https://github.com/sebastianttr";
    },
    handleOnClickOpenLink(link){
      if(String(link).length != 0)
        window.location.href = link;
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
      this.modelsPosition = this.map(percentage, 0, 100, 30, 85); //position up 3D Models
      this.modelsRotation = this.map(percentage, 0, 100, -110, 0); //rotate 3D Models

      const c = this.map(percentage, 8, 100, 255, 0); //color reranged from 0-255
      //console.log(c);
      document.getElementById(
        "main"
      ).style.backgroundColor = `rgb(${c},${c},${c})`;
    },
    computeStackPositions(percentage) {
      /*
      var positionedLayer2 = 300;
      var positionedLayer3 = 600;

      var posLayer2 = this.map(percentage, 0, 100, positionedLayer2, 100);
      var posLayer3 = this.map(percentage, 0, 100, positionedLayer3, 200);

      document.getElementById("layer2").style.opacity = percentage / 100;
      document.getElementById("layer2").style.transform =
        "rotateX(45deg) rotateZ(45deg) translateZ(" + posLayer2 + "px)";

      document.getElementById("layer3").style.opacity = percentage / 100;
      document.getElementById("layer3").style.transform =
        "rotateX(45deg) rotateZ(45deg) translateZ(" + posLayer3 + "px)";

      //repurpose
      posLayer2 = this.map(percentage, 0, 100, 100, 250);
      posLayer3 = this.map(percentage, 0, 100, 100, 350);

      document.getElementById("desc_layer2").style.opacity = percentage / 100;
      document.getElementById("desc_layer2").style.top = posLayer2 + "px";
      //"translateY(" + posLayer2 + "px)";

      document.getElementById("desc_layer3").style.opacity = percentage / 100;
      document.getElementById("desc_layer3").style.top = posLayer3 + "px";
      //"translateY(" + posLayer2 + "px)";
      */
    },
    limitRange(value, min, max) {
      return Math.min(Math.max(parseInt(value), min), max);
    },
    handleScroll(){
      var v = this;

      var scrollRelativeToTop =
        document.getElementById("main").getBoundingClientRect().bottom - 60;
      // -60 becausse navigation bar
      scrollRelativeToTop = scrollRelativeToTop >= 0 ? scrollRelativeToTop : 0;
      var min1 = 0;
      var max1 = window.innerHeight;

      var mappedRange_Projects = Math.round(
        v.map(scrollRelativeToTop, min1, max1, 100, 0)
      );
      mappedRange_Projects = v.limitRange(mappedRange_Projects, 0, 100);

      //computes

      v.computeLaptopAngle(mappedRange_Projects);
      v.computeLaptopCamDistance(mappedRange_Projects);
      v.compute3DModelsTransformation(mappedRange_Projects);
    }
  },
  created() {
    console.log("Browser Height: " + window.innerHeight);
    var v = this;

    this.$root.$on("scrollToTryouts", msg => {
      v.scrollToSection("tryouts");
    });

    this.$root.$on("scrollToProjekts", msg => {
      v.scrollToSection("projects");
    });

    this.$root.$on("scrollToSocials", msg => {
      v.scrollToSection("socials");
    });

    this.$root.$on("scrollToHome", msg => {
      v.scrollToSection("main");
    });

    this.$root.$on("scrollToStack", msg => {
      v.scrollToSection("techstack");
    });

    document.addEventListener("scroll", this.handleScroll);
  },
  computed: {
  },
  beforeDestroy() {
    // Don't forget to turn the listener off before your component is destroyed
    this.$root.$off("scrollToTryouts", () => {});
    this.$root.$off("scrollToStack", () => {});
    this.$root.$off("scrollToSocials", () => {});
    this.$root.$off("scrollToProjekts", () => {});
    this.$root.$off("scrollToHome", () => {});
    document.removeEventListener('scroll',this.handleScroll);
  }
};
</script>

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

.tryoutVideo {
  max-width: 40vw;
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
  background-color: black;
  color: white;
  animation: fadein 1.4s;
}

.fadeInAka {
  background-color: black;
  color: white;
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
  animation-name: reducetime;
  animation-duration: 4s;
  background-color: black;
  color: white;
  left: 0;
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
  box-shadow: 2px 2px 15px #bf360c;
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
  box-shadow: 2px 2px 15px #bf360c;
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

.contentViewPicture {
  width: 300px;
  height: 300px;
  background-color: white;
}

.contentView3D {
  /*pointer-events: none;*/
  width: 300px;
  height: 300px;
}

.stackLayer {
  position: relative;
  margin-top: 60px;
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

.stackdesc__layer1 {
  color: white;
  transition: all 0.3s ease-out;
  top: 150px;
  position: relative;
}

.stackdesc__layer2 {
  color: white;
  transition: all 0.3s ease-out;
  position: relative;
}

.stackdesc__layer3 {
  color: white;
  transition: all 0.3s ease-out;
  position: relative;
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
.stackImg {
  margin-top: 35px;
  margin-left: 35px;

  object-fit: cover;
  max-width: 175px;
}

.stackDesc {
  display: auto;
}

.chipStyle {
  max-width: 40vh;
}

@font-face {
  font-family: "Montserrat";
  src: "../assets/fonts/Montserrat-Regular.ttf";
}

@media only screen and (max-width: 768px) {
  .card {
    width: 100%;
    height: auto;
  }
  .wiredlessTitle {
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

  .chipStyle {
    max-width: 100%;
  }

  .stackDesc {
    display: none;
  }

  .tryoutVideo {
    max-width: 92vw;
  }
}
</style>
