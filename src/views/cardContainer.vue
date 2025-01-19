<script setup>
    import Card from '@/components/Card.vue';
    import grayCard from '@/components/grayCard.vue';
    import cardDetails from '@/data/card.json'
    import { computed } from 'vue';
    import Portfolio from './portfolio.vue';

    const props = defineProps({
        showGrayCard: {
            type: Boolean,
            default: true,
    },
    pageType:{
        type: String,
        default: 'portfolio'
    },
    limit:{
        type: Number,
        default:10
    }

    
});

const {pageType, limit} = props;
const filteredCards = computed(() =>
    cardDetails.filter((card) => card.type === pageType)
);
</script>

<template>
    <div class="card-container d-flex flex-column justify-content-between">
        <div class="row-1 row potfolio-card-container">
            <Card v-for="card in filteredCards.slice(0,limit)" :key="card.id" :card = "card"/>
        </div>

        <div v-if = 'showGrayCard == true' class="row-2  d-flex flex-row justify-content-between">
            <grayCard/>
            <grayCard/>
            <grayCard/>
        </div>

        <div class="row-1 row potfolio-card-container">
            <Card v-for="card in filteredCards.slice(limit,cardDetails.lenth)" :key="card.id" :card = "card"/>
        </div>
    </div>
</template>