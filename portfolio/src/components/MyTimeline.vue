<template>
<div class="root">
  <h1 class="timeline">My Timeline</h1>
  <v-divider class="divider"></v-divider>

  <template>
  <v-timeline
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
  >
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card
        :color="black"
        dark
      >
        <v-card-title class="text-h6">
          Lorem Ipsum Dolor
        </v-card-title>
        <v-card-text class="white text--primary">
          <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
          <v-btn
            color="#8b008b"
            class="mx-0"
            outlined
          >
            Button
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

</div>


</template>



<script>
  export default {
    data: () => ({
      items: [
        {
          color: '#8b008b',
          icon: 'mdi-application',
        },
        {
          color: '#8b008b',
          icon: 'mdi-application',
        },
        {
          color: '#8b008b',
          icon: 'mdi-application',
        },
        {
          color: '#8b008b',
          icon: 'mdi-application',
        },
      ],
    }),
  }
</script>

<style>
.timeline {
  text-align: left;
}

.divider {
    border-color: aqua !important;
    margin-bottom: 10%;
}

.text-h6 {
  color: aqua;
}
</style>