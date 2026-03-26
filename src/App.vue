<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SmoothScrolling from '@/components/providers/SmoothScrolling.vue'
import VlibrasWidget from '@/components/accessibility/VlibrasWidget.vue'
import { usePreferencesStore } from '@/stores/preferences'
import AOS from 'aos'

const preferences = usePreferencesStore()

onMounted(() => {
  preferences.init()
  AOS.init({
    duration: 800,
    once: true,
  })
})
</script>

<template>
  <SmoothScrolling>
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

      <VlibrasWidget />
    </div>
  </SmoothScrolling>
</template>

<style>
/* Reset de margens e box-sizing garantido */
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
