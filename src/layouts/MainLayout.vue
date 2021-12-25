<template>
  <q-layout view="lHh Lpr lFf" class="scroll">
    <div id="myNav" class="overlay">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <div class="overlay-content" @click="closeNav()">
        <div @click="scrollToHome()">
          <div class="mobileNavs">Home</div>
        </div>
        <div @click="scrollToProjects()">
          <div class="mobileNavs">Projects</div>
        </div>
        <div @click="scrollToTryouts()">
          <div class="mobileNavs">Try Outs</div>
        </div>
        <div @click="scrollToSocials()">
          <div class="mobileNavs">Socials</div>
        </div>
        <div @click="$router.push('/p/about')">
          <div class="mobileNavs">About Me</div>
        </div>
      </div>
    </div>

    <q-header class="transparent header" style="margin-left:-10px;width:110vw;">
      <q-toolbar class="text-black">
        <div class=" header fit row wrap justify-start items-start content-start">
          <div style="font-size:20px;" class="q-mt-md q-ml-md">WiredLess</div>

          <div style="margin-left:5%">
            <div class="fit row wrap justify-start items-start content-start" >

              <div @click="scrollToHome()">
                <custom-link :text="'Home'"/>
              </div>

              <div @click="scrollToProjects()">
                <custom-link :text="'Projects'"/>
              </div>
              
              <div @click="scrollToTryouts()">
                <custom-link :text="'Try Outs'"/>
              </div>

              <div @click="scrollToSocials()">
                <custom-link :text="'Socials'"/>
              </div>
              <div @click="$router.push('/p/aboutme')">
                <custom-link :text="'About Me'"/>
              </div>
              
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-header reveal :class="!showMobileToolBar?'transparent':'bg-white'  + ' headerMobile'">
      <q-toolbar class="text-black">
        <q-toolbar-title>WiredLess</q-toolbar-title>
        <q-btn flat round dense icon="menu" @click="openFullScreen()"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <transition name="slide-fade">
          <q-btn
            v-if="scrollToTopFabActive"
            fab
            icon="keyboard_arrow_up"
            color="deep-orange-10"
            @click="scrollToHome()"
          />
        </transition>
      </q-page-sticky>
    </q-page-container>

    <div class="footer fit column wrap justify-center items-center content-center">
      <div class="fit row wrap justify-center items-start content-start">
        <div class="navigation" @click="$router.push('/p/imprint')">Imprint</div>
      </div>
      <div class="q-ma-xs">©Sebastian Tatar | sebi.tatar2@gmail.com</div>
      <div class="q-ma-xs">2021</div>
    </div>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import CustomLink from "components/CustomLink.vue";

export default {
  name: "MainLayout",
  components: { EssentialLink,CustomLink },
  data() {
    return {
      navOpen: false,
      dialog: false,
      name: "",
      email: "",
      message: "",
      submitDone: false,
      styleForm: "max-height:100vh;",
      showMobileToolBar: true,
      scrollToTopFabActive: false
    };
  },
  methods: {
    scrollToTryouts() {
      this.$root.$emit("scrollToTryouts", "scroll");
    },
    scrollToProjects() {
      this.$root.$emit("scrollToProjekts", "scroll");
    },
    scrollToSocials() {
      this.$root.$emit("scrollToSocials", "scroll");
    },
    scrollToHome() {
      this.$root.$emit("scrollToHome", "scroll");
    },
    scrollToStack() {
      this.$root.$emit("scrollToStack", "scroll");
    },
    openContactMeDialog() {
      this.dialog = true;
    },
    onSubmit() {
      this.styleForm = "max-height:0;";
      this.submitDone = true;
      setTimeout(() => (this.dialog = false), 2000);
    },
    openFullScreen() {
      this.showMobileToolBar = false;
      document.getElementById("myNav").style.width = "100vw";
    },
    closeNav() {
      this.showMobileToolBar = true;
      document.getElementById("myNav").style.width = "0%";
    },
    handleScroll(){
      let v = this;

      let scrollRelativeToTop =
        document.getElementById("main").getBoundingClientRect().bottom - 60;

      //console.log(scrollRelativeToTop);
      v.scrollToTopFabActive = scrollRelativeToTop <= 0;
    }
  },
  beforeMount() {
    document.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy(){
     document.removeEventListener('scroll',this.handleScroll);
  }
};
</script>

<style>


.slide-fade-enter-active {
  transition: all 0.5s ease;
  transform: translateX(0px) rotate(0deg);
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(200px) rotate(270deg);
}

.form {
  width: 100%;
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
}

.mobileNavs {
  font-size: 40px;
  color: white;
  pointer-events: none;
  margin-top: 20px;
}

.overlay {
  height: 100vh;
  width: 0;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  font-size: 20px;
}

.footer {
  background-color: black;
  color: white;
}

.header {
  background: white;
  opacity: 0.8;
  transition: 300ms;
}

.header:hover {
  opacity: 0.95;
  transition: 300ms;
}

.headerMobile {
  background: white;
  display: none;
  transition: 0.5s ease-out;
  transition-delay: 0.5s;
}

.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  cursor:pointer;
}

.navigation:hover {
  color: #bf360c;
  transition: 500ms;
  background-color: rgba(0, 0, 0, 0.8);
}

.flexHorizontal {
  display: flex;
}

@media only screen and (max-width: 768px) {
  .header {
    display: none;
  }

  .headerMobile {
    display: initial;
  }
}
</style>
