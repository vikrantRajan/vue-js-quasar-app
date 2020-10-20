<template>
<div>
  <mini-profile :character="character"></mini-profile>
</div>
</template>

<script>
import { QSpinnerCube } from "quasar";
import MiniProfile from "../components/mini-profile";
export default {
  components: {
    "mini-profile": MiniProfile
  },
  async created() {
    this.$q.loading.show({
      message: "Loading",
      spinnerColor: "blue",
      spinner: QSpinnerCube,
    });

    let url = `https://www.breakingbadapi.com/api/characters/${this.$route.params.id}`;
    if (this.$route.params.id === "random") {
      url = `https://www.breakingbadapi.com/api/character/${this.$route.params.id}`;
    }

    try {
      const character = await this.$axios.get(`${url}`);
      setTimeout(() => {
        this.$q.loading.hide();
      }, 250);
      this.character = character.data[0];
      console.log(this.character)

      if(this.character.birthday === "" || this.character.birthday === null || this.character.birthday === undefined) {
          this.character.birthday = 'No Birthdate Information Available!'
      } 
       if(this.character.img === "" || this.character.img === null || this.character.img === undefined) {
          alert("No Image Available")
      } 
    }  catch (err) {
        console.log(err); // Catch error
    } finally {
      this.$q.loading.hide();
    }
  },
  data() {
    return {
      character: "",
      alert: false,
    };
  },
  
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 20%;
}
</style>
