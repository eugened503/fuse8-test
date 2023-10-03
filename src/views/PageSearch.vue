<template>
  <div class="search">
    <AppInput></AppInput>
    <AppJokes></AppJokes>
  </div>
</template>

<script setup>
import AppInput from '@/components/AppInput.vue'
import AppJokes from '@/components/AppJokes.vue'
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  margin: 128px 0 306px;
  padding: 0 20px;
}
</style>
