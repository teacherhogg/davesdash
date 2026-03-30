<template>
  <Layout>
    <template #doc-before>
      <PageHeader />
    </template>

    <template #home-hero-actions-after>
      <HeroButtons :buttons="heroButtons" />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import HeroButtons from './HeroButtons.vue'
import PageHeader from './PageHeader.vue'
import heroButtons from '../data/hero-buttons.json'

const { Layout } = DefaultTheme

</script>