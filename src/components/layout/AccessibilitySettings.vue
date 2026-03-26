<script setup lang="ts">
import { usePreferencesStore, type AccessibilityMode } from '@/stores/preferences'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import {
  Accessibility,
  Type as TypeIcon,
  Eye,
  RotateCcw,
  Palette
} from 'lucide-vue-next'
import { Separator } from '@/components/ui/separator'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useI18n } from 'vue-i18n'

const store = usePreferencesStore()
const { t } = useI18n()

const resetSettings = () => {
  store.accessibilityMode = 'none'
  store.fontSize = 16
  store.fontFamily = 'default'
  store.isDark = false
}

const accessibilityOptions = [
  { id: 'none', label: 'Normal' },
  { id: 'monochrome', label: 'Monocromático' },
  { id: 'protanopia', label: 'Protanopia' },
  { id: 'deuteranopia', label: 'Deuteranopia' },
  { id: 'tritanopia', label: 'Tritanopia' }
] as const

const themes = ['light', 'dark'] as const
</script>

<template>
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" class="h-9 w-9">
        <Accessibility class="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </SheetTrigger>
    <SheetContent class="w-[350px] sm:w-[400px] overflow-y-auto px-4">
      <SheetHeader>
        <SheetTitle>{{ t('accessibility.title', 'Acessibilidade & Aparência') }}</SheetTitle>
        <SheetDescription>
          {{ t('accessibility.description', 'Personalize sua experiência.') }}
        </SheetDescription>
      </SheetHeader>

      <div class="py-6 space-y-8">
        <!-- SEÇÃO FONTE -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-primary font-semibold">
            <TypeIcon class="h-4 w-4" />
            <span>{{ t('accessibility.typography', 'Tipografia') }}</span>
          </div>
          <div class="space-y-4 rounded-lg border p-4">
            <div class="flex items-center justify-between">
              <Label for="dyslexic">OpenDyslexic</Label>
              <Switch
                id="dyslexic"
                :model-value="store.fontFamily === 'dyslexic'"
                @update:model-value="(val) => store.fontFamily = val ? 'dyslexic' : 'default'"
              />
            </div>
            <Separator />
            <div class="space-y-3">
              <div class="flex justify-between">
                <Label>{{ t('accessibility.fontSize', 'Tamanho') }}</Label>
                <span class="text-xs text-muted-foreground">{{ store.fontSize }}px</span>
              </div>
              <Slider
                :model-value="[store.fontSize]"
                @update:model-value="(val) => store.fontSize = (val && val[0]) ? val[0] : 16"
                :min="12" :max="24" :step="2"
              />
            </div>
          </div>
        </div>

        <!-- SEÇÃO CORES -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-primary font-semibold">
            <Palette class="h-4 w-4" />
            <span>{{ t('accessibility.appearance', 'Aparência') }}</span>
          </div>
          <div class="rounded-lg border p-4 space-y-4">
            <div class="grid grid-cols-2 gap-2">
              <Button
                v-for="theme in themes"
                :key="theme"
                :variant="store.isDark === (theme === 'dark') ? 'default' : 'outline'"
                size="sm"
                @click="store.isDark = (theme === 'dark')"
                class="capitalize"
              >
                {{ theme }}
              </Button>
            </div>
          </div>
          <div class="space-y-3 rounded-lg border p-4">
            <Label class="flex items-center gap-2 mb-2">
              <Eye class="h-4 w-4" />
              <span>{{ t('accessibility.colorBlindness', 'Daltônismo') }}</span>
            </Label>
            <RadioGroup
              :model-value="store.accessibilityMode"
              @update:model-value="(val) => store.accessibilityMode = (val as AccessibilityMode) || 'none'"
            >
              <div class="grid grid-cols-1 gap-2">
                <div v-for="option in accessibilityOptions" :key="option.id" class="flex items-center space-x-2">
                  <RadioGroupItem :value="option.id" :id="option.id" />
                  <Label :for="option.id" class="font-normal cursor-pointer w-full">{{ option.label }}</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>

        <Button variant="destructive" class="w-full" @click="resetSettings">
          <RotateCcw class="mr-2 h-4 w-4" />
          <span>{{ t('accessibility.reset', 'Resetar') }}</span>
        </Button>
      </div>
    </SheetContent>
  </Sheet>
</template>
