<script setup lang="ts">
import ImgMoon from '@/assets/images/img-moon.png'

</script>

<template>
  <div class="app_layout">
    <div class="app_layout__background">
      <img v-if="ImgMoon" :src="ImgMoon" alt="moon" class="app_layout__background-img">
      <div class="app_layout__background-stars"></div>
      <div class="app_layout__background-twinkling"></div>
      <div class="app_layout__background-clouds"></div>
    </div>
    <main class="app-layout__main">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
@import '@/styles/variables';

.app_layout {
  display: flex;
  padding: 32px;
  min-height: 100vh;
  color: $light-100;
  background-color: $dark-1000;
}

.app_layout__background {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.app_layout__background-stars {
  background: black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  z-index: 0;
}

.app_layout__background-twinkling {
  width: 10000px;
  height: 100%;
  background: transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png") repeat;
  background-size: 1000px 1000px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  animation: move-background 70s linear infinite;
}

.app_layout__background-clouds {
  width: 10000px;
  height: 100%;
  background: transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png") repeat;
  background-size: 1000px 1000px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  animation: move-background 150s linear infinite;
}

.app_layout__background-img {
  height: 70vh;
  width: 70vh;
  position: absolute;
  z-index: 3;
  right: 20px;
}

.app-layout__main {
  width: 100%;
  position: relative;
  z-index: 10;
}
</style>