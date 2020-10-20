<template>
  <q-page padding>
    <div class="column justify-center items-center">
      <q-card class="my-card">
        <img :src="character.img" alt="" srcset="" @click="alert = true" />
        <q-card-section>
          <div class="text-h6">{{ character.name }}</div>
          <div class="text-subtitle2">{{ character.nickname }}</div>
        </q-card-section>
        <q-card-section>
          <q-chip
            v-for="occupation in character.occupation"
            color="teal"
            :key="occupation"
            text-color="white"
            icon="bookmark"
          >
            {{ occupation }}
          </q-chip>
        </q-card-section>
      </q-card>
    </div>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Birthday Info</div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">{{ character.birthday }}</div>
          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup></q-btn>
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { QSpinnerCube } from "quasar";
export default {
  async created() {
    try {
      // let response = await fetch('http://no-such-url');
      this.$q.loading.show({
        message: "Loading",
        spinnerColor: "blue",
        spinner: QSpinnerCube,
      });

      let url = `https://www.breakingbadapi.com/api/characters/${this.$route.params.id}`;
      if (this.$route.params.id === "random") {
        url = `https://www.breakingbadapi.com/api/character/${this.$route.params.id}`;
      }
      const character = await this.$axios.get(`${url}`);
      setTimeout(() => {
        this.$q.loading.hide();
      }, 400);
      this.character = character.data[0];

      if(this.character.birthday === "" || this.character.birthday === null || this.character.birthday === undefined) {
          this.character.birthday = 'No Birthdate Information Available!'
      } 
    } catch (err) {
      this.$q.loading.hide();
      alert(err); // Catch error
      alert("Please refresh the page")
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
