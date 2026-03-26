<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
  script.async = true
  script.onload = () => {
    // @ts-expect-error - VLibras is a global object from the script
    new window.VLibras.Widget('https://vlibras.gov.br/app')
  }
  document.body.appendChild(script)
})
</script>

<template>
  <div vw class="enabled">
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
</template>

<style scoped>
/* Estilização básica caso necessário ajustar o posicionamento */
[vw] {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;
}
</style>
