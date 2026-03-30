---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Dave's Dash
  tagline: An Above Average Home
  image: "/images/item-icons/AboveAverageHome.png"
---

<script setup>
import cards from './data/tp-favs.json'
</script>

<CardGridEx :cards="cards" />