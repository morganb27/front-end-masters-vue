<script>
// https://pokeapi.co/api/v2/pokemon/?limit=151
import { computed, ref, reactive } from 'vue';

export default {
    setup() {
        const regionName=ref("Konto");
        const regionNameAllCaps = computed(() => regionName.value.toUpperCase());

        const state = reactive({
            elementType: "lightning",
        });
        console.log(state.elementType);

        return {
            regionName,
            regionNameAllCaps,
            state,
        }
    },
    data() {
        return {
            pokedex: [1, 2, 3],
            textChangingColor: "Hello There",
            colorPreference: "#000000",
        }
    },
    methods: {
        async fetchPokemon() {
            this.pokedex = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
            .then(response => response.json())
        },
        handleRegionNameChange() {
            this.regionName = "Hoenn"
        }
    },
}
</script>

<template>
    <div>
        <h1> {{ regionName }}</h1>
        <h1> {{ regionNameAllCaps }}</h1>
    <h2> {{ textChangingColor }}</h2>
    <input type="color" v-model="colorPreference">
    <h1>New App</h1>
    <pre>{{ pokedex }}</pre>
    <button @click="fetchPokemon">See Pokemons</button>
    <button @click="fetchRegionName">See Region Name</button>
    <button @click="handleRegionNameChange">Change Region Name</button>
    </div>
</template>

<style scoped>
    h2 {
        color: v-bind(colorPreference);
    }
</style>