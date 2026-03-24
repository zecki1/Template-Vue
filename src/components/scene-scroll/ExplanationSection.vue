<script setup lang="ts">
import { Wand2, Terminal, MousePointer2, Share2, Info } from 'lucide-vue-next'
import I18nText from '@/components/TranslationText.vue'

const items = [
  { 
    icon: MousePointer2, 
    color: 'text-blue-400',
    title: { pt: "Interatividade", en: "Interactivity", es: "Interactividad" }, 
    desc: { pt: "A sequência do Hero responde a cliques.", en: "The Hero sequence responds to clicks.", es: "La secuencia del Hero responde a clics." } 
  },
  { 
    icon: Share2, 
    color: 'text-purple-400',
    title: { pt: "Performance", en: "Performance", es: "Rendimiento" }, 
    desc: { pt: "WebP otimizado para carregamentos rápidos.", en: "WebP optimized for fast loading.", es: "WebP optimizado para una carga rápida." } 
  },
  { 
    icon: Info, 
    color: 'text-cyan-400',
    title: { pt: "Sincronização", en: "Sync", es: "Sincronización" }, 
    desc: { pt: "GSAP ScrollTrigger interpola frames via scroll.", en: "GSAP ScrollTrigger interpolates frames via scroll.", es: "GSAP ScrollTrigger interpola fotogramas mediante desplazamiento." } 
  }
]
</script>

<template>
  <section class="relative z-30 bg-[#020617] py-24 px-6 md:px-12">
    <div class="max-w-6xl mx-auto space-y-24">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }" 
        :visible-once="{ opacity: 1, y: 0 }" 
        class="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-3xl p-8 md:p-16 rounded-[4rem] border border-blue-400/20 overflow-hidden"
      >
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div class="relative z-10 space-y-12">
          <header class="space-y-4">
            <div class="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-1.5 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-400/20">
              <Wand2 size="14" /> <I18nText pt="A Tecnologia Mágica" en="The Magic Tech" es="La Tecnología Mágica" />
            </div>
            <h2 class="text-4xl md:text-6xl font-serif text-white">
              <I18nText pt="Como Funciona a Mágica?" en="How Does the Magic Work?" es="¿Cómo Funciona la Magia?" />
            </h2>
            <p class="text-blue-100/60 text-lg max-w-2xl leading-relaxed">
              <I18nText 
                pt="Transformamos vídeos cinematográficos em sequências de imagens comprimidas para controle total da animação." 
                en="We transform cinematic videos into compressed image sequences for complete animation control." 
                es="Transformamos videos cinematográficos en secuencias de imágenes comprimidas para un control total de la animación." 
              />
            </p>
          </header>

          <div class="space-y-4">
            <div class="flex items-center gap-3 text-blue-200 font-mono text-sm mb-2">
              <Terminal size="18" /><span><I18nText pt="Script de Conversão (FFMPEG)" en="Conversion Script (FFMPEG)" es="Script de Conversión (FFMPEG)" /></span>
            </div>
            <pre class="bg-black/60 p-6 md:p-8 rounded-2xl border border-white/10 overflow-x-auto text-sm md:text-base font-mono text-blue-300">
              <code>
                ffmpeg -i video.mp4 -vf "scale=1920:-1" \
                -c:v libwebp -quality 80 \
                public/sequence/img_%04d.webp;
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(item, i) in items" :key="i" class="bg-white/5 p-8 rounded-3xl border border-white/5 space-y-4 hover:bg-white/10 transition-colors">
          <div class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
            <component :is="item.icon" :class="item.color" />
          </div>
          <h3 class="text-xl font-bold text-white">
            <I18nText :pt="item.title.pt" :en="item.title.en" :es="item.title.es" />
          </h3>
          <p class="text-blue-100/40 text-sm">
            <I18nText :pt="item.desc.pt" :en="item.desc.en" :es="item.desc.es" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
