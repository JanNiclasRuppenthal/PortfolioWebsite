<template>
<div class="root">
  <h1 class="timeline">My Timeline</h1>
  <v-divider class="divider"></v-divider>

  <template>
  <v-timeline align-left :dense="$vuetify.breakpoint.smAndDown" dark>

    <v-timeline-item color="#8b008b" icon="mdi-application-brackets-outline" fill-dot>
      <v-card :color="black" dark>
        <v-card-title class="text-h6">August 2022: Portfolio Website</v-card-title>
        <v-card-text class="white text--primary">
          <p>This website shows the tools which I can work with and my last projects.</p>
          <br/>
          <v-btn color="#8b008b" class="btn" outlined href="https://github.com/JanNiclasRuppenthal/PortfolioWebsite" target="_blank">Show Repository </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="#8b008b" icon="mdi-cellphone" fill-dot>
      <v-card :color="black" dark>
        <v-card-title class="text-h6">September 2021: CreARtion</v-card-title>
        <v-card-text class="white text--primary">
          <p>CreARtion is an Android App which has not been officially published on the Google PlayStore yet. In this App you can transform objects into sculptures in Augmented Reality. <br/>
          It was developed as part of a module called "Kleines Studienprojekt" at University Trier.</p>
          <br/>
          <v-btn color="#8b008b" class="btn" outlined href="https://github.com/JanNiclasRuppenthal/CreARtion" target="_blank">Show Repository </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>

        <v-timeline-item color="#8b008b" icon="mdi-certificate" fill-dot>
      <v-card :color="black" dark>
        <v-card-title class="text-h6">March 2019: Abitur</v-card-title>
        <v-card-text class="white text--primary">
          <p>Achieved the general qualification for university entrance.</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>

        <v-timeline-item color="#8b008b" icon="mdi-baby-face-outline" fill-dot>
      <v-card :color="black" dark>
        <v-card-title class="text-h6">November 1999: Birthdate</v-card-title>
        <v-card-text class="white text--primary">
          <p>System.out.println("Hello World!")</p>
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