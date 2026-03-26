<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  en?: string
  pt?: string
  es?: string
}>()

const { locale } = useI18n()

const content = computed(() => {
  const currentLocale = locale.value
  if (currentLocale === 'en' && props.en) return props.en
  if (currentLocale === 'es' && props.es) return props.es
  return props.pt || props.en || ''
})
</script>

<template>
  <span>{{ content }}</span>
</template>
