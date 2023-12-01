<script setup lang="ts">
</script>

<template>
  <div class="app_layout">
    <main class="app-layout__main">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
.app_layout {
  display: flex;
  padding: 32px;
}


.app-layout__main {
  width: 100%;
  margin: auto;
}
</style>