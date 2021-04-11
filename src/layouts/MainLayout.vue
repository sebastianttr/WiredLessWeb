<template>
  <q-layout view="lHh Lpr lFf">
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

    <div class="header fit row wrap justify-start items-start content-start">
      <div class="title">WiredLess</div>
      <div style="margin-left:5%">
        <div class="fit row wrap justify-start items-start content-start">
          <div class="navigation">
            Home
            <div class="background-color:green;width:inherit;"></div>
          </div>
          <div class="navigation">Projects</div>
          <div class="navigation">Socials</div>
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
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
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

<script>
import EssentialLink from "components/EssentialLink.vue";

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      navOpen: false,
      essentialLinks: linksData
    };
  },
  methods: {
    openFullScreen() {
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }
  }
};
</script>
