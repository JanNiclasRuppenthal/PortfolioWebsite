import { ref, defineComponent } from 'vue'
import { timeline } from '../constants/portfolioData'
import type { TimelineEntry } from '../types/index'

export default defineComponent({
  name: 'TimelineSection',
  setup() {
    // State to track the currently enlarged image/entry
    const selectedCard = ref<TimelineEntry | null>(null)

    const openImage = (entry: TimelineEntry) => {
      if (!entry.imageSrc) return
      selectedCard.value = entry
      // Prevent background scrolling while viewing photo
      document.body.style.overflow = 'hidden'
    }

    const closeImage = () => {
      selectedCard.value = null
      document.body.style.overflow = 'auto'
    }

    const handleSpotlight = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement
      const rect = target.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      target.style.setProperty('--mouse-x', `${x}px`)
      target.style.setProperty('--mouse-y', `${y}px`)
    }

    return {
      timeline,
      selectedCard,
      openImage,
      closeImage,
      handleSpotlight
    }
  }
})