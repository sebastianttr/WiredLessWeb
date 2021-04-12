<template>
  <q-layout view="lHh Lpr lFf" class="scroll overflow-hidden">
    <div class="fullScreenNav">
      <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
        <div class="overlay-content">
          <a href="#">About Me</a>
          <a href="#">Projects</a>
          <a href="#">My Repo</a>
          <a href="#">Social Media</a>
        </div>
      </div>
    </div>

    <div class="header fit row wrap justify-start items-start content-center">
      <div style="font-size:20px;" class="q-mt-md q-ml-md">WiredLess</div>
      <div style="margin-left:5%">
        <div class="fit row wrap justify-start items-start content-start">
          <div class="navigation">
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

    <div class="headerMobile fit row wrap justify-start items-start content-start">
      <div style="margin-left:5%">
        <div class="fit row wrap justify-between items-stretch content-stretch">
          <div class="title">WiredLess</div>

          <q-btn flat color="orange" icon="menu" @click="openFullScreen()"/>
        </div>
      </div>
    </div>

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
      styleForm: "max-height:100vh;"
    };
  },
  methods: {
    scrollToProjects() {
      this.$root.$emit("scrollProjekts", "scroll");
    },
    scrollToSocials() {
      this.$root.$emit("scrollToSocials", "scroll");
    },
    openContactMeDialog() {
      this.closeNav();
      this.dialog = true;
    },
    onSubmit() {
      this.styleForm = "max-height:0;";
      this.submitDone = true;
      setTimeout(() => (this.dialog = false), 2000);
    },
    openFullScreen() {
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav() {
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

.overlay {
  height: 100%;
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
  height: 100px;
  opacity: 0.8;
  display: none;
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
