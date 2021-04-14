<template>
  <q-layout view="lHh Lpr lFf" class="scroll">
    <div id="myNav" class="overlay">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <div class="overlay-content" @click="closeNav()">
        <div @click="scrollToProjects()">
          <div class="mobileNavs">Projects</div>
        </div>
        <div @click="scrollToSocials()">
          <div class="mobileNavs">Socials</div>
        </div>
        <div @click="openContactMeDialog()">
          <div class="mobileNavs">Contact Me</div>
        </div>
      </div>
    </div>

    <q-header class="transparent header" style="margin-left:-10px;width:110vw;">
      <q-toolbar class="text-black">
        <div class="header fit row wrap justify-start items-start content-start">
          <div style="font-size:20px;" class="q-mt-md q-ml-md">WiredLess</div>

          <div style="margin-left:5%">
            <div class="fit row wrap justify-start items-start content-start">
              <div class="navigation" @click="scrollToHome()">
                <div style="pointer-events: none;">Home</div>
              </div>
              <div class="navigation" @click="scrollToProjects()">
                <div style="pointer-events: none;">Projects</div>
              </div>
              <div class="navigation" @click="scrollToSocials()">
                <div style="pointer-events: none;">Socials</div>
              </div>
              <div class="navigation" @click="openContactMeDialog()">
                <div style="pointer-events: none;">Contact me!</div>
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

    <q-dialog v-model="dialog" position="bottom">
      <q-card style="width: 500px;" class="bg-grey-10 text-white">
        <q-card-section class="column items-start no-wrap">
          <div>
            <div
              style="font-size:30px;"
              class="q-mb-md"
            >{{!submitDone?"Leave a message!":"Thank You!"}}</div>
          </div>
          <div class="form" :style="styleForm">
            <q-form @submit="onSubmit">
              <q-input
                class="q-mb-sm"
                label-color="black"
                bg-color="white"
                filled
                v-model="name"
                label="Your name"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Name cannot be empty!']"
              />
              <q-input
                class="q-mb-sm"
                label-color="black"
                bg-color="white"
                filled
                v-model="email"
                label="Your Email"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'E-Mail cannot be empty!']"
              />
              <q-input
                class="q-mb-sm"
                label-color="black"
                bg-color="white"
                filled
                type="textarea"
                label="Message"
                v-model="message"
              />

              <div class="fit row wrap justify-end q-mt-md">
                <q-btn label="Submit" type="submit" color="primary"/>
              </div>
            </q-form>
          </div>
          <q-space/>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <div class="footer fit column wrap justify-center items-center content-center">
      <div class="fit row wrap justify-center items-start content-start">
        <div class="navigation">About</div>
        <div class="navigation" @click="openContactMeDialog()">Contact me!</div>
      </div>
      <div class="q-ma-xs">©Sebastian Tatar | sebi.tatar2@gmail.com</div>
      <div class="q-ma-xs">2021</div>
    </div>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      navOpen: false,
      dialog: false,
      name: "",
      email: "",
      message: "",
      submitDone: false,
      styleForm: "max-height:100vh;",
      showMobileToolBar: true
    };
  },
  methods: {
    scrollToProjects() {
      this.$root.$emit("scrollToProjekts", "scroll");
    },
    scrollToSocials() {
      this.$root.$emit("scrollToSocials", "scroll");
    },
    scrollToHome() {
      this.$root.$emit("scrollToHome", "scroll");
    },
    openContactMeDialog() {
      console.log("dia");
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
    }
  }
};
</script>

<style lang="scss">
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
  margin-bottom: 10px;
}

.overlay {
  height: 100vh;
  width: 0;
  position: fixed;
  z-index: 1;
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
  height: 80px;
  opacity: 0.8;
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
}

.navigation:hover {
  color: green;
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
