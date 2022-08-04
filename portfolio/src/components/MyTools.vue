<template>
<div class="root">
  <h1 class="tools">My Tools</h1>
  <v-divider class="divider"></v-divider>

<div class="cards">

  <div class="Java">
    <v-card @mouseover="revealJava = true" @mouseleave="revealJava = false"
      class="mx-auto" width="250" height="250" color="#000000">
      <v-card-text>
        <h1>Java</h1>
      </v-card-text>
      <!-- Source: https://www.oracle.com/java/duke/-->
      <v-img src="..\src\assets\duke-java-mascot.jpg" max-width="250" max-height="200"></v-img>
      <v-card-actions>
        <!-- Should I change that for mobile devices?? -->
        <v-btn text color="#8b008b" @click="revealJava = true">Learn More</v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card v-if="revealJava" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;" color="#000000">
          <v-card-text class="pb-0">
            <p>At the beginning of my studies in 2019 I began to learn the programming language Java. Throghout the years I learned to love this programming language. I like the class-based and object-oriented implementation. <br/>
            "Write once, run erverywhere".</p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn text color="#8b008b" @click="revealJava = false" >Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>  
  </div>

    <div class="CSharp">
    <v-card @mouseover="revealCSharp = true" @mouseleave="revealCSharp = false"
      class="mx-auto" width="250" height="250" color="#000000">
      <v-card-text>
        <h1>C#</h1>
      </v-card-text>
      <!-- Source: https://en.wikipedia.org/wiki/File:Csharp_Logo.png-->
      <v-img src="..\src\assets\csharp.png" max-width="250" max-height="146"></v-img>
      <v-card-actions>
        <!-- Should I change that for mobile devices?? -->
        <v-btn text color="#8b008b" @click="revealCSharp = true">Learn More</v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card v-if="revealCSharp" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;" color="#000000">
          <v-card-text class="pb-0">
            <p>C# is the first programming language which I learned through a book on my own. The reason why I chose this language is because I wanted to program video games and C# is similar to Java.</p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn text color="#8b008b" @click="revealCSharp = false" >Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>  
  </div>


  <div class="Python">
    <v-card @mouseover="revealPython = true" @mouseleave="revealPython = false"
      class="mx-auto" width="250" height="250" color="#000000">
      <v-card-text>
        <h1>Python</h1>
      </v-card-text>
      <!-- Source: https://www.python.org/community/logos/-->
      <v-img src="..\src\assets\python.jpg" max-width="250" max-height="145"></v-img>
      <v-card-actions>
        <!-- Should I change that for mobile devices?? -->
        <v-spanner></v-spanner>
        <v-btn text color="#8b008b" @click="revealPython = true">Learn More</v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card v-if="revealPython" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;" color="#000000">
          <v-card-text class="pb-0">
            <p>With Python I made my first steps in the programming world. In 2016/2017 I learned the basic concepts of coding with Python. It is not my favourite language because it is not a strictly typed language.</p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn text color="#8b008b" @click="revealPython = false" >Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>  
  </div>


  <div class="UnityEngine">
    <v-card @mouseover="revealUnity = true" @mouseleave="revealUnity = false"
      class="mx-auto" width="250" height="250" color="#000000">
      <v-card-text>
        <h1>Unity Engine</h1>
      </v-card-text>
      <!-- Source: https://www.oracle.com/java/duke/-->
      <v-img src="..\src\assets\placeholder.png" max-width="250" max-height="200"></v-img>
      <v-card-actions>
        <!-- Should I change that for mobile devices?? -->
        <v-btn text color="#8b008b" @click="revealUnity = true">Learn More</v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card v-if="revealUnity" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;" color="#000000">
          <v-card-text class="pb-0">
            <p>Back in 2021, I started to learn to program software in the Unity Engine through a book with a lot of tutorials. I wanted to program video games in Unity because the engine is popular and it is a cross-plattform game-engine.</p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn text color="#8b008b" @click="revealUnity = false" >Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>  
  </div>


</div>


</div>

</template>

<script>
  export default {
    data: () => ({
      revealJava: false,
      revealCSharp: false,
      revealPython: false,
      revealUnity: false,
    }),
  }
</script>

<style>
.tools {
  text-align: left;
}

.divider {
    border-color: aqua !important;
    margin-bottom: 10%;
}


.cards {
  display: flex;
  vertical-align: scroll;
  overflow-x: scroll;
}


p {
  text-align: left;
  color: white;
}

.Java {
  margin-right: 5%;
}

.CSharp {
  margin-right: 5%;
}


.Python {
  margin-right: 5%;
}


.UnityEngine {
  margin-right: 5%;
}


.Java h1{
  color:aqua;
}

.CSharp h1{
  color:aqua;
}

.Python h1{
  color:aqua;
}

.UnityEngine h1{
  color:aqua;
}



.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 200%;
}
</style>