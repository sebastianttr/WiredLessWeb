<template>
  <q-page class="flex flex-center bg-grey-10">
    <!-- Main Section -->

    <div class="fit row wrap justify-center items-center content-center" style="color:white">
      <div class="fit column wrap justify-start items-start content-center">
        <div style="font-size:20px">This is</div>
        <div style="font-size:40px">
          <b>@wiredlessmaker</b>
        </div>
        <div style="font-size:20px">Sebastian Tatar</div>
      </div>
    </div>

    <!-- Projekts Section -->

    <div class="fit column wrap justify-center items-center content-center">
      <div style="font-size:30px; color:white">Projects</div>
      <div class="fit row wrap justify-center items-center content-center">
        <div class="card">
          <div class="contentView">pic or 3D</div>
          <div style="font-size:20px">Flutter App</div>
        </div>
        <div class="card">
          <div class="contentView">pic or 3D</div>
          <div style="font-size:20px">Flutter App</div>
        </div>
        <div class="card">
          <div class="contentView">pic or 3D</div>
          <div style="font-size:20px">Flutter App</div>
        </div>
      </div>
    </div>

    <!-- Socials Section -->

    <div class="fit column wrap justify-center items-center content-center">
      <div style="font-size:30px; color:white">Socials</div>
      <div class="fit row wrap justify-center items-center content-center">
        <div class="card">dawd</div>
      </div>
    </div>
  </q-page>
</template>

<style>
.heigth100 {
  height: 1000px;
}

.card {
  border: solid grey;
  background: grey;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
}

.contentView {
  width: 300px;
  height: 300px;
  border: solid black;
  border-radius: 10px;
}

@media only screen and (max-width: 768px) {
  .card {
    border: solid grey;
    background: grey;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
    width: 100%;
  }
}
</style>


<script>
export default {
  name: "PageIndex"
};
</script>
