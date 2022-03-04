<template>
  <q-page id="page" class="flex flex-center bg-grey-10">

    <!-- Main Section -->
    <div id="main" class="main">
      <div class="fit column wrap justify-center items-start content-center">
        <h1 class="myHeader1">Hello!</h1>
        <h1 class="myHeader2">I am Sebastian Tatar</h1>
        <div>
          <span class="text-h4">i'm a</span>
          <loopedanimatedaext
            id="animatedText"
            :titles="loopedAnimtedTextContent"
            :fontSize="'45px'"
            :color="'#bf360c'"
            :start="true"
            />
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div id="projects" class="fit column wrap justify-center items-center content-center">
      <animatedtext
        id="projectsTitle"
        class="q-mb-sm"
        :title="'My work.'"
        :fontSize="'50px'"
        :color="'#bf360c'"
        :start="scrollAppearElements[0].state">
      </animatedtext>
      <div class="myProjectsBox scrollAppearContainer">
        <div v-for="(project,index) in projectsList" :key="index*3000" class="myProjectCards scrollAppearItem">
          <img :src="project.img" alt="Picture of one of my project">
          <span>
            <p class="myProjectsCardTitle">{{project.title}}</p>
            <div class="myProjectCardSeparator"/>
            <p class="myProjectsCardDesc">{{project.desc}}</p>
          </span>
        </div>
      </div>
    </div>

    <!-- Try-Outs Section -->
    <div id="tryouts" class="fit column wrap justify-center items-center content-center q-ma-md q-mt-xl">
       <animatedtext
        id="tryOutsTitle"
        class="q-mb-sm"
        :title="'Tryouts.'"
        :fontSize="'50px'"
        :color="'#bf360c'"
        :start="scrollAppearElements[1].state">
      </animatedtext>
      <div class="scrollAppearContainer">
        <div
          v-for="(item,index) in tryouts"
          :key="index"
          class="fit column wrap justify-center items-center content-center q-ma-md q-pa-md scrollAppearItem"
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
import AnimatedText from "src/components/AnimatedText.vue";
import LoopedAnimatedText from "src/components/LoopedAnimatedText.vue";
import ScrollAnimationHandler from "src/handlers/ScrollAnimationHandler.js";
import Vue from "vue";
import { scroll } from "quasar";
const { getScrollPosition, setScrollPosition } = scroll;

const animatedTextContents = [
  "Web Developer.",
  "Student.",
  "Maker.",
  "Web Designer.",
  "Developer."
]

Vue.config.ignoredElements = [/a-.*/];

const projects = [
  {
    title:"ThingsDash",
    desc:"An app for visualizing internet of things devices in various areas",
    img:"assets/images/pictures_frontpage/ThingsDash.png"
  },
  {
    title:"Mecanum Wheel Robot",
    desc:"A robot with mecanum wheels able to move in any direction.",
    img:"assets/images/pictures_frontpage/MecanumWheelRobot.png"
  },
  {
    title:"Presentr",
    desc:"A web app for sharing live captures from remote resources",
    img:"assets/images/pictures_frontpage/Presentr.png"
  },
  {
    title:"Gmail2ECM",
    desc:"A web app for sharing live captures from remote resources",
    img:"assets/images/pictures_frontpage/Gmail2ECM.png"
  },
  {
    title:"Room-Quality Mobile/Web App",
    desc:"A roomquality Mobile/Web App for monitoring the Temps & CO2-Levels in classrooms",
    img:"assets/images/pictures_frontpage/RaumklimaAppPNG.png"
  },
  {
    title:"EXOCars",
    desc:"A static website for buying/selling special kinds of cars",
    img:"assets/images/pictures_frontpage/EXOCars.png"
  },
]

