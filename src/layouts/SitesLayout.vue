<template>
  <q-layout class="scroll">
      
    <q-header class="transparent header" >
      <q-toolbar class="text-black">
        <div class=" header fit row wrap justify-start items-start content-start">
          <div 
            style="font-size:20px;cursor:pointer;" 
            @click="$router.push('/')" 
            class="q-mt-md q-ml-sm">
            WiredLess
        </div>

          <div style="margin-left:5%">
            <div class="fit row wrap justify-start items-start content-start" >

              <div @click="$router.push('/')">
                <custom-link :text="'Home'"/>
              </div>

              <div @click="$router.push('/p/aboutme')">
                <custom-link :text="'About Me'"/>
              </div>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>
 
    
    
   
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
    

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer>
        <div class="footer fit column wrap justify-center items-center content-center">
            <div class="fit row wrap justify-center items-start content-start">
                <div class="navigation" @click="$router.push('/p/imprint')">Imprint</div>
            </div>
            <div class="q-ma-xs">©Sebastian Tatar | sebi.tatar2@gmail.com</div>
        <div class="q-ma-xs">2021</div>
    </div>

    </q-footer>

  </q-layout>
</template>

<script>
import CustomLink from "components/CustomLink.vue";

export default {
    components: { CustomLink },
    data(){
        return {
            showMobileToolBar:false
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