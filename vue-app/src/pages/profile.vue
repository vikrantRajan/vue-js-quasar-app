<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-4 col-sm-4 col-xs-12">
        <img class="full-width" :src="character.img" alt="" srcset="" @click="alert = true" />
      </div>

      <div class="col-md-8 col-sm-8  col-xs-12 q-pl-xl q-pt-xl">
        <div class="text-h1 text-grey-3 text-weight-thin my-font q-pb-md"> {{ character.nickname }}</div>
        <div class="text-h4 text-grey-6 text-weight-thin q-pb-md"> {{ character.name }} </div>
        <div class="text-h6 text-weight-thin" 
        v-for="occupation in character.occupation"
        :key="occupation">
          <span class="text-red-6">

           --> {{ occupation }}
          </span>

        </div>
        <div class="text-body1 text-grey-6 q-pt-lg q-pb-lg">Role Played By {{ character.portrayed }}</div>
      </div>
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
      }, 250);
      this.character = character.data[0];
      console.log(this.character)

      if(this.character.birthday === "" || this.character.birthday === null || this.character.birthday === undefined) {
          this.character.birthday = 'No Birthdate Information Available!'
      } 
       if(this.character.img === "" || this.character.img === null || this.character.img === undefined) {
          alert("No Image Available")
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
