<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
    <div>
        <h1>Pokemon #{{ route.params.id }}</h1>
        
    </div>
</template>