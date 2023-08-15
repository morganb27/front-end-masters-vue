<script>
import { useCountStore } from "../stores/CountStore.js"

export default {
    setup() {
        const counterStore= useCountStore();
        return { counterStore }
    }
}

</script>

<template>
    <h1>
        <button @click="counterStore.increment">Pinia Counter: {{ counterStore.count }}</button>
    </h1>
</template>