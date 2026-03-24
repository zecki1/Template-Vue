<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SequenceCanvas from './SequenceCanvas.vue'
import I18nText from '@/components/TranslationText.vue'

const frame = ref(0)
const clicked = ref(false)

let interval: any = null

const toggleClick = () => {
  clicked.value = !clicked.value
  if (clicked.value) {
    interval = setInterval(() => {
      frame.value = (frame.value + 1) % 100
    }, 33)
  } else {
    if (interval) clearInterval(interval)
  }
}

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <section 
    class="relative w-full h-screen bg-[#020617] overflow-hidden cursor-pointer group"
    @click="toggleClick"
  >
    <div class="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-1000">
      <SequenceCanvas 
        :frame-count="281" 
        path-prefix="/sequence/img_" 
        extension=".webp" 
        :current-frame="Math.floor(frame * 2.8)" 
        class-name="object-cover" 
      />
    </div>

    <div class="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1000, delay: 500 }"
        class="space-y-4"
      >
        <h1 class="text-6xl md:text-9xl font-serif text-white drop-shadow-2xl">
          <I18nText pt="Imagine a Mágica" en="Imagine the Magic" es="Imagina la Magia" />
        </h1>
        <p class="max-w-xl mx-auto text-blue-100/60 text-lg md:text-xl font-light leading-relaxed">
          <I18nText 
            pt="Clique para iniciar a animação ou role para descobrir o segredo." 
            en="Click to start the animation or scroll to discover the secret." 
            es="Haz clic para iniciar la animación o desplázate para descubrir el secreto." 
          />
        </p>
      </div>

      <Transition name="fade">
        <div v-if="!clicked" class="absolute bottom-20 flex flex-col items-center gap-2">
          <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white animate-bounce">
            <span class="text-xs font-bold uppercase tracking-tighter">
              <I18nText pt="Clique" en="Click" es="Clic" />
            </span>
          </div>
        </div>
      </Transition>
    </div>

    <div class="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#020617]/40 via-transparent to-[#020617]" />
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
