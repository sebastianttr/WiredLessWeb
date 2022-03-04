<template>
  <q-layout view="lHh Lpr lFf" class="scroll">

    <navbar :navLinks="navBarLinks" :disappearThreshold="disappearThreshold"></navbar>

    <q-page-container>
      <router-view/>
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
import CustomLink from "components/CustomLink.vue";
import NavBar from "src/components/NavBar.vue";

const navBarLinks = [
  {
    title:"Home",
    action:"navigateTo:/"
  },
  {
    title:"Imprint",
    action:"navigateTo:/p/imprint"
  },
]

export default {
    components: { CustomLink,"navbar":NavBar },
    data(){
        return {
            showMobileToolBar:false,
            navBarLinks:navBarLinks,
            disappearThreshold: window.innerHeight/4
        }
    },
    methods:{
        openFullScreen() {
            this.showMobileToolBar = false;
            document.getElementById("myNav").style.width = "100vw";
        },
        closeNav() {
            this.showMobileToolBar = true;
            document.getElementById("myNav").style.width = "0%";
        }
    }
}
</script>

<style>
.mobileNavs {
  font-size: 40px;
  color: white;
  pointer-events: none;
  margin-top: 20px;
}

.footer {
  background-color: black;
  color: white;
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



@media only screen and (max-width: 768px) {
  .header {
    display: none;
  }

  .headerMobile {
    display: initial;
  }
}

</style>
