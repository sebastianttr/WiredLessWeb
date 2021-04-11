<template>
  <q-layout view="lHh Lpr lFf">
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
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<style css>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  background: red;
  height: 80px;
  opacity: 0.8;
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
</style>

<script>
import EssentialLink from "components/EssentialLink.vue";

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  }
};
</script>
