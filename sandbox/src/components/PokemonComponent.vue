<script>
// https://pokeapi.co/api/v2/pokemon/?limit=151

export default {
    data() {
        return {
            pokedex: [1, 2, 3],
            textChangingColor: "Hello There",
            colorPreference: "#000000"
        }
    },
    methods: {
        async fetchPokemon() {
            this.pokedex = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
            .then(response => response.json())
        }
    },
}
</script>

<template>
    <div>
    <h2> {{ textChangingColor }}</h2>
    <input type="color" v-model="colorPreference">
    <h1>New App</h1>
    <pre>{{ pokedex }}</pre>
    <button @click="fetchPokemon">See Pokemons</button>
    </div>
</template>

<style scoped>
    h2 {
        color: v-bind(colorPreference);
    }
</style>