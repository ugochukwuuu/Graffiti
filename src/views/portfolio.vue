<script setup>
    import cardContainer from './cardContainer.vue';
</script>

<template>
    <main class="portfolio">
        <cardContainer :showGrayCard = "true" pageType = "portfolio" limit="4"/>
    </main>
</template>