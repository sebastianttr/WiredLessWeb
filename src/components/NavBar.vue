<template>
    <div class="q-page-container">
        <nav>
            <div class="header">
                <div class="headerWrapper">
                    <h4 class="">WiredLess</h4>
                    <div class="headerLinks">
                        <div v-for="(navLink,index) in navLinks" :key="index*100" @click="goTo(navLink.action)">
                            <custom-link :text="navLink.title" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>


        <q-header reveal :class="!showMobileToolBar?'transparent':'bg-white'  + ' headerMobile'">
            <q-toolbar class="text-black">
                <q-toolbar-title>WiredLess</q-toolbar-title>
                <q-btn flat round dense icon="menu" @click="openFullScreen()"/>
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
    </div>
</template>
<script>
import CustomLink from "components/CustomLink.vue";

export default {
    components:{"custom-link":CustomLink},
    props:{
      navLinks:{
        type: Array,
        required:true
      },
      disappearThreshold:{
        type: Number,
        default: window.innerHeight/2
      }
    },
    data(){
        return {
            navOpen: false,
            showMobileToolBar: true,
            lastScrollPos:0
        }
    },
    methods:{
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
        goTo(actionName){
          // if the action starts with a "scrollTo"
          if(actionName.startsWith("scrollTo"))
            this.$root.$emit(actionName, "scroll");   // emit event to scroll to a certain section
          else if(actionName.startsWith("navigateTo")){
            // get name of the page from this format :   navigateTo:aboutme
            const pageName = actionName.substring(actionName.indexOf(":")+1,actionName.length);
            this.$router.push(`${pageName}`);
          }

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
            // Navbar things
            let scrollPosReached = window.scrollY >= 60;
            document.getElementsByTagName("nav")[0].style.height = scrollPosReached?"60px":"100px";
            document.getElementsByTagName("nav")[0].style.boxShadow = scrollPosReached?"0px 0px 28px -1px #000000":"none";


            document.getElementsByTagName("nav")[0].style.marginTop =
              // if scrolling down and below window height
                (window.scrollY >= this.lastScrollPos && window.scrollY >= this.disappearThreshold)?
                "-100px":
                "0";
            this.lastScrollPos = window.scrollY;
        }
  },
  mounted(){
      let headerLinks = document.getElementsByClassName("headerLinks")[0].children;
      for(let i = 0;i<headerLinks.length;i++){
        headerLinks[i].style.animation = `fadeInUp 0.8s cubic-bezier(.03,1.12,.82,.99) ${i * 0.2}s`;
        headerLinks[i].addEventListener("animationend",()=>{
          headerLinks[i].style.opacity = "1";
        })
      }
      console.log(this.$props.navLinks);
  },
  beforeMount() {
    document.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy(){
    document.removeEventListener('scroll',this.handleScroll);
  },

}
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

.q-page-container {
  overflow:hidden;
}

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

nav{
  background: white;
  z-index: 100;
  position: fixed;
  height: 100px;
  box-shadow: none;
  overflow: hidden;
  transition:
    height 0.4s cubic-bezier(.03,1.12,.82,.99),
    box-shadow 0.4s cubic-bezier(.03,1.12,.82,.99),
    margin-top 0.7s cubic-bezier(.03,1.12,.82,.99);
}

.header {
  opacity: 1;
  transition: 300ms;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
}

.headerWrapper{
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
}

.header h4{
  margin:0;
  padding:0;
}

.headerLinks{
  display:flex;
  align-items: center;
  gap:15px;
  height: 100%;
}

.headerLinks > div{
  opacity: 0;
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

@keyframes fadeInUp {
    0%{
        margin-top: 50px;
        opacity: 0;
    }
    100%{
        margin-top: 0px;
        opacity: 1;
    }
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
