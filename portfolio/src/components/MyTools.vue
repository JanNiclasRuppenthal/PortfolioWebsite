<template>
<v-card
  elevation="24"
  loading
  outlined>
  <v-card-title>Dies ist ein Test</v-card-title>
</v-card></template>


<script>
  export default {
    data: () => ({
      reveal: false,
    }),
  }
</script>


<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>