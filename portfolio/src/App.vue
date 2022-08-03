<template>
<<<<<<< Updated upstream
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App. This is a test"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
=======

  <section class="reveal active">
    <Header/>
  </section>

  <section class="reveal">
    <MyTools/>
  </section>

  <section class="reveal">
    <MyTimeline/>
  </section>

  <section class="reveal">
    <ContactMe/>
  </section>

 <section class="reveal">
  <HelloWorld/>
 </section>

</template>

<script>
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import MyTools from './components/MyTools.vue';
import MyTimeline from './components/MyTimeline.vue';
import ContactMe from './components/ContactMe.vue';


>>>>>>> Stashed changes

export default {
  name: 'App',
  components: {
<<<<<<< Updated upstream
    HelloWorld
  }
=======
    Header,
    HelloWorld,
    MyTools,
    MyTimeline,
    ContactMe
},

methods: {
  reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
},

},

mounted() {
  window.addEventListener("scroll", this.reveal);
}

>>>>>>> Stashed changes
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
<<<<<<< Updated upstream
  color: #2c3e50;
  margin-top: 60px;
}
=======
  color: #ffffff;
  background-color: #121212;
  margin-top: 0%;
  min-height: 100%;

  margin-left: 5%;
  margin-right: 5%;
}

section {
  margin-bottom: 75%;
}

.reveal{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 2s all ease;
}
.reveal.active{
  transform: translateY(0);
  opacity: 1;
}

>>>>>>> Stashed changes
</style>
