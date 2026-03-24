<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, defineExpose } from 'vue'
import { cn } from "@/lib/utils"

interface Props {
  frameCount: number
  pathPrefix: string
  extension: string
  currentFrame: number
  className?: string
}

const props = defineProps<Props>()
const emit = defineEmits(['load-progress', 'loaded'])

const canvasRef = ref<HTMLCanvasElement | null>(null)
const imagesRef = ref<HTMLImageElement[]>([])
const isLoaded = ref(false)

// Preload images
onMounted(() => {
  let loadedCount = 0
  const imgs: HTMLImageElement[] = []

  for (let i = 0; i < props.frameCount; i++) {
    const img = new Image()
    const formattedIndex = i.toString().padStart(4, "0") 
    img.src = `${props.pathPrefix}${formattedIndex}${props.extension}`
    
    img.onload = () => {
      loadedCount++
      emit('load-progress', Math.round((loadedCount / props.frameCount) * 100))
      if (loadedCount === props.frameCount) {
        imagesRef.current = imgs
        isLoaded.value = true
        emit('loaded')
        draw()
      }
    }
    img.onerror = () => {
      // Handle error (e.g., skip or show placeholder)
      loadedCount++
      if (loadedCount === props.frameCount) {
        imagesRef.current = imgs
        isLoaded.value = true
        emit('loaded')
      }
    }
    imgs.push(img)
  }
})

const draw = () => {
  const canvas = canvasRef.value
  const ctx = canvas?.getContext("2d")
  if (!canvas || !ctx || imagesRef.value.length === 0) return

  const frameIndex = Math.min(Math.floor(props.currentFrame), imagesRef.value.length - 1)
  const img = imagesRef.value[frameIndex]
  
  if (!img) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  const hRatio = canvas.width / img.width
  const vRatio = canvas.height / img.height
  const ratio = Math.max(hRatio, vRatio)
  
  ctx.drawImage(img, 
    (canvas.width - img.width * ratio) / 2, 
    (canvas.height - img.height * ratio) / 2, 
    img.width * ratio, img.height * ratio
  )
}

// Draw whenever currentFrame or isLoaded changes
watch(() => props.currentFrame, draw)
watch(isLoaded, draw)

// Handle Resize
const handleResize = () => {
  if (canvasRef.value) {
    canvasRef.value.width = window.innerWidth
    canvasRef.value.height = window.innerHeight
    draw()
  }
}

onMounted(() => {
  window.addEventListener("resize", handleResize)
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
})

defineExpose({
  canvasRef
})
</script>

<template>
  <canvas 
    ref="canvasRef" 
    :class="cn(
      'w-full h-full pointer-events-none transition-opacity duration-1000', 
      className, 
      isLoaded ? 'opacity-100' : 'opacity-0'
    )" 
  />
</template>
