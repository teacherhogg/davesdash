<template>
  <div class="table-wrap">
    <table class="spec-table">
      <thead>
        <tr>
          <th>Computer</th>
          <th>LAN IP</th>
          <th>Tailscale IP</th>
          <th>Model</th>
          <th>Type</th>
          <th>RAM</th>
          <th>SSD</th>
          <th>HDD</th>
          <th>CPU</th>
          <th>CPU Speed</th>
          <th>Cores</th>
          <th>USB</th>
          <th>Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="spec in normalizedSpecs" :key="spec.computer">
          <td class="computer-name">{{ formatComputerName(spec.computer) }}</td>
          <td>{{ spec.lanIp }}</td>
          <td>{{ spec.tailscaleIp }}</td>
          <td>{{ spec.model }}</td>
          <td>{{ spec.type }}</td>
          <td>{{ spec.ram }}</td>
          <td>{{ spec.ssd }}</td>
          <td>{{ spec.hdd }}</td>
          <td>{{ spec.cpu }}</td>
          <td>{{ spec.cpuSpeed }}</td>
          <td>{{ spec.cores }}</td>
          <td>{{ spec.usb || '-' }}</td>
          <td>{{ spec.date }}</td>
          <td>{{ spec.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import computerSpecs from '../../../data/computer-specs.json'

const normalizedSpecs = computed(() => {
    return computerSpecs;
//  return [...computerSpecs].sort((a, b) => a.computer.localeCompare(b.computer))
})

function formatComputerName(name) {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}
</script>

<style scoped>
.table-wrap {
  margin-top: 1.2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow-x: auto;
  overflow-y: hidden;
}

.spec-table {
  display: table;
  width: 100%;
  border-collapse: collapse;
  min-width: 960px;
  overflow: visible;
}

.spec-table th,
.spec-table td {
  padding: 0.65rem 0.7rem;
  border-bottom: 1px solid var(--vp-c-divider);
  text-align: left;
  font-size: 0.85rem;
  vertical-align: top;
}

.spec-table th {
  position: sticky;
  top: 0;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  font-weight: 600;
  white-space: nowrap;
}

.spec-table tbody tr:nth-child(odd) {
  background: var(--vp-c-bg-soft);
}

.computer-name {
  font-weight: 600;
  white-space: nowrap;
}
</style>
