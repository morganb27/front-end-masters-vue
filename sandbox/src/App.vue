<script lang="js">
import Counter from "./components/Counter.vue"
import BenderStatistics from "./components/BenderStatistics.vue";
import BaseButton from "./components/BaseButton.vue";
import PokemonComponent from "./components/PokemonComponent.vue";
import Pokedex from "./components/Pokedex.vue";
import PiniaCounter from "./components/PiniaCounter.vue";

export default {
  components: {
    PiniaCounter,
    Pokedex,
    PokemonComponent,
    BaseButton,
    Counter,
    BenderStatistics,
  },
  data() {
    return {
      user: {name: "John"},
      newCharacter: "",
      characters: [
        { name: "Harry", gender: "male" },
        { name: "Ron", gender: "male" },
        { name: "Hermione", gender: "female" },
        { name: "Hagrid", gender: "male" },
      ],
      favoriteCharacters: [],
    }
  },
  computed: {
    numberOfMale() {
      let maleCount = 0;
      for (let i = 0; i < this.characters.length; i++) {
        if (this.characters[i].gender === "male") {
          maleCount++
        }
      }
      return maleCount;
    },
    numberOfFemale() {
      let femaleCount = 0;
      for (let i = 0; i < this.characters.length; i++) {
        if (this.characters[i].gender === "female") {
          femaleCount++
        }
      }
      return femaleCount;
    },
  },
  methods: {
    handleNameChange() {
      console.log("Hello")
      this.user.name = "Tonny"

    },
    favoriteCharacter(name) {
      console.log(name + " is my favorite character!");
      this.favoriteCharacters.push(name)
    },
    addCharacter() {
      if (this.newCharacter.trim() !== "") {
        this.characters.push({ name: this.newCharacter, gender: "female" });
        this.newCharacter = "";
      }
    },
  }
}
</script>


<template>
  <div>
    <PiniaCounter />
    <hr>
    <router-link to="/">Home</router-link>
    <router-link to="/pokedex">Pokedex</router-link>
    <router-view></router-view>
    <Pokedex />
    <hr>
    <PokemonComponent />
    <hr>
    <BaseButton>Arrow Left - Hi!</BaseButton>
    <Counter :user="user" @change-name="handleNameChange"/>
    <BenderStatistics :characters="characters"/>
  <p v-if="characters.length === 0">There are no characters</p>
      <ul v-else>
        <li v-for="(item, index) in characters" :key="`item-${index}`">
          <p>{{ item.name }}</p>
          <button v-on:click="favoriteCharacter(item.name)">Favorite character</button>
        </li>
      </ul>
      <h2>Favorite characters</h2>
      <ul v-if="favoriteCharacters.length > 0">
        <li v-for="(item, index) in favoriteCharacters" :key="`item-${index}`"> {{ item }}</li>
      </ul>
      <p v-else>There are no favorite characters yet!</p>
      <h2>New Character</h2>
      <label for="new-character">Name: </label>
      <input type="text" v-model="newCharacter">
      <button v-on:click="addCharacter" @keyup.enter="addCharacter">Add character</button>
  </div>
</template>

<style>
html {
  background-color: papayawhip
}

button {
  border: 5px solid red;
}


</style>


