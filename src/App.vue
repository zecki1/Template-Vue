<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import { useDark } from '@vueuse/core'
import AOS from 'aos'

useDark()

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  })
})
</script>

<template>
  <div class="min-h-screen bg-background font-sans antialiased flex flex-col overflow-x-hidden">
    <SiteHeader />
    
    <main class="flex-1 w-full max-w-[100vw]">
      <RouterView />
    </main>
    
    <footer class="border-t py-6 md:px-8 md:py-0">
      <div class="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p class="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by <a href="#" target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4">Ezequiel</a>.
          The source code is available on <a href="#" target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4">GitHub</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
</style>
