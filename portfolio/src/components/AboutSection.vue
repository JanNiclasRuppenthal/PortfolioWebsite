<script lang="ts" src="./AboutSection.ts"></script>

<template>
  <section class="section about reveal" data-reveal>
    <div class="about-photo-container">
      <img 
        src="/profile-photo.jpg" 
        alt="Jan Niclas Ruppenthal" 
        class="about-photo-img"
      />
    </div>
    <div class="about-content">
      <p class="eyebrow">Hello, my name is</p>
      <h1 class="name-title">Jan Niclas Ruppenthal</h1>
      <div class="about-highlight">
        <p class="lead">
          I'm a {{ age }} year-old PhD student at the Trier University who is fascinated by both software and hardware.
          My main goal is to earn my doctoral degree and contribute to advancing knowledge in my field.
        </p>
        <p>
          In my free time and besides programming, I do some workouts and currently learning 3D printing and modelling using CAD software.
        </p>
      </div>
      <div class="about-actions">
        <a class="btn btn-primary" href="mailto:janniclas99.jnr@gmail.com">Contact me</a>
        <a class="btn btn-primary" href="/LebenslaufRuppenthalJanNiclas.pdf" target="_blank" rel="noreferrer noopener">
          Download CV
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-photo-container {
  margin-top: 2.6rem;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid #3f3f46;
}

.about-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 760px) {
  .about-photo-container {
    margin: 0 auto 2rem auto;
    max-width: 240px;
  }
}
</style>