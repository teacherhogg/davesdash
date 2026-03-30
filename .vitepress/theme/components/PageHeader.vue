<template>
  <header v-if="pageTitle" class="page-header">
    <img v-if="pageImage" :src="pageImage" :alt="pageTitle" class="page-header-image" />
    <h1 class="page-header-title">{{ pageTitle }}</h1>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const pageTitle = computed(() => frontmatter.value.title || '')
const pageImage = computed(() => frontmatter.value.image || '')
</script>

<style scoped>
.page-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin: 0 0 1.5rem;
}

.page-header-image {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex: 0 0 auto;
}

.page-header-title {
  margin: 0;
  font-size: clamp(1.9rem, 1.5rem + 1vw, 2.4rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
}
</style>