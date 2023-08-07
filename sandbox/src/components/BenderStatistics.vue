<script>
export default {
    props: {
        characters: {
            type: Array,
            required: true,
        }
    },
    data() {
    },
    computed: {
          numberOfMale() {
            let maleCount = 0;
            for (let i=0; i< this.characters.length; i++) {
              if(this.characters[i].gender === "male") {
                maleCount++
              }
            }
            return maleCount;
          },
          numberOfFemale() {
            let femaleCount = 0;
            for (let i=0; i< this.characters.length; i++) {
              if(this.characters[i].gender === "female") {
                femaleCount++
              }
            }
            return femaleCount;
          }
    }
}

</script>

<template>
    <div>
    <p>Male: {{ numberOfMale }}</p>
    <p>Female: {{ numberOfFemale }} </p>
    </div>
</template> 