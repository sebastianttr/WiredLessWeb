<template>
  <q-layout view="lHh Lpr lFf" class="scroll">

    <navbar :navLinks="navBarLinks"></navbar>

    <q-page-container>
      <router-view/>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <transition name="slide-fade">
          <q-btn
            v-if="scrollToTopFabActive"
            fab
            icon="keyboard_arrow_up"
            color="deep-orange-10"
            @click="$root.$emit('scrollToHome', 'scroll');"
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
import NavBar from "components/NavBar.vue";

const navBarLinks = [
  {
    title:"Home",
    action:"scrollToHome"
  },
  {
    title:"Projects",
    action:"scrollToProjekts"
  },
  {
    title:"Try Out",
    action:"scrollToTryouts"
  },
  {
    title:"Socials",
    action:"scrollToSocials"
  },
  {
    title:"About Me",
    action:"navigateTo:/p/aboutme"
  },
]

export default {
  name: "MainLayout",
  components: { EssentialLink,CustomLink,"navbar":NavBar },
  data() {
    return {
      navOpen: false,
      showMobileToolBar: true,
      dialog: false,
      name: "",
      email: "",
      message: "",
      submitDone: false,
      styleForm: "max-height:100vh;",
      scrollToTopFabActive: false,
      navBarLinks:navBarLinks
    };
  },
  methods: {

    openContactMeDialog() {
      this.dialog = true;
    },
    onSubmit() {
      this.styleForm = "max-height:0;";
      this.submitDone = true;
      setTimeout(() => (this.dialog = false), 2000);
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
  },
};
</script>

<style>

</style>
