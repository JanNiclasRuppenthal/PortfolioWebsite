<template>

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



export default {
  name: 'App',
  components: {
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

}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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

</style>
