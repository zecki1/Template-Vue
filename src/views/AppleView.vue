<script setup lang="ts">
import { 
  Play, ArrowRight, ArrowUpRight, Instagram, 
  Twitter, Youtube, TrendingUp, Clock 
} from 'lucide-vue-next'
import I18nText from '@/components/TranslationText.vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const stories = [
  { id: 1, user: 'user_creator', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&fit=crop', text: 'Review rápido do novo setup! 🔥 #tech #setup' },
  { id: 2, user: 'tech_guru', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=800&fit=crop', text: 'Novidades a caminho! 🚀' },
  { id: 3, user: 'design_it', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&fit=crop', text: 'Minimalismo é chave. ✨' },
  { id: 4, user: 'web_dev', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=800&fit=crop', text: 'Codando até tarde. 💻' },
  { id: 5, user: 'future_tech', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&fit=crop', text: 'O futuro é agora.' },
]
</script>

<template>
  <div class="flex flex-col w-full bg-background gap-4 pb-10">
    <!-- SEÇÃO 1: HERO CINEMÁTICO -->
    <section class="relative w-full h-[85vh] overflow-hidden flex items-center justify-center bg-black text-white">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop" 
          alt="Hero Background" 
          class="object-cover w-full h-full opacity-60 hover:scale-105 transition-transform duration-[2s]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div class="relative z-10 text-center space-y-6 max-w-4xl px-4 mt-20" data-aos="fade-up">
        <Badge variant="outline" class="text-white border-white/30 backdrop-blur-md px-4 py-1.5 uppercase tracking-widest text-xs">
          <I18nText pt="Nova Coleção 2026" en="New Collection 2026" es="Nueva Colección 2026" />
        </Badge>
        
        <h1 class="text-5xl md:text-8xl font-bold tracking-tighter leading-tight">
          <I18nText pt="Capture o Inimaginável" en="Capture the Unimaginable" es="Captura lo Inimaginable" />
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
          <I18nText 
            pt="A fusão perfeita entre design minimalista e potência bruta." 
            en="The perfect fusion of minimalist design and raw power."
            es="La fusión perfecta entre diseño minimalista y potencia bruta."
          />
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" class="rounded-full px-8 h-14 text-lg bg-white text-black hover:bg-gray-200 border-none">
            <I18nText pt="Comprar Agora" en="Shop Now" es="Comprar Ahora" />
          </Button>
          <Button size="lg" variant="outline" class="rounded-full px-8 h-14 text-lg bg-transparent text-white border-white hover:bg-white/10">
            <I18nText pt="Assistir o Filme" en="Watch the Film" es="Ver la Película" /> <Play class="ml-2 h-4 w-4 fill-current" />
          </Button>
        </div>
      </div>
    </section>

    <!-- SEÇÃO 2: GRADE BENTO -->
    <section class="container mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold mb-8 tracking-tight" data-aos="fade-right">
        <I18nText pt="Destaques do Mês" en="Monthly Highlights" es="Destacados del Mes" />
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
        <!-- Item Grande -->
        <div class="group relative col-span-1 md:col-span-2 rounded-3xl overflow-hidden bg-muted cursor-pointer" data-aos="fade-up">
          <img 
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2000" 
            alt="Vision Pro Max"
            class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors p-8 flex flex-col justify-end text-white">
            <h3 class="text-3xl font-bold mb-2">Vision Pro Max</h3>
            <p class="text-gray-200">
              <I18nText pt="Realidade Aumentada. Redefinida." en="Augmented Reality. Redefined." es="Realidad Aumentada. Redefinida." />
            </p>
            <Button variant="link" class="text-white w-fit p-0 mt-4 hover:no-underline group-hover:translate-x-2 transition-transform">
              <I18nText pt="Saiba mais" en="Learn more" es="Saber más" /> <ArrowRight class="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <!-- Item Pequeno -->
        <div class="group relative rounded-3xl overflow-hidden bg-white border cursor-pointer" data-aos="fade-up" data-aos-delay="100">
           <div class="absolute top-8 left-0 right-0 text-center z-10">
              <h3 class="text-2xl font-bold text-black">Titanium Watch</h3>
              <p class="text-muted-foreground">
                <I18nText pt="Ultra resistente." en="Ultra resistant." es="Ultra resistente." />
              </p>
           </div>
           <img 
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000" 
            alt="Titanium Watch"
            class="object-contain w-full h-full pt-12 transition-transform duration-500 group-hover:scale-110"
          />
        </div>

         <!-- Item Pequeno - Escuro -->
         <div class="group relative rounded-3xl overflow-hidden bg-[#1a1a1a] text-white cursor-pointer" data-aos="fade-up" data-aos-delay="200">
          <div class="p-8 h-full flex flex-col justify-between">
            <div>
              <Badge class="bg-orange-500 hover:bg-orange-600 border-none text-white mb-4">
                <I18nText pt="PROMOÇÃO" en="SALE" es="OFERTA" />
              </Badge>
              <h3 class="text-2xl font-bold">Audio Series</h3>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000" 
              alt="Audio Series"
              class="w-48 mx-auto drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-6"
            />
            <div class="flex justify-between items-end">
              <span class="text-2xl font-bold">$199</span>
              <Button size="icon" class="rounded-full bg-white text-black hover:bg-gray-200">
                <ArrowUpRight class="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <!-- Item Grande - Invertido -->
        <div class="group relative col-span-1 md:col-span-2 rounded-3xl overflow-hidden bg-gray-100 dark:bg-zinc-900 cursor-pointer" data-aos="fade-up" data-aos-delay="300">
           <div class="absolute inset-0 flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
              <div class="flex-1 space-y-4 z-10">
                 <h3 class="text-3xl md:text-4xl font-bold text-foreground">Workspace Studio</h3>
                 <p class="text-muted-foreground text-lg">
                   <I18nText 
                      pt="Transforme seu escritório com nossa linha de periféricos minimalistas." 
                      en="Transform your office with our minimalist peripherals line."
                      es="Transforma tu oficina con nuestra línea de periféricos minimalistas."
                   />
                 </p>
                 <Button class="rounded-full">
                   <I18nText pt="Ver Coleção" en="View Collection" es="Ver Colección" />
                 </Button>
              </div>
              <div class="flex-1 w-full h-full relative">
                  <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000" 
                    alt="Workspace Studio"
                    class="object-cover w-full h-full rounded-2xl shadow-xl transition-transform duration-700 group-hover:scale-[1.02]"
                  />
              </div>
           </div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO 3: REELS / STORIES -->
    <section class="py-16 bg-muted/20">
      <div class="container mx-auto px-4">
        <div class="flex items-center gap-2 mb-8" data-aos="fade-left">
          <div class="p-2 bg-pink-500 rounded-full text-white"><Instagram :size="20" /></div>
          <h2 class="text-2xl font-bold">
            <I18nText pt="Histórias & Reels" en="Stories & Reels" es="Historias & Reels" />
          </h2>
        </div>

        <Carousel
          :opts="{ align: 'start', loop: true }"
          class="w-full"
        >
          <CarouselContent class="-ml-4">
            <CarouselItem v-for="(story, index) in stories" :key="index" class="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/5">
              <div class="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer" data-aos="zoom-in" :data-aos-delay="index * 100">
                <img 
                  :src="story.img" 
                  alt="Reel content"
                  class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 text-white">
                  <div class="flex items-center gap-2 mb-2">
                    <Avatar class="h-6 w-6 border border-white">
                      <AvatarImage :src="`https://i.pravatar.cc/150?u=${index}`" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <span class="text-xs font-medium">{{ story.user }}</span>
                  </div>
                  <p class="text-sm line-clamp-2">
                    <I18nText :pt="story.text" :en="story.text" :es="story.text" />
                  </p>
                </div>
                <!-- Play Icon Overlay -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                   <Play class="fill-white text-white h-12 w-12" />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious class="left-2" />
          <CarouselNext class="right-2" />
        </Carousel>
      </div>
    </section>

    <!-- SEÇÃO 4: BLOG EDITORIAL -->
    <section class="container mx-auto px-4 py-20">
       <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 class="text-4xl font-bold mb-4">The Journal</h2>
          <p class="text-muted-foreground text-lg">
             <I18nText 
               pt="Histórias sobre design, tecnologia e o futuro." 
               en="Stories about design, technology and the future."
               es="Historias sobre diseño, tecnología y el futuro."
             />
          </p>
       </div>

       <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          <!-- Artigo 1 -->
          <article class="group cursor-pointer" data-aos="fade-up">
             <div class="overflow-hidden rounded-2xl mb-4 aspect-video bg-muted relative">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000" 
                  alt="Article image"
                  class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
             </div>
             <div class="space-y-2">
                <div class="flex items-center gap-2 text-xs font-bold text-primary tracking-wider uppercase">
                   <TrendingUp class="h-3 w-3" /> Tech Trends
                </div>
                <h3 class="text-2xl font-bold group-hover:text-primary transition-colors">
                   <I18nText pt="O futuro do trabalho remoto" en="The future of remote work" es="El futuro del trabajo remoto" />
                </h3>
                <p class="text-muted-foreground line-clamp-2">
                  <I18nText 
                    pt="Como as novas tecnologias de VR estão mudando a forma como interagimos em escritórios virtuais." 
                    en="How new VR technologies are changing the way we interact in virtual offices."
                    es="Cómo las nuevas tecnologías de VR están cambiando la forma en que interactuamos en oficinas virtuales."
                  />
                </p>
                <div class="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                   <Clock class="h-3 w-3" /> <I18nText pt="5 min de leitura" en="5 min read" es="5 min de lectura" />
                </div>
             </div>
          </article>

          <!-- Artigo 2 -->
          <article class="group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
             <div class="overflow-hidden rounded-2xl mb-4 aspect-video bg-muted relative">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000" 
                  alt="Article image"
                  class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
             </div>
             <div class="space-y-2">
                <div class="flex items-center gap-2 text-xs font-bold text-primary tracking-wider uppercase">
                   <Badge variant="secondary" class="rounded-sm px-1">
                      <I18nText pt="Análise" en="Review" es="Reseña" />
                   </Badge>
                </div>
                <h3 class="text-2xl font-bold group-hover:text-primary transition-colors">
                   <I18nText pt="Cibersegurança em 2026" en="Cybersecurity in 2026" es="Ciberseguridad en 2026" />
                </h3>
                <p class="text-muted-foreground line-clamp-2">
                  <I18nText 
                    pt="Protegendo seus dados em um mundo pós-quântico. O que você precisa saber agora." 
                    en="Protecting your data in a post-quantum world. What you need to know now."
                    es="Protegiendo sus datos en un mundo poscuántico. Lo que necesita saber ahora."
                  />
                </p>
                 <div class="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                   <Clock class="h-3 w-3" /> <I18nText pt="8 min de leitura" en="8 min read" es="8 min de leitura" />
                </div>
             </div>
          </article>
       </div>
    </section>

    <!-- SEÇÃO 5: REDES SOCIAIS -->
    <section class="py-20 border-t bg-black text-white text-center">
       <div class="container mx-auto px-4 space-y-8" data-aos="zoom-in">
          <h2 class="text-3xl font-bold">
             <I18nText pt="Junte-se à Comunidade" en="Join the Community" es="Únete a la Comunidad" />
          </h2>
          <div class="flex justify-center gap-8">
             <a href="#" class="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors hover:scale-110 duration-300">
                <Instagram class="h-8 w-8" />
             </a>
             <a href="#" class="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors hover:scale-110 duration-300">
                <Twitter class="h-8 w-8" />
             </a>
             <a href="#" class="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors hover:scale-110 duration-300">
                <Youtube class="h-8 w-8" />
             </a>
          </div>
          <p class="text-white/50 text-sm">#SuperTemplate2026</p>
       </div>
    </section>
  </div>
</template>
