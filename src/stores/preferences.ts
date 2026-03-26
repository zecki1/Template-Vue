import { defineStore } from 'pinia'
import { watch, ref } from 'vue'
import { useDark } from '@vueuse/core'

export type Language = 'pt-br' | 'en' | 'es'
export type AccessibilityMode = 'none' | 'monochrome' | 'protanopia' | 'deuteranopia' | 'tritanopia'
export type FontFamily = 'default' | 'dyslexic'

export const usePreferencesStore = defineStore('preferences', () => {
  const isDark = useDark()
  
  // Estados persistentes
  const language = ref<Language>((localStorage.getItem('pref-lang') as Language) || 'pt-br')
  const accessibilityMode = ref<AccessibilityMode>((localStorage.getItem('pref-mode') as AccessibilityMode) || 'none')
  const fontSize = ref<number>(Number(localStorage.getItem('pref-size')) || 16)
  const fontFamily = ref<FontFamily>((localStorage.getItem('pref-font') as FontFamily) || 'default')

  // Aplicar efeitos colaterais no DOM
  const applyPreferences = () => {
    const root = document.documentElement
    const body = document.body

    // 1. Fonte Disléxica
    if (fontFamily.value === 'dyslexic') {
      body.classList.add('font-dyslexic')
    } else {
      body.classList.remove('font-dyslexic')
    }

    // 2. Tamanho da Fonte
    root.setAttribute('data-font-size', fontSize.value.toString())
    // Também aplicamos via style para garantir retrocompatibilidade ou precisão
    root.style.fontSize = `${fontSize.value}px`

    // 3. Filtros de Acessibilidade
    body.classList.remove('mode-monochrome', 'mode-protanopia', 'mode-deuteranopia', 'mode-tritanopia')
    if (accessibilityMode.value !== 'none') {
      body.classList.add(`mode-${accessibilityMode.value}`)
    }
  }

  // Watchers para persistência e aplicação
  watch(language, (val) => localStorage.setItem('pref-lang', val))
  watch(accessibilityMode, (val) => {
    localStorage.setItem('pref-mode', val)
    applyPreferences()
  })
  watch(fontSize, (val) => {
    localStorage.setItem('pref-size', val.toString())
    applyPreferences()
  })
  watch(fontFamily, (val) => {
    localStorage.setItem('pref-font', val)
    applyPreferences()
  })

  // Inicialização
  const init = () => {
    applyPreferences()
  }

  return {
    language,
    accessibilityMode,
    fontSize,
    fontFamily,
    isDark,
    init
  }
})
