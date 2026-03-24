<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Languages } from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const { locale } = useI18n()

const setLanguage = (lang: string) => {
  locale.value = lang
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon">
        <Languages class="h-5 w-5" />
        <span class="sr-only">Toggle language</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="setLanguage('en')">
        English
      </DropdownMenuItem>
      <DropdownMenuItem @click="setLanguage('pt-br')">
        Português
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
