<template>
  <q-layout class="q-pa-md bg-grey-10 text-white">
    <div class="layoutContainer1">
        <h1>Hi!</h1>
        <div class="mainText1">
            My name is Sebastian.
            <br>
            I am a Web Developer with a experience in frontend/backend as well as some mobile development.
            <br>
            <br>
            I enjoy creating useful Web Apps and beautiful, eye-catching websites. I have always been interested in making good 
            looking and simple user interfaces and enhancing it with a pleasant user experience. 
            <br>
            <br>
            <br>
            Most of my projects have a relationship with some kind phyisical thing. Not only do i make apps that only displays some data, 
            but i also enjoy to visualize data from a hardware, whether it is from a camera, or an internet connected device.
            My high school thesis was about the Internet of Things and how we can enhance it in our everyday life.
        </div>
    </div>

    <div class="layoutContainer2 scrollAppearContainer">
        <animated-text 
          class="q-mb-xl"
          :title="'<skillset/>'" 
          :fontSize="'45px'" 
          :color="'#bf360c'"
          :start="startFirstSectionAnimation">
        </animated-text>
        <div class="skillSetItems">
            <div class="skillSet scrollAppearItem">
                <h4 class="skillSetSkillTitle">Frontend</h4>
                <h5 class="skillSetSkillDesc">In terms of the frontend, i know HTML5, CSS, JavaScript and frameworks like Vue and a bit of React.</h5>
                <!--<progress-bar :percentage="70" :width="200" :start="startProgressBarAnimation"></progress-bar>-->
            </div>
            <div class="skillSet scrollAppearItem">
                <h4 class="skillSetSkillTitle">Backend</h4>
                <h5 class="skillSetSkillDesc">I have been using Node and Spring Boot in numerous project, coupled with databases to create micro services.</h5>
                <!--<progress-bar :percentage="70" :width="200" :start="startProgressBarAnimation"></progress-bar>-->
            </div>
            <!--
            <div class="skillSet scrollAppearItem">
                <h4 class="skillSetSkillTitle">Mobile</h4>
                <h5 class="skillSetSkillDesc">Native Android development has been my favourite way of making apps. Eversince i started learning Flutter, i have been using it ever since.</h5>
              
            </div>
            -->
            <div class="skillSet scrollAppearItem">
                <h4 class="skillSetSkillTitle">UI/UX Design</h4>
                <h5 class="skillSetSkillDesc">Design is one of the most important aspects of any kind of user interface. A mix of material desing and cupertino design is my design of choice.</h5>
                <!--<progress-bar :percentage="70" :width="200" :start="startProgressBarAnimation"></progress-bar>-->
            </div>
            <div class="skillSet scrollAppearItem">
                <h4 class="skillSetSkillTitle">Web Deployment</h4>
                <h5 class="skillSetSkillDesc">One of the most useful tools for deploying a web application is Nginx and Docker, which i have been using on a Linux VM.</h5>
                <!--<progress-bar :percentage="70" :width="200" :start="startProgressBarAnimation"></progress-bar>-->
            </div>
        </div>
    </div>

  </q-layout>
</template>

<script>
import ProgressBar from "src/components/ProgressBar.vue";
import AnimatedText from "src/components/AnimatedText.vue";
import ScrollAnimationHandler from "src/handlers/ScrollAnimationHandler.js";

export default {
  components:{ProgressBar,AnimatedText},
  data(){
    return {
      startProgressBarAnimation:false,
      scrollHandler: null,
      startFirstSectionAnimation: false
    }
  },
  methods:{

  },
  mounted(){
    this.scrollHandler = new ScrollAnimationHandler();

    setTimeout(()=>{
      this.startFirstSectionAnimation = true
    },1000)
  },

}
</script>
<style>


.layoutContainer1{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4vw;
  height: 100%;
}

.layoutContainer1 h1 {
  opacity: 1;
  margin-top: 0px;
  animation: appearUp 1s ease-in-out;
}

@keyframes appearUp {
  0% {
    opacity: 0;
    margin-top: 100px;
  }
  100%{
    opacity: 1;
    margin-top: 0px;
  }
}

.layoutContainer2{
  margin-top: 10vw;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
}

.mainText1{
  opacity: 1;
  margin-top: 0px;
  width: 70vw;
  text-align: center;
  font-size: 20px;
  animation: appearUp 2s ease-in-out;
}


.skillSetTitle{
  width: 40vw;
  text-align: center;
  color:#bf360c;
}

.skillSetItems{
  width: 70vw;
  display:flex;
  justify-content:center;
  align-items: stretch;
  flex-wrap: wrap;
  gap:10px
}

.skillSet{
  margin: 0.4vw;
  padding: 20px;
  max-width: 30vw;
  background: rgb(58, 58, 58);
  border-radius:10px;
  
}

.skillSetSkillTitle{
  margin:0;
  background: linear-gradient(to right, #fdbb2d,#bf360c); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;  
}

.skillSetSkillDesc{
  margin:10px 0 10px 0;
}

@media only screen and (max-width: 768px) {
  .mainText1 {
    width: auto;
  }

  .skillSetItems{
    width: 100vw;
  }
}

</style>