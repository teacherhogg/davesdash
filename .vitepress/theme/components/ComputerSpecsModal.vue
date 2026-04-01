<template>
  <div v-if="isOpen" class="modal-overlay" role="dialog" aria-modal="true" @click.self="emit('close')">
    <section class="modal-card">
      <header class="modal-header">
        <div>
          <p class="modal-kicker">Computer Details</p>
          <h2 class="modal-title">{{ formatComputerName(activeSpec.computer) }}</h2>
        </div>
        <button class="close-btn" type="button" aria-label="Close" @click="emit('close')">×</button>
      </header>

      <p v-if="!spec" class="missing-spec">No specification record was found for this computer.</p>

      <div v-else class="spec-grid">
        <article v-for="item in specItems" :key="item.label" class="spec-item">
          <p class="spec-label">{{ item.label }}</p>
          <p class="spec-value">{{ item.value }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  spec: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const activeSpec = computed(() => {
  return props.spec ?? { computer: 'unknown' }
})

const specItems = computed(() => {
  if (!activeSpec.value) return []

  return [
    { label: 'Date', value: activeSpec.value.date },
    { label: 'Model', value: activeSpec.value.model },
    { label: 'RAM', value: activeSpec.value.ram },
    { label: 'SSD', value: activeSpec.value.ssd },
    { label: 'HDD', value: activeSpec.value.hdd },
    { label: 'CPU', value: activeSpec.value.cpu },
    { label: 'CPU Speed', value: activeSpec.value.cpuSpeed },
    { label: 'Cores', value: activeSpec.value.cores },
    { label: 'USB', value: activeSpec.value.usb || 'Not set' },
    { label: 'Type', value: activeSpec.value.type },
    { label: 'Description', value: activeSpec.value.description },
    { label: 'LAN IP', value: activeSpec.value.lanIp },
    { label: 'Tailscale IP', value: activeSpec.value.tailscaleIp }
  ]
})

function formatComputerName(name) {
  if (!name) return 'Unknown Computer'

  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(8, 10, 20, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal-card {
  width: min(880px, 100%);
  max-height: 85vh;
  overflow: auto;
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.22);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  align-items: flex-start;
  padding: 1rem 1.2rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.modal-kicker {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-3);
  font-size: 0.72rem;
}

.modal-title {
  margin: 0.25rem 0 0;
  color: var(--vp-c-text-1);
  font-size: 1.2rem;
}

.close-btn {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  width: 34px;
  height: 34px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;
}

.spec-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  padding: 1rem 1.2rem 1.2rem;
}

.missing-spec {
  margin: 0;
  padding: 1.25rem;
  color: var(--vp-c-text-2);
}

.spec-item {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
  background: var(--vp-c-bg-soft);
}

.spec-label {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.spec-value {
  margin: 0.3rem 0 0;
  color: var(--vp-c-text-1);
  font-size: 0.92rem;
  line-height: 1.3;
  word-break: break-word;
}
</style>
