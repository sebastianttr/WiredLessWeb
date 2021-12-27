<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: "Montserrat";
  src: url("../public/assets/fonts/montserrat/Montserrat-Bold.ttf")
}

* {
  font-family: Montserrat;
}
</style>

<script>
export default {
  name: "App"
};
</script>
