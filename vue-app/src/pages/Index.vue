<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="white" 
      text-color="black" 
      :to="{name: 'profile', params: {id: 1}}"
      replace
      label="Walter White" />
      <q-btn color="white" 
      text-color="black" 
      :to="{name: 'profile', params: {id: 2}}"
      replace
      label="Jesse Pinkman"/>
      <q-btn color="white" 
      text-color="black" 
      :to="{name: 'profile', params: {id: 'random'}}"
      replace
      label="Random"/>    
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