export default {
  name: "PageIndex",
  components:{
    "animatedtext":AnimatedText,
    "loopedanimatedaext":LoopedAnimatedText
  },
  data() {
    return {
      dialog: false,
      maximizedToggle: true,
      loopedAnimtedTextContent:animatedTextContents,
      projectsList: projects,
      intersectionObserver:null,
      scrollAppearElements:[
        {
          id:"projectsTitle",
          state: false
        },
        {
          id:"tryOutsTitle",
          state: false
        }
      ],
      scrollAppearHandler:null,
      tryouts: [
        {
          title: "Presentation App for MS Teams and Zoom",
          description:
            "When you have multiple video inputs and want to display it all on one screen.",
          link: "https://presentr.wiredless.io/",
          videopath: "assets/videos/webrtc_presentration_app.mp4"
        },
        {
          title: "ThingsDash - An app for your Internet of Things uses",
          description:
            "A dashboard application for visualizing and managing data from smart devices.",
          link: "https://wiredless.io/#/error",
          videopath: "assets/videos/thingsdash_demovideo.mp4"
        },
        {
          title: "Room Climate App",
          description:
            "Monitor the room climate indoor to make sure the climate is well",
          link: "https://wiredless.io/#/error",
          videopath: "assets/videos/room_climate.mp4"
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
    },
    delay(t) {
      return new Promise(resolve => {
          setTimeout(() => resolve(), t);
      })
    },

    getDOMel(id){
      return document.getElementById(id);
    },
    attachAllElements(){
      this.scrollAppearElements.forEach(item => {
        this.intersectionObserver.observe(this.getDOMel(item.id));
      });
    },
  },
  created() {
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
  beforeDestroy() {
    // Don't forget to turn the listener off before your component is destroyed
    this.$root.$off("scrollToTryouts", () => {});
    this.$root.$off("scrollToStack", () => {});
    this.$root.$off("scrollToSocials", () => {});
    this.$root.$off("scrollToProjekts", () => {});
    this.$root.$off("scrollToHome", () => {});
    document.removeEventListener('scroll',this.handleScroll);
  },
  mounted(){
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          this.scrollAppearElements.filter(item => entry.target.id == item.id)[0].state = true;
        }
      });
    });

    this.scrollAppearElements.forEach(item => {
      this.intersectionObserver.observe(this.getDOMel(item.id));
    });

    this.scrollAppearHandler = new ScrollAnimationHandler(0,40);
  }
};
</script>

<style>

@font-face {
  font-family: "MontserratSemiBold";
  src: url("../../public/assets/fonts/montserrat/Montserrat-SemiBold.ttf");
}

@font-face {
  font-family: "Montserrat";
  src: url("../../public/assets/fonts/montserrat/Montserrat-Medium.ttf");
}

@font-face {
  font-family: "MontserratBold";
  src: url("../../public/assets/fonts/montserrat/Montserrat-Bold.ttf");
}

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

.myHeader1{
  font-size: 5em;
  margin:0;
  font-family: "MontserratSemiBold";
  color:#bf360c;
}

.myHeader2{
  margin:0;
  font-family: "MontserratBold";
}

#animatedText{
  display: inline;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
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

#projects{
  overflow:hidden;
}

#projectsTitle{
  opacity: 0;
  transition: opacity 1.5s cubic-bezier(.03,1.12,.82,.99) 0.5s;
  margin:10px;
  font-family: "MontserratBold";
}


.myProjectsBox{
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  overflow: hidden;
}

.myProjectCards{
  position: relative;

  height: 300px;
  flex-grow: 1;
  padding: 0;

  min-width: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;

  overflow:hidden;
  cursor:pointer;
}

.myProjectCards:hover span{
  opacity: 1;
  background-color: rgba(0, 10, 12, 0.6);
  padding-top:0px;
}

.myProjectCards:hover img{
  filter: blur(2px);
}

.myProjectCards:hover span .myProjectCardSeparator{
  width: 40%;
}

.myProjectCards img{
  position: absolute;
  top:0;
  object-fit: fill;
  width: 100%;
  z-index: 0;
  filter: none;
  transition: filter 0.3s ease-in-out;
}

.myProjectCards span{
  position: absolute;
  width:100%;
  height: 100%;
  padding-top:50px;

  display:flex;
  justify-content: center;
  align-items: center;
  flex-flow:column nowrap;

  color:white;

  opacity: 0;
  background-color: transparent;
  transition:
    opacity 0.3s ease-in-out,
    background-color 0.2s ease-in-out,
    padding-top 0.8s cubic-bezier(.03,1.12,.82,.99);

}

.myProjectsCardTitle{
  font-family: "MontserratBold";
  margin:0;
  padding: 0;
  bottom: 0;
  font-size: 2.8em;
  width:80%;
  text-align: center;
  overflow-wrap: break-word;
  overflow: hidden;
}

.myProjectCardSeparator{
  background-color:#bf360c;
  height: 2px;
  width: 0;
  transition: width 0.5s cubic-bezier(.03,1.12,.82,.99) 0.3s;
  border-radius: 100px;
}

.myProjectsCardDesc{
  font-family: "MontserratSemiBold";
  bottom: 0;
  margin:0;
  padding: 0;
  font-size: 1.6em;
  width:80%;
  text-align: center;
  overflow-wrap: break-word;
  overflow: hidden;
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
