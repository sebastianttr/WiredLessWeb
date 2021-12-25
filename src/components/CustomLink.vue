<template>
    <div class="customLink q-mr-xs q-ml-xs">
        <div class="customLinkText text-weight-bold ">
            <div class="q-pa-sm text-h5">
                {{this.text}}
            </div>
            <div class="customLinkBackground"></div>
        </div>
    </div>
</template>

<script>
export default {
    props:["text"]
}
</script>

<style>

.customLink {
    color: black;
    height: 53px;
    cursor: pointer;
}

.customLinkText {
    position: relative;
}

.customLinkBackground {
    position: absolute;
    height: 10%;
    width: 110%;
    bottom: -5px;
    left: -5%;
    background-color: #bf360c;
    transition: 0.3s;
    z-index: -1;
}

.customLink:hover .customLinkBackground {
    height: 120%;
    box-shadow: 0px 0px 10px 7px rgba(0, 0, 0, 0.15);
    opacity: 1;
}


</style>