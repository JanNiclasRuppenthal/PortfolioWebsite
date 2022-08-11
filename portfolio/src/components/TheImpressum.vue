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
        <a href="#" class="fa fa-instagram fa-2x"></a>
        <a href="#" class="fa fa-twitter fa-2x"></a>
        <a href="#" class="fa fa-github fa-2x"></a>
    </div>

    
    <div class="content2"><h1>Impressum</h1></div>
    
    


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


</style>