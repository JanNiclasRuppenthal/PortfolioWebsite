<template>
<div class="root">
  <section class="reveal active">
    <Header/>
  </section>

  <div class="distance">
    <section class="reveal">
      <MyTools/>
    </section>
    </div>

  <div class="distance">
    <section class="reveal">
      <MyTimeline/>
    </section>
  </div>

  <div class="distance">
    <section class="reveal">
      <ContactMe/>
    </section>
  </div>
  
  <div class="distance">
    <section class="reveal">
      <HelloWorld/>
    </section>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue';
import HelloWorld from './components/HelloWorld.vue';
import MyTools from './components/MyTools.vue';
import MyTimeline from './components/MyTimeline.vue';
import ContactMe from './components/ContactMe.vue';



export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
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

beforeMount() {
  window.addEventListener("scroll", this.reveal);
}

}


</script>

<style>
#app, body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #121212ee;
  margin-top: 5%;
  min-height: 100%;

  margin-left: 5%;
  margin-right: 5%;
  
}

section {
  padding-bottom: 5%;
  padding-right: 5%;
  padding-left: 5%;

}

.distance {
  padding-top: 50%;
}

.reveal{
  position: relative;
  transform: translateY(100px);
  opacity: 0;
  transition: 2s all ease;
}
.reveal.active{
  transform: translateY(0);
  opacity: 1;
}

</style>
