<template>
    <div class="q-page-container">
        <nav>
            <div class="header">
                <div class="headerWrapper">
                    <h4 @click="$router.push('/')" class="">WiredLess</h4>
                    <div class="headerLinks">
                        <div v-for="(navLink,index) in navLinks" :key="index*100" @click="goTo(navLink.action)">
                            <custom-link :text="navLink.title" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <q-header reveal :class="'bg-white headerMobile ' + (!showMobileToolBarNav?' shadow-4 ':'')">
            <q-toolbar class="text-black bg-white mobileToolBar">
                <q-toolbar-title @click="$router.push('/')">WiredLess</q-toolbar-title>
                <q-btn flat round dense :icon="!showMobileToolBarNav?'menu':'close'" @click="toggleNavMenu()"/>
            </q-toolbar>

            <div class="responsiveNavMenu" :style="`height:${navLinks.length * (navBarLinkHeight) * showMobileToolBarNav }px`">
              <div class="linksContainer">
                <div  v-for="(navLink,index) in navLinks" :key="index*1000" @click="goTo(navLink.action)">
                  <h6 class="responsiveLinks">{{navLink.title}}</h6>
                  <hr class="solid q-pa-none q-mt-none q-mb-none q-ml-xl q-mr-xl">
                </div>
              </div>
            </div>
        </q-header>
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
            showMobileToolBarNav: false,
            lastScrollPos:0,
            navBarLinkHeight:"0px",
            isScrollingDown:false
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
        toggleNavMenu() {
            this.showMobileToolBarNav = !this.showMobileToolBarNav;
            //document.getElementById("myNav").style.width = "100vw";
        },
        handleScroll(){

            // close navbar menu on scroll
            this.showMobileToolBarNav = false;

            // Navbar things
            let scrollPosReached = window.scrollY >= 60;
            document.getElementsByTagName("nav")[0].style.height = scrollPosReached?"60px":"100px";
            document.getElementsByTagName("nav")[0].style.boxShadow = scrollPosReached?"0px 0px 28px -1px #000000":"none";


            document.getElementsByClassName("mobileToolBar")[0].style.marginTop = this.lastScrollPos <= window.scrollY?"-100px":"0px";

            // reduce height based on scroll
            document.getElementsByTagName("nav")[0].style.marginTop =
              // if scrolling down and below window height
                (window.scrollY >= this.lastScrollPos && window.scrollY >= this.disappearThreshold)?
                "-100px":
                "0";
            this.lastScrollPos = window.scrollY;



        }
  },
  mounted(){
      // run header animation one by one with delay in between
      let headerLinks = document.getElementsByClassName("headerLinks")[0].children;
      for(let i = 0;i<headerLinks.length;i++){
        headerLinks[i].style.animation = `fadeInUp 0.8s cubic-bezier(.03,1.12,.82,.99) ${i * 0.2}s`;
        headerLinks[i].addEventListener("animationend",()=>{
          headerLinks[i].style.opacity = "1";
        })
      }
      console.log(this.$props.navLinks);


      // get computed style in order to determine the height
      // get a element with that class name
      const navBarEl = document.getElementsByClassName("responsiveLinks")[0];

      // get computed style height and save it.
      this.navBarLinkHeight = Number(window.getComputedStyle(navBarEl).height.replace("px",""));
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

.mobileToolBar{
  transition: margin-top 0.5s cubic-bezier(.03,1.12,.82,.99);
}


@media only screen and (max-width: 768px) {
  .header {
    display: none;
  }

  .headerMobile {
    display: initial;
  }

}

.responsiveNavMenu {
  position:absolute;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width:100vw;
  overflow:hidden;
  box-shadow: 0px 5px 10px -5px rgb(97, 97, 97);
  transition: height 1.0s cubic-bezier(.03,1.12,.82,.99);
}

.linksContainer{
  background-color: white;
  position: absolute;
}

.responsiveLinks {
  display: flex;
  justify-content: center;
  align-items: center;
  color:black;
  width:100vw;
  height: 60px;
  margin:0;
  padding:15px 0px 15px 0px;
}



</style>
