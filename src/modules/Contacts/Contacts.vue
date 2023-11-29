<script setup lang="ts">
import IcnEmail from '@/assets/icons/icn-email-outline.svg'
import IcnTelegram from '@/assets/icons/icn-telegram.svg'
import IcnGithub from '@/assets/icons/icn-github.svg'
</script>

<template>
    Contacts

    <img :src="IcnEmail" class="contacts_icn" />
    <img :src="IcnTelegram" class="contacts_icn" />
    <img :src="IcnGithub" class="contacts_icn" />
</template>

<style lang="scss">
.contacts_icn {
    width: 36px;
    height: 36px;
}
</style>