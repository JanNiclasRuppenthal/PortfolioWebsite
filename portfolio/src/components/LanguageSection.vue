<script lang="ts" src="./LanguageSection.ts"></script>

<template>
    <div class="lang-container">
        <button class="flag-btn toggle-btn" @click="toggleLanguage">
        <span>{{ $t('changeLanguage') }}</span>
        <span :class="['fi', locale === 'en' ? 'fi-de' : 'fi-gb']"></span>
        </button>
    </div>
</template>

<style scoped>

.lang-container {
  display: flex;
  justify-content: flex-end;
}

.flag-btn {
  background: rgba(167, 139, 250, 0.16);
  color: var(--accent-purple-soft);
  border-color: rgba(167, 139, 250, 0.5);
  border: 1px solid #3f3f46;
  border-radius: 12px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: white;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1em;
}

.flag-btn:hover {
  background: rgba(167, 139, 250, 0.24);
  transform: translateY(-2px);
}

.flag-btn:active {
  transform: translateY(0);
}

.fi {
  width: 20px;
  border-radius: 2px;
}
</style>