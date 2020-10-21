<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated class="row justify-center bg-dark">
      <q-toolbar class="col">
        <q-toolbar-title>
          <router-link :to="{name: 'home'}" class="text-white heading-text">
            Breaking Bad Cast
          </router-link>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs 
        inline-label
        outside-arrows
        mobile-arrows
        class="text-white">
        <q-route-tab
          :to="{name: 'profile', params: {id: 1}}"
          replace
          label="Walter White"
        />
        <q-route-tab
          :to="{name: 'profile', params: {id: 2}}"
          replace
          label="Jesse Pinkman"
        />

        <q-route-tab
          :to="{name: 'profile', params: {id: 'random'}}"
          replace
          label="Random"
        />

        <q-route-tab
          :to="{name: 'search'}"
          replace
          label="Search"
          icon="search"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view :key="$route.params.id" />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  meta: {
    title: "Breaking Bad App"
  },

  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>
