<script setup>
    import { defineProps, onMounted } from 'vue';

    const { card } = defineProps({
    card: {
    type: Array,
    required: true,
  },
});

    onMounted(()=>{
        console.log(card)
    })
</script>

<template>
    <div class="card d-flex flex-column">
        <div class="row-1">
            <img class="img" :src="card.img" alt="">
        </div>
        <div class="row-2 d-flex flex-row align-items-center justify-content-between">
            <h2 class="title">{{ card.title }}</h2>

            <button v-if = 'card.type == "portfolio"'>
                View live Demo
            </button>
        </div>
    </div>
</template>