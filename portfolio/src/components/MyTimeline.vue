<template>
<div class="root">
  <h1 class="timeline">My Timeline</h1>
  <v-divider class="divider"></v-divider>

  <v-app style="background-color:transparent !important;">
      <v-main>

    <v-timeline :dense="$vuetify.breakpoint.smAndDown">

      <v-timeline-item  color="orange" icon="mdi-school" fill-dot>
      <v-card color="black" dark>
        <v-card-title class="text-h6">Juli 2025: PhD Student</v-card-title>
        <v-card-text class="text--primary">
          <p>
            Currently, I am pursuing a PhD in computer science, focusing my research on software engineering and augmented reality to develop advanced methods for designing interactive and immersive systems.
          </p>
        </v-card-text>
      </v-card>
    </v-timeline-item>

      <v-timeline-item  color="orange" icon="mdi-certificate" fill-dot>
      <v-card color="black" dark>
        <v-card-title class="text-h6">May 2025: Master of Science</v-card-title>
        <v-card-text class="text--primary">
          <p>Master of Science in Computer Science: During my master’s studies, I specialized in software engineering, focusing on the design and development of complex, reliable software systems. In addition, I extended my knowledge of algorithms to address challenging computational problems with greater efficiency and precision.</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item  color="orange" icon="mdi-certificate" fill-dot>
      <v-card color="black" dark>
        <v-card-title class="text-h6">March 2023: Bachelor of Science</v-card-title>
        <v-card-text class="text--primary">
          <p>Bachelor of Science in Computer Science: During my bachelor’s studies, I developed a broad foundation in computer science, covering programming, software development, algorithms, and information technology systems. This enabled me to analyze complex problems and create practical software solutions across various domains.</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="orange" icon="mdi-application-brackets-outline" fill-dot>
      <v-card color="black" dark>
        <v-card-title class="text-h6">August 2022: Portfolio Website</v-card-title>
        <v-card-text class="text--primary">
          <p>This website serves as a platform that showcases the diverse range of tools I proficiently work with, but also highlights the impressive projects I have accomplished.</p>
          <v-btn color="#FF5722" class="btn" outlined href="https://github.com/JanNiclasRuppenthal/PortfolioWebsite" target="_blank">Show Repository</v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="orange" icon="mdi-cellphone" fill-dot>
      <v-card color="black" dark>
        <v-card-title class="text-h6">September 2021: CreARtion</v-card-title>
        <v-card-text class="text--primary">
          <p>CreARtion is an Android App which has been officially published on the Google PlayStore. In this App you can transform objects into sculptures in Augmented Reality. <br/>
          It was developed as part of a module called "Kleines Studienprojekt" at University Trier.</p>
          <v-btn color="#FF5722" class="btn" outlined href="https://play.google.com/store/apps/details?id=com.SAB_JNR.CreARtion" target="_blank">Show APP</v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="orange" icon="mdi-certificate" fill-dot>
      <v-card color="black" dark>
        <v-card-title class="text-h6">March 2019: Abitur</v-card-title>
        <v-card-text class="text--primary">
          <p>Achieved the general qualification for university entrance.</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="orange" icon="mdi-baby-face-outline" fill-dot>
      <v-card color="black" dark>
        <v-card-title class="text-h6">November 1999: Birthdate</v-card-title>
        <v-card-text class="text--primary">
          <p>System.out.println("Hello World!")</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>

  </v-timeline>

      </v-main>
    </v-app>


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
  background-color: black;
}
</style>