<template>
  <div class="header">

    <!-- I need a logo somehow.... -->
    <router-link to="/">
      <h1 class="logo">JNR</h1>
    </router-link>

    <!-- Add icon library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <div class="icons">
            <!-- Add font awesome icons -->
            <a href="https://www.instagram.com/stubbi06/"  target=”_blank” class="fa fa-instagram fa-2x"/>
            <a href="https://twitter.com/Stubbi_33/"  target=”_blank” class="fa fa-twitter fa-2x"/>
            <a href="https://github.com/JanNiclasRuppenthal"  target=”_blank” class="fa fa-github fa-2x"/>
        </div>

    
    <div class="content2">
      <h1>Impressum</h1>
      <p>Angaben gemäß § 5 TMG</p>
      <p>Jan Niclas Ruppenthal<br> 
          Hochwaldstraße, 6<br> 
          55767 Niederhambach<br> 
      </p>
      <p> <strong>Vertreten durch: </strong><br>
          Jan Niclas Ruppenthal<br>
      </p>
      <p><strong>Kontakt:</strong> <br>
          Telefon: 0171 2391748<br>
          E-Mail: <a href="mailto:jan.rupp06@web.de">jan.rupp06@web.de</a><br>
      </p>
      <div class="generator">
        Website Impressum erstellt durch <a href="https://www.impressum-generator.de">impressum-generator.de</a> von der <a href="https://www.kanzlei-hasselbach.de/" rel="nofollow">Kanzlei Hasselbach</a>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'TheImpressum',
    components: {},
    data() {
      return {}
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.content2 {
    padding-top: 200px;
    align-self: center;
}

.generator {
  padding-top: 10%;
}

</style>