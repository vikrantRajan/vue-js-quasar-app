<template>
  <q-page padding>
   <div class="row">
    <form @submit.prevent="pressed" class="col-12">
      <q-input 
      class="width-80 float-left"
      v-model="search" 
      type="search" 
      label="Search"
      square 
      standout
      :rules="[val=> !!val || 'Field is required']">
        <template v-slot:append>
          <q-icon name="search"></q-icon>
        </template>
      </q-input>
      <div class="search-wrapper width-20 float-left">
        <q-btn type="submit" color="dark" label="Search" class="full-width"></q-btn>
      </div>
    </form>
   </div>
   <div class="row">
    <div class="search col-md-12 col-sm-12 col-xs-12">
      <div class="profile">
        <mini-profile v-if="character" :character="character" ></mini-profile>
      </div>
    </div>
   </div>
  </q-page>
</template>

<script>
import MiniProfile from "../components/mini-profile";
import { QSpinnerCube, QSpinnerPuff } from "quasar";
export default {
  components: {
    "mini-profile": MiniProfile
  },
  methods: {
    
    async pressed() {
      this.$q.loading.show({
        message: "Please Wait",
        spinnerColor: "white",
        spinner: QSpinnerPuff
      });

      const url = `https://www.breakingbadapi.com/api/characters?name=${this.search}`;

      try {
        const char = await this.$axios.get(url);
        this.character = char.data[0];
      } catch (err) {
        console.log(err); // Catch error
      } finally {
        this.$q.loading.hide();
      }
    }
  },
  data() {
    return {
      search: '',
      character: ''
    }
  }
}
</script>
