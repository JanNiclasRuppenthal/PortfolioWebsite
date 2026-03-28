import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'AboutSection',
  setup() {
    const birthDate = new Date(1999, 10, 6) // November 6, 1999 (Month is 0-indexed)

    const age = computed(() => {
      const today = new Date()
      let currentAge = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        currentAge--
      }
      return currentAge
    })

    const { locale } = useI18n({ useScope: 'global' })

    const toggleLanguage = () => {
      // Toggle between 'en' and 'de'
      const newLocale = locale.value === 'en' ? 'de' : 'en'
      locale.value = newLocale
      localStorage.setItem('user-lang', newLocale)
    }

    return {
      age,
      locale,
      toggleLanguage
    }
  }
})