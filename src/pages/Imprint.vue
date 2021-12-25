<template>
  <q-layout class="bg-grey-10 text-white">
    <div class="q-pa-md layoutContainer1">
        <div class="imprint"><b>Imprint</b></div>
        <div class="mainText">
            Sebastian Tatar
            <br>
            Schadneramt 55 / 2
            <br>
            3264 Gresten
            <br>
            Austria
            <br>
            <br>
            <p><b>Contact:</b></p> 
            sebi.tatar2@gmail.com
            <br>
            +43 660 6618501
        </div>
    </div>
  </q-layout>
</template>

<script>
export default {

}
</script>

<style>

.layoutContainer1{
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    text-align: left;
}

.mainText{
    width: 30vw;
    text-align: left;
    font-size: 20px;
}

.imprint{
    width: 30vw;
    font-size: 30px;
    margin-top: 60px;
    margin-bottom: 30px;
}

.wiredless{
    font-size:20px;
    cursor:pointer;
}

.footer1{
    background: black;
    overflow:hidden;
}

@media only screen and (max-width: 768px) {
  .imprint {
    width: auto;
  }

  .mainText {
    width: auto;
  }

  .layoutContainer1{
    align-items:flex-start;
  }
}



</style>