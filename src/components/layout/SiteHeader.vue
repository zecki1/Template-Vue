<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Terminal, Menu, Settings } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const { t } = useI18n()

const navItems = [
  { href: '/', label: 'common.home' },
  { href: '/apple', label: 'Apple Style' },
  { href: '/streaming', label: 'Streaming' },
  { href: '/scene-scroll', label: 'Scene Scroll' },
]

const isOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <!-- Logo Area -->
      <div class="flex items-center gap-2">
        <RouterLink to="/" class="flex items-center gap-2">
          <div class="p-2 bg-primary rounded-lg shadow-sm">
            <Terminal class="h-5 w-5 text-primary-foreground" />
          </div>
          <span class="font-bold text-lg hidden sm:inline-block">
            Super<span class="text-primary">Template</span>
          </span>
        </RouterLink>
      </div>

      <!-- Main Navigation (Desktop) -->
      <nav class="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
        <RouterLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="hover:text-primary transition-colors whitespace-nowrap"
        >
          {{ t(item.label) }}
        </RouterLink>
      </nav>

      <!-- Actions & Mobile Menu -->
      <div class="flex items-center gap-2">
        <div class="hidden sm:flex items-center gap-2">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon">
            <Settings class="h-5 w-5" />
          </Button>
        </div>
        
        <Separator orientation="vertical" class="h-6 mx-2 hidden sm:block" />
        
        <Avatar class="h-8 w-8 cursor-pointer border hover:border-primary transition-colors">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <!-- Mobile Menu Trigger -->
        <div class="lg:hidden">
          <Sheet v-model:open="isOpen">
            <SheetTrigger as-child>
              <Button variant="ghost" size="icon" class="h-9 w-9">
                <Menu class="h-5 w-5" />
                <span class="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" class="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle class="flex items-center gap-2">
                  <Terminal class="h-5 w-5 text-primary" />
                  <span>Navegação</span>
                </SheetTitle>
              </SheetHeader>
              <div class="flex flex-col gap-4 mt-8">
                <RouterLink
                  v-for="item in navItems"
                  :key="item.href"
                  :to="item.href"
                  class="text-lg font-medium hover:text-primary transition-colors"
                  @click="isOpen = false"
                >
                  {{ t(item.label) }}
                </RouterLink>
                <Separator class="my-2" />
                <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between px-2">
                    <span class="text-sm font-medium">Idioma</span>
                    <LanguageSwitcher />
                  </div>
                  <div class="flex items-center justify-between px-2">
                    <span class="text-sm font-medium">Configurações</span>
                    <Button variant="ghost" size="icon">
                      <Settings class="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  </header>
</template>
