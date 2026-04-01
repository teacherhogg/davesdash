<template>
  <div class="card-grid">
    <a
      v-for="card in resolvedCards"
      :key="card.id || card.ref || card.title"
      :href="card.link"
      :target="card.target === 'same-tab' ? '_self' : '_blank'"
      rel="noopener noreferrer"
      class="card"
    >
      <div class="mode-badge">
        <img :src="getModeImage(card.mode)" :alt="`${getMode(card.mode)} mode`" class="mode-image" />
      </div>
      <div class="card-banner">
        <div class="banner-media">
          <img v-if="card.image" :src="card.image" :alt="card.title" class="card-image" />
          <span v-else class="card-icon">{{ card.icon }}</span>
        </div>
        <div class="banner-title">{{ card.title }}</div>
      </div>
      <div class="card-body">
        <p v-if="card.desc" class="card-desc">{{ card.desc }}</p>
        <div v-if="card.computer || card.port" class="card-meta">
          <button
            v-if="card.computer"
            type="button"
            class="computer-btn"
            @click.stop.prevent="openSpecs(card.computer)"
          >
            <VPBadge type="tip">{{ card.computer }}</VPBadge>
          </button>
          <VPBadge v-if="card.port" type="info">port {{ card.port }}</VPBadge>
        </div>
      </div>
    </a>

    <ComputerSpecsModal :is-open="isSpecsOpen" :spec="selectedSpec" @close="closeSpecs" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import VPBadge from 'vitepress/dist/client/theme-default/components/VPBadge.vue'
import ComputerSpecsModal from './ComputerSpecsModal.vue'
import computerSpecs from '../../../data/computer-specs.json'

const VALID_MODES = ['house', 'cabin', 'tailscale', 'computer', 'web']

const allCardModules = import.meta.glob('../../../data/*.json', {
  eager: true,
  import: 'default'
})

const cardRegistry = buildCardRegistry(allCardModules)

function getMode(mode) {
  return VALID_MODES.includes(mode) ? mode : 'web'
}

function getModeImage(mode) {
  return `/images/modes/${getMode(mode)}.svg`
}

const props = defineProps({
  cards: {
    type: Array,
    required: true
  }
})

const resolvedCards = computed(() => {
  return props.cards.map((card) => resolveCard(card))
})

const isSpecsOpen = ref(false)
const selectedComputer = ref('')

const specsByComputer = computed(() => {
  return computerSpecs.reduce((acc, spec) => {
    acc[spec.computer] = spec
    return acc
  }, {})
})

const selectedSpec = computed(() => {
  return specsByComputer.value[selectedComputer.value] ?? null
})

function openSpecs(computer) {
  selectedComputer.value = computer
  isSpecsOpen.value = true
}

function closeSpecs() {
  isSpecsOpen.value = false
}

function buildCardRegistry(modules) {
  const registry = {}

  Object.values(modules).forEach((cards) => {
    if (!Array.isArray(cards)) return

    cards.forEach((card) => {
      if (card && typeof card === 'object' && typeof card.id === 'string') {
        registry[card.id] = card
      }
    })
  })

  return registry
}

function resolveCard(card, seenRefs = new Set()) {
  if (!card || typeof card !== 'object' || !card.ref) {
    return card
  }

  const refId = card.ref
  if (seenRefs.has(refId)) {
    console.warn(`[CardGridEx] Circular ref detected for "${refId}"`)
    return card
  }

  const sourceCard = cardRegistry[refId]
  if (!sourceCard) {
    console.warn(`[CardGridEx] Missing ref target for "${refId}"`)
    return card
  }

  const resolvedSource = resolveCard(sourceCard, new Set([...seenRefs, refId]))

  // Local values on the ref card override the source card fields.
  return {
    ...resolvedSource,
    ...card
  }
}
</script>

<style scoped>
.card-image {
  width: 70%;
  max-width: 56px;
  height: auto;
  max-height: 40px;
  object-fit: contain;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.2rem;
  padding: 1rem 0;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: visible;
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
  display: grid;
  grid-template-columns: 25% 75%;
  min-height: 55px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.mode-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 2;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.mode-image {
  display: block;
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.banner-media {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: var(--vp-c-brand-soft);
}

.banner-title {
  display: flex;
  align-items: center;
  padding: 0.75rem 0.9rem;
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.25;
  background: var(--vp-c-bg-alt);
}

.card-icon {
  font-size: 2rem;
}

.card-body {
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-desc {
  margin: 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.card-meta {
  margin-top: auto;
  padding-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.card-meta :deep(.VPBadge) {
  margin-left: 0;
  transform: none;
}

.computer-btn {
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
}
</style>