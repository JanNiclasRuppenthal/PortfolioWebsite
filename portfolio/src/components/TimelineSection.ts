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

    return {
      timeline,
      selectedCard,
      openImage,
      closeImage
    }
  }
})