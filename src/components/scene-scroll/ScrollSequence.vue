<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SequenceCanvas from './SequenceCanvas.vue'
import I18nText from '@/components/TranslationText.vue'

const containerRef = ref<HTMLDivElement | null>(null)
const currentFrame = ref(0)
const frameProxy = ref({ current: 0 })

let ctx: gsap.Context | null = null

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.value,
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: true,
      },
    })

    // Animate frame index from 0 to 1285
    tl.to(frameProxy.value, { 
      current: 1285, 
      ease: "none", 
      onUpdate: () => {
        currentFrame.value = frameProxy.value.current
      }
    }, 0)

    // Additional effects from the original template
    tl.fromTo("#disney-mask-logo", { scale: 20 }, { scale: 1, ease: "power2.inOut" }, 0)
    tl.to("#disney-mask-overlay", { opacity: 0, duration: 0.2 }, ">-0.2")
  }, containerRef.value!)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <div ref="containerRef" class="relative w-full h-screen bg-[#020617] overflow-hidden">
    <SequenceCanvas 
      :frame-count="1286" 
      path-prefix="/sequence2/img_" 
      extension=".webp" 
      :current-frame="currentFrame" 
      class-name="object-cover opacity-40" 
    />

    <div class="absolute top-1/2 right-12 -translate-y-1/2 z-30 max-w-xs space-y-4 bg-blue-900/20 backdrop-blur-xl p-6 rounded-3xl border border-blue-400/20">
      <h4 class="text-white font-bold text-lg italic">
        <I18nText pt="Mágica em Movimento" en="Magic in Motion" es="Magia en Movimiento" />
      </h4>
      <p class="text-blue-100/60 text-sm">
        <I18nText pt="Cada pixel é sincronizado com o seu movimento." en="Every pixel is synced with your movement." es="Cada píxel está sincronizado con tu movimiento." />
      </p>
    </div>
  </div>
</template>
