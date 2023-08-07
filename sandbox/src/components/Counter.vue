<script>
export default {
  data() {
    return {
      count: 10,
      counterTitle: 'Counter Standard',
      incrementAmount: 1,
      message: 'Hello it works!',
      listOfNumbers: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    displayTitle() {
      if (this.count > 20) {
        return "Counter Standard - Very Long";
      } else {
        return "Counter Standard";
      }
    }
  },
  methods: {
    incrementCount() {
      this.count += this.incrementAmount;
    }
  },
  watch: {
    count(newValue) {
      console.log(newValue);
    }
  }
}
</script>

<template>
    <div>
        <h1>{{ displayTitle }}</h1>
        <p>{{ count }}</p>
        <button v-on:click="incrementCount">Increment Count</button>
    <div>
      <label for="incrementAmount">Increment by:</label>
      <input type="number" v-model="incrementAmount" />
    </div>
    <hr >
      <p v-if="message.length % 2 === 0">Even: {{ message.toUpperCase() }}</p>
      <p v-else>Odd: {{ message }}</p>
    </div>
</template>