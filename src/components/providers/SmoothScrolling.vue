<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// 1. REGISTRA O PLUGIN GLOBALMENTE
gsap.registerPlugin(ScrollTrigger)

let lenis: Lenis | null = null

onMounted(() => {
  // 2. INICIA O LENIS
  lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  // 3. Conectar Lenis ao ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update)

  // Adiciona o Lenis ao ticker do GSAP (loop de animação)
  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000)
  })

  // Desativa o lag smoothing para evitar "pulos" visuais
  gsap.ticker.lagSmoothing(0)
})

onUnmounted(() => {
  if (lenis) {
    lenis.destroy()
    gsap.ticker.remove(lenis.raf)
  }
})
</script>

<template>
  <slot />
</template>
