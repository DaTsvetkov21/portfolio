<script setup lang="ts">
</script>

<template>
    <div class="about-me">
        <section class="about-me__content">
            <p>My name is Dmitry. I'm a front-end developer.</p>
        </section>
    </div>
</template>

<style lang="scss">
.about-me {
    display: flex;
    justify-content: space-between;
}

.about-me__content {
    align-self: flex-end;
    font-size: 34px;
}

.about-me__photo {
    width: 300px;
    height: auto;
    border-radius: 16px;
}

@media (max-width: 500px) {
    .about-me {
        flex-direction: column;
    }

    .about-me__photo {
        width: 100%;
        height: auto;
    }
}
</style>