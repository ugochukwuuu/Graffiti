<script setup>
    import { RouterLink } from 'vue-router';
    import cardContainer from './cardContainer.vue';
</script>

<template>
    <main class="case-studies">
    <cardContainer :showGrayCard = "false" pageType = "caseStudy"/>
    </main>
</template>

