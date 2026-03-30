<template>
  <div class="card-grid">
    <a
      v-for="card in cards"
      :key="card.title"
      :href="card.link"
      target="_blank"
      rel="noopener noreferrer"
      class="card"
    >
      <div class="card-banner">
        <img v-if="card.image" :src="card.image" :alt="card.title" class="card-image" />
        <span v-else class="card-icon">{{ card.icon }}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ card.title }}</h3>
        <p class="card-desc">{{ card.desc }}</p>
      </div>
    </a>
  </div>
</template>

<script setup>
defineProps({
  cards: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.card-image {
  width: 20%;
  height: 100%;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.2rem;
  padding: 1rem 0;
}

.card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  background: var(--vp-c-bg-soft);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-color: var(--vp-c-brand-1);
}

.card-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background: var(--vp-c-brand-soft);
  font-size: 2.5rem;
}

.card-body {
  padding: 1rem;
  flex: 1;
}

.card-title {
  margin: 0 0 0.4rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.card-desc {
  margin: 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
</style>