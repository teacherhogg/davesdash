<template>
  <div class="hero-buttons">
    <a
      v-for="btn in buttons"
      :key="btn.text"
      :href="btn.link"
      :target="btn.external ? '_blank' : '_self'"
      class="hero-btn"
      :style="{
        backgroundColor: btn.color,
        borderColor: btn.borderColor || btn.color,
        color: btn.textColor || '#ffffff'
      }"
    >
      <div class="btn-main">
        <img v-if="btn.image" :src="btn.image" :alt="btn.text" class="btn-image" />
        <span v-if="btn.icon" class="btn-icon">{{ btn.icon }}</span>
        <div class="btn-copy">
          <span class="btn-text">{{ btn.text }}</span>
          <span v-if="btn.desc" class="btn-desc">{{ btn.desc }}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
defineProps({
  buttons: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: left;
  margin-top: 1.5rem;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1.4rem;
  border-radius: 24px;
  border: 2px solid transparent;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: filter 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-main {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.15rem;
}

.hero-btn:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.btn-image {
  width: 22px;
  height: 34px;
  object-fit: contain;
  border-radius: 4px;
  flex: 0 0 auto;
}

.btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  font-size: 1.35rem;
  line-height: 1;
  flex: 0 0 auto;
}

.btn-text {
  white-space: nowrap;
  line-height: 1.1;
}

.btn-desc {
  font-size: 0.85rem;
  color: currentColor;
  opacity: 0.8;
  line-height: 1.1;
  text-align: left;
}
</style>