<template>
  <q-page>
    <div class="row">
      <div class="col-md-4 col-sm-4 col-xs-12">
        <img
          class="full-width"
          :src="character.img"
          alt=""
          srcset=""
          @click="alert = true"
        />
      </div>

      <div class="col-md-8 col-sm-8 col-xs-12 q-pl-xl q-pt-xl">
        <div class="text-h1 text-grey-3 text-weight-thin my-font q-pb-md">
          {{ character.nickname }}
        </div>
        <div class="text-h4 text-grey-6 text-weight-thin q-pb-md">
          {{ character.name }}
        </div>
        <div
          class="text-h6 text-weight-thin"
          v-for="occupation in character.occupation"
          :key="occupation"
        >
          <span class="text-red-6"> --> {{ occupation }} </span>
        </div>
        <div class="text-body1 text-grey-6 q-pt-lg q-pb-lg">
          Role Played By {{ character.portrayed }}
        </div>
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
export default {
    name: 'mini-profile',
    props: ["character"],
    data() {
        return { alert: false }
    }
    
}
</script>

<style lang="stylus" scoped></style>