<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { IntroSequence, ScrollSequence, ExplanationSection } from '@/components/scene-scroll'

// ─── Normaliza os paths do Illustrator (espaço de 1000 unidades) para 0-1 (objectBoundingBox) ───
function normalizePath(d: string): string {
  return d.replace(/-?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g, (n) =>
    String(parseFloat(n) / 1000)
  )
}

const ZECKI1_COMPOUND_PATH = normalizePath(
  "M165,365v53.11l-53.96,138.89h53.96v48H40v-50.31l55.2-141.69h-49.2v-48h119ZM347.26,489h-94.71c.8,12.59-2.09,63.18,2.35,72.84,3.26,7.27,17.88,5.71,20.19-1.54,4.32-8.41,2.41-43.62,2.81-55.3h69.35c.08,14.61.22,40.96-2.81,51.4-13.67,52.14-74.35,62.04-119.97,45.99-21.74-7.88-35.43-23.43-41.29-44.09-6.49-20.14-2.91-86.76-3.8-110.91-2.47-55.43,26.73-87.65,80.95-87.28,84.6,1.08,89.46,57.87,86.92,128.89ZM273.92,450c-1.29-13,4.75-48.29-10.14-47.08-14.34.45-9.97,11.38-11.23,29.52,0,0,0,17.57,0,17.57h21.37ZM533.07,455h-69.07s0-27.87,0-27.87c-.92-13.78,1.26-23.76-11.06-24.95-4.23,0-7.07,1.52-8.52,4.55-4.59,9.78-1.18,121.07-2.18,134.42,0,8.62,1.09,15.09,3.27,19.4,3.74,8.88,16.71,8.48,19.67-.27,3.82-8.18,2.36-41.94,2.63-54.28h65.27c.58,42.83-2.4,76.31-40.97,96.08-22.87,11.51-69.8,9.92-89.92-2.91-30.4-19.41-32.04-45.05-33.18-84.42,0,0,0-68.67,0-68.67,1.18-37.67,1.71-54.89,32.45-74.41,25.48-16.41,72.26-16.35,97.9-.09,32.17,20.34,32.37,43.56,33.72,83.42ZM712.14,365l-29.7,95.16,38.57,144.84h-70.35l-22.66-104.98v104.98h-73v-293h72v122.65l23.66-69.65h61.48ZM807,312v38h-75v-38h75ZM807,365v240h-75v-240h75ZM946,312v293h-73.35c-.81-26.8,1.85-177.08-1.63-197.99-5.84-17.34-27.07-12.8-49.02-13.93v-34.16c35.46-7.61,62.39-23.25,80.79-46.92h43.21Z"
)

const containerRef = ref<HTMLDivElement | null>(null)
const logoPathRef = ref<SVGPathElement | null>(null)

let ctx: gsap.Context | null = null

onMounted(async () => {
  gsap.registerPlugin(ScrollTrigger)
  await nextTick()

  let heightRatio = window.innerWidth / window.innerHeight

  ctx = gsap.context(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=400%",
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      },
    })
    .fromTo(
      [".hero-bg-svg", ".hero-content"],
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.1 }
    )
    .fromTo(
      logoPathRef.value!,
      {
        scaleX: 0.25,
        scaleY: () => 0.25 * heightRatio,
        x: 0,
        transformOrigin: "center center",
      },
      {
        scaleX: 500, 
        scaleY: () => 500 * heightRatio,
        x: 0, 
        transformOrigin: "center center",
        duration: 0.75, 
        ease: "power2.in",
      }
    )
    .to(".hero-container", { autoAlpha: 0, duration: 0.25 })
  }, containerRef.value!)

  const onResize = () => {
    heightRatio = window.innerWidth / window.innerHeight
  }
  window.addEventListener("resize", onResize)

  onUnmounted(() => {
    if (ctx) ctx.revert()
    window.removeEventListener("resize", onResize)
  })
})
</script>

<template>
  <main
    ref="containerRef"
    class="text-white selection:bg-purple-500 overflow-x-hidden bg-[#020617]"
  >
    <!-- SEÇÃO HERO -->
    <section
      class="hero-section w-full h-screen min-h-[100svh] flex items-center justify-center relative overflow-hidden z-[1]"
    >
      <div
        class="hero-container w-full h-screen relative flex justify-center items-center bg-white overflow-hidden"
        style="clip-path: url(#clip-path-zecki)"
      >
        <!-- Background de Gradiente Animado -->
        <svg
          class="hero-bg-svg absolute inset-0 w-full h-full z-0 block opacity-0"
          viewBox="0 0 1200 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="swirlGradient" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stop-color="#6ec6d9" />
              <stop offset="60%" stop-color="#2a7fbf" />
              <stop offset="100%" stop-color="#0a1d5e" />
            </radialGradient>
            <filter id="swirl" x="0" y="0">
              <feTurbulence type="turbulence" baseFrequency="0.012 0.018" numOctaves="2" seed="8" result="turb" />
              <feDisplacementMap in2="turb" in="SourceGraphic" scale="120" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <circle cx="600" cy="450" r="800" fill="url(#swirlGradient)" filter="url(#swirl)" />
        </svg>

        <!-- IntroSequence revelada através do recorte do logo -->
        <div
          class="hero-content absolute inset-0 z-[1] opacity-0"
        >
          <IntroSequence />
        </div>
      </div>
    </section>

    <!-- DEFINIÇÃO DO CLIP-PATH (OCULTO) -->
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" id="clipContainer" class="absolute">
      <clipPath id="clip-path-zecki" clipPathUnits="objectBoundingBox">
        <path 
          ref="logoPathRef" 
          id="logoPath" 
          :d="ZECKI1_COMPOUND_PATH" 
        />
      </clipPath>
    </svg>

    <!-- Sequências Posteriores -->
    <section class="relative z-10">
      <ScrollSequence />
    </section>

    <section class="relative z-10 bg-[#020617]">
      <ExplanationSection />
    </section>
  </main>
</template>

<style scoped>
/* Fallback for Safari/iOS if clip-path url() behaves weirdly */
.hero-container {
  -webkit-clip-path: url(#clip-path-zecki);
  clip-path: url(#clip-path-zecki);
}
</style>
