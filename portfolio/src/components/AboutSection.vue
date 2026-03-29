<script lang="ts" src="./AboutSection.ts"></script>

<template>
  <section class="section about reveal" data-reveal>
    <div class="about-photo-container">
      <img 
        src="/img/profile-photo.jpg" 
        alt="Jan Niclas Ruppenthal" 
        class="about-photo-img"
      />
    </div>
    <div class="about-content">
      <p class="eyebrow">{{ $t('aboutIntro') }}</p>
      <h1 class="name-title">Jan Niclas Ruppenthal</h1>
      <div class="about-highlight">
        <p class="lead">
          {{ $t('aboutFirst', { age: age }) }}
        </p>
        <p>
          {{ $t('aboutSecond') }}
        </p>
      </div>
      <!--div class="about-actions">
        <a class="btn btn-primary" href="mailto:">{{ $t('aboutContact') }}</a>
        <a class="btn btn-primary" href="/files/LebenslaufRuppenthalJanNiclas.pdf" target="_blank" rel="noreferrer noopener">{{ $t('aboutDownloadCV') }}</a>
      </div-->
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

.about {
  display: grid;
  gap: 2rem;
  align-items: start;
  grid-template-columns: 260px 1fr;
}

.about-photo {
  margin-top: 2.6rem;
  height: calc(100% - 2.6rem);
  min-height: 300px;
  border-radius: 28px;
  border: 1px dashed var(--border-muted);
  background: var(--bg-surface);
  display: grid;
  place-items: center;
  color: var(--text-muted);
  font-size: 1rem;
}

.eyebrow {
  color: var(--text-slate-dark);
  margin: 0 0 0.75rem;
}

.about-content p {
  line-height: 1.75;
  color: var(--text-tertiary);
}

.about-highlight {
  border: 1px solid rgba(var(--accent-sky-rgb), 0.28);
  background: rgba(var(--accent-sky-rgb), 0.07);
  border-radius: 14px;
  padding: 1rem 1rem 0.35rem;
  box-shadow: inset 0 0 0 1px rgba(var(--accent-sky-rgb), 0.06);
}

.about-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

@media (max-width: 760px) {
  .about-photo-container {
    margin: 0 auto 2rem auto;
    max-width: 240px;
  }
}
</style>