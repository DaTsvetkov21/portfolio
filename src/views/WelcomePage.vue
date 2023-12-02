<script setup lang="ts">
import { Routes } from '@/router/routes';
</script>

<template>
  <div class="welcome-page page">
    <nav class="welcome-page__navigation">
      <div class="welcome-page__navigation-block" @click="$router.push(Routes.ABOUT_ME)">
        <p :to="Routes.ABOUT_ME">About me</p>
      </div>
      <div class="welcome-page__navigation-block" @click="$router.push(Routes.PROJECTS)">
        <p :to="Routes.PROJECTS">Projects</p>
      </div>
      <div class="welcome-page__navigation-block" @click="$router.push(Routes.CONTACTS)">
        <p :to="Routes.CONTACTS">Contacts</p>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
@import '@/styles/variables';

.welcome-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto;
}


.welcome-page__navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px
}

.welcome-page__navigation-block {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  border: 10px solid $light-100;
  border-radius: 24px;
  transition: border-radius 0.5s;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    height: 300px;
    border-radius: 50%;
    background-color: $light-100;
    transition: border-radius 0.5s;
    color: $dark-1000;
  }
}

@media (max-width: $xxl) {
  .welcome-page {
    flex-direction: column;
  }
}

@keyframes move-background {
  from {
    transform: translate3d(0px, 0px, 0px);
  }

  to {
    transform: translate3d(1000px, 0px, 0px);
  }
}
</style>