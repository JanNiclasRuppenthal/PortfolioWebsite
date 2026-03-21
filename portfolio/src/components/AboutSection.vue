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
          I enjoy learning by building, breaking, and improving. My focus is on solving problems in
          a way that is practical, readable, and useful for real people.
        </p>
        <p>
          I like exploring different technologies, from the logic and structure of Java to the
          creative side of Unity. Every project teaches me something new.
        </p>
      </div>
      <div class="about-actions">
        <a class="btn btn-primary" href="mailto:janniclas99.jnr@gmail.com">Contact me</a>
        <a class="btn btn-secondary" href="/LebenslaufRuppenthalJanNiclas.pdf" target="_blank" rel="noreferrer noopener">
          Download CV
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add these styles to handle the image properly */
.about-photo-container {
  margin-top: 2.6rem;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 28px;
  overflow: hidden; /* This clips the image to the border radius */
  border: 1px solid #3f3f46;
}

.about-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* This ensures the photo fills the box without stretching */
  display: block;
}

/* Maintain your mobile responsiveness */
@media (max-width: 760px) {
  .about-photo-container {
    margin: 0 auto 2rem auto;
    max-width: 240px;
  }
}
</style>