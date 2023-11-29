<script setup lang="ts">
import { Routes } from '@/router/routes';
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="app-sidebar">
        <ul class="app-sidebar__list">
            <li class="app-sidebar__item">
                <router-link :to="Routes.ABOUT_ME">About me</router-link>
            </li>
            <li class="app-sidebar__item">
                <router-link :to="Routes.PROJECTS">Projects</router-link>
            </li>
            <li class="app-sidebar__item">
                <router-link :to="Routes.CONTACTS">Contacts</router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
@import '@/styles/variables';

.app-sidebar {
    width: 300px;
    min-width: 300px;
    position: sticky;
    top: 0;
    left: 0;
}

.app-sidebar__list {
    display: flex;
    flex-direction: column;
}

.app-sidebar__item {
    padding: 12px 0;
    font-size: 36px;
    text-transform: uppercase;

    &:hover {
        font-weight: 700;
        transition: font-weight 0.3s;
    }
}

@media (max-width: 500px) {
    .app-sidebar {
        display: none;
    }
}
</style>