<script setup>
    import Card from '@/components/Card.vue';
    import grayCard from '@/components/grayCard.vue';
</script>

<template>
    <div class="card-container d-flex flex-column justify-content-between">
        <div class="row-1 row potfolio-card-container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

        <div class="row-2  d-flex flex-row justify-content-between">
            <grayCard/>
            <grayCard/>
            <grayCard/>
        </div>

        <div class="row-1 row potfolio-card-container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
</template>