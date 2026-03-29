import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'LanguageSection',
  setup() {
    const { locale } = useI18n({ useScope: 'global' })

    const toggleLanguage = () => {
      // Toggle between 'en' and 'de'
      const newLocale = locale.value === 'en' ? 'de' : 'en'
      locale.value = newLocale
      localStorage.setItem('user-lang', newLocale)
    }

    return {
      locale,
      toggleLanguage
    }
  }
})