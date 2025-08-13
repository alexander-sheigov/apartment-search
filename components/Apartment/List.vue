<template>
  <section class="apartment-list">
    <div class="apartment-list__grid">
      <ApartmentCard v-for="i in 6" :key="i" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ApartmentCard from './Card.vue'
</script>

<style scoped lang="scss">
.apartment-list {
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @include media-min($breakpoint-md) { grid-template-columns: repeat(2, 1fr); gap: 20px; }
    @include media-min($breakpoint-lg) { grid-template-columns: repeat(3, 1fr); gap: 24px; }
  }
}
</style>