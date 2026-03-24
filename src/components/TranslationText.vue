<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{
  en?: string
  pt?: string
  es?: string
}>()

const { locale } = useI18n()
</script>

<template>
  <span>
    {{ locale === 'pt-br' ? pt : locale === 'es' ? es : en }}
  </span>
</template>
