<template>

<div class="root">
    <div class="header">
        <!-- I need a logo somehow....-->
        <h1 class="logo">JNR</h1>

        <!-- Add icon library -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <div class="icons">
            <!-- Add font awesome icons -->
            <a href="#" class="fa fa-instagram fa-2x"></a>
            <a href="#" class="fa fa-twitter fa-2x"></a>
            <a href="#" class="fa fa-github fa-2x"></a>
        </div>
    </div>
        <div class="content">
            <h3>Hey, my name is</h3>
            <h1>Jan Niclas Ruppenthal</h1>
            <p>
                I'm a 22 year-old student from University of Trier
                who is fascinated by soft- and hardware. <br/>
                My main goal is to be a Software Developer. 
            </p>
        </div>

    <div class="foot">
        <v-subheader class="subheader">Scroll/Swipe down to learn more about me.</v-subheader>
        <v-divider class="divider" light="true"/>
    </div>


</div>

</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #ffffff;
  background-color: #121212ee;

  margin-top: 60px;
}

.logo {

    margin-left: auto;
    text-align: left;
    font-size: 200%;
}

.fa {
  padding: 10%;
  width: 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 100%;
  color: aqua;


}

.header{
    position: relative;
}

.header .logo {
    position: absolute;
    top: 0px;
    left: 0px;
}


 .header .icons {
    position: absolute;
    top: 0%;
    right: 0%;
    margin-right: 5%;
}

.content {
    position: relative;
    padding-top: 200px;
    align-self: center;
    text-align: left;
}

h3 {
    margin-top: 2em;
    margin-bottom: 2em;
}

.content h1 {
    margin-top: 2em;
    margin-bottom: 2em;
}


.subheader {
    color: #ffffff !important;
    margin-top: 160px;
    text-align: center;

    animation: subheader 2s ease infinite;
}

@keyframes subheader {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}


.divider {
    border-color: aqua !important;
}

</style>
