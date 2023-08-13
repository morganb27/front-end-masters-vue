<script setup>
  import { ref, reactive } from 'vue';

  const count = ref(0);

  const state = reactive({
            count: 0,
        });
    function handleIncrement() {
        state.count++
    }
</script>

<template>
    <div>
    <h1>Pokedex</h1>
    <button @click="handleIncrement">Pokemon: {{ state.count }}</button>
    </div>
</template>
  