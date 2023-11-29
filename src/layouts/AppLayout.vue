<script setup lang="ts">
import AppSidebar from '@/common/components/AppSidebar.vue'
</script>

<template>
  <div class="app_layout">
    <app-sidebar class="app-layout__sidebar" />
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

.app-layout__sidebar {
}

.app-layout__main {
  width: 100%;
}
</style>