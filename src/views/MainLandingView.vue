<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { 
  Monitor, Smartphone, Play, 
  MousePointer2, Sparkles, ChevronRight 
} from 'lucide-vue-next'
import I18nText from '@/components/TranslationText.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const templates = [
  {
    id: 'standard',
    name: 'Standard Template',
    path: '/home', // Moving original home to /home
    icon: Monitor,
    color: 'bg-blue-500',
    desc: {
      pt: 'O guia definitivo com Shadcn, i18n e Galeria de Componentes.',
      en: 'The definitive guide with Shadcn, i18n and Component Gallery.',
      es: 'La guía definitiva com Shadcn, i18n y Galería de Componentes.'
    },
    tags: ['Core', 'shadcn-vue', 'i18n']
  },
  {
    id: 'apple',
    name: 'Apple Style',
    path: '/apple',
    icon: Smartphone,
    color: 'bg-zinc-900',
    desc: {
      pt: 'Design minimalista, foco em produto e bento grids cinematográficos.',
      en: 'Minimalist design, product focus and cinematic bento grids.',
      es: 'Diseño minimalista, enfoque en producto y bento grids cinematográficos.'
    },
    tags: ['Bento', 'Minimalist', 'Product']
  },
  {
    id: 'streaming',
    name: 'Streaming UI',
    path: '/streaming',
    icon: Play,
    color: 'bg-red-600',
    desc: {
      pt: 'Experiência imersiva estilo Netflix com heros de vídeo e carrosséis.',
      en: 'Immersive Netflix-style experience with video heroes and carousels.',
      es: 'Experiencia inmersiva estilo Netflix con heros de video y carruseles.'
    },
    tags: ['Media', 'Carousel', 'Video']
  },
  {
    id: 'scene-scroll',
    name: 'Scene Scroll',
    path: '/scene-scroll',
    icon: MousePointer2,
    color: 'bg-purple-600',
    desc: {
      pt: 'Animações de alta fidelidade sincronizadas por scroll e máscaras SVG.',
      en: 'High-fidelity animations synced by scroll and SVG masks.',
      es: 'Animaciones de alta fidelidad sincronizadas por scroll y máscaras SVG.'
    },
    tags: ['GSAP', 'SVG Mask', 'Scroll']
  }
]
</script>

<template>
  <div class="min-h-screen bg-background pb-20">
    <!-- Hero Principal -->
    <section class="py-20 md:py-32 relative overflow-hidden text-center container mx-auto px-4">
      <div class="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div class="w-[800px] h-[800px] bg-primary rounded-full blur-[150px] animate-pulse"></div>
      </div>

      <div class="relative z-10 max-w-4xl mx-auto space-y-8">
        <Badge variant="outline" class="px-4 py-1 text-sm rounded-full mb-4">
          <Sparkles class="w-4 h-4 mr-2 text-primary" />
          <I18nText pt="Versão 4.0 Pro" en="Version 4.0 Pro" es="Versión 4.0 Pro" />
        </Badge>
        
        <h1 class="text-5xl md:text-8xl font-black tracking-tighter leading-tight">
          Super<span class="text-primary italic">Templates</span> Vue
        </h1>
        
        <p class="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          <I18nText 
            pt="Uma coleção de layouts de alta fidelidade e arquiteturas robustas prontas para produção." 
            en="A collection of high-fidelity layouts and robust architectures ready for production." 
            es="Una colección de diseños de alta fidelidad y arquitecturas robustas listas para la producción." 
          />
        </p>

        <div class="flex flex-wrap justify-center gap-4 pt-4">
          <Button size="lg" class="rounded-full px-8 h-14 text-lg">
            <I18nText pt="Explorar Catálogo" en="Explore Catalog" es="Explorar Catálogo" />
          </Button>
          <Button variant="outline" size="lg" class="rounded-full px-8 h-14 text-lg">
            Documentação
          </Button>
        </div>
      </div>
    </section>

    <!-- Grade de Templates -->
    <section class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div 
        v-for="(tpl, i) in templates" 
        :key="tpl.id"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ delay: i * 100 }"
      >
        <Card class="h-full flex flex-col group hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
          <CardHeader>
            <div :class="['w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg', tpl.color]">
              <component :is="tpl.icon" class="w-6 h-6" />
            </div>
            <CardTitle class="text-2xl font-bold">{{ tpl.name }}</CardTitle>
            <CardDescription class="min-h-[60px] leading-relaxed">
              <I18nText :pt="tpl.desc.pt" :en="tpl.desc.en" :es="tpl.desc.es" />
            </CardDescription>
          </CardHeader>
          <CardContent class="flex-1">
            <div class="flex flex-wrap gap-2">
              <Badge v-for="tag in tpl.tags" :key="tag" variant="secondary" class="font-normal">
                {{ tag }}
              </Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button as-child class="w-full rounded-lg" variant="ghost">
              <RouterLink :to="tpl.path" class="flex items-center justify-center">
                <I18nText pt="Ver Demonstração" en="View Demo" es="Ver Demostración" />
                <ChevronRight class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>

    <!-- Footer de Call to Action -->
    <section class="container mx-auto px-4 py-32 text-center">
      <div class="p-12 md:p-24 rounded-[3rem] bg-foreground text-background relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
        <h2 class="text-4xl md:text-6xl font-black mb-8">
          <I18nText pt="Pronto para construir?" en="Ready to build?" es="¿Listo para construir?" />
        </h2>
        <p class="text-xl text-background/60 max-w-xl mx-auto mb-10">
          <I18nText 
            pt="Comece com a base sólida que seu projeto merece." 
            en="Start with the solid foundation your project deserves." 
            es="Corta por lo sano con la base sólida que tu proyecto merece." 
          />
        </p>
        <Button size="lg" variant="secondary" class="rounded-full px-12 h-16 text-xl font-bold">
          Get Started
        </Button>
      </div>
    </section>
  </div>
</template>
