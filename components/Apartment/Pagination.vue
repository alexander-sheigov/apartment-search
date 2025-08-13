<template>
  <nav class="pagination" aria-label="Навигация по страницам">
    <button class="pagination__btn" aria-label="Предыдущая">‹</button>
    <button class="pagination__btn pagination__btn--active">1</button>
    <button class="pagination__btn">2</button>
    <button class="pagination__btn">3</button>
    <button class="pagination__btn" aria-label="Следующая">›</button>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;

  &__btn {
    min-width: 36px;
    height: 36px;
    padding: 0 10px;
    border: 1px solid $color-gray-200;
    border-radius: 8px;
    color: $color-text;
    background: $color-white;
    &--active { background: $color-accent; color: $color-white; border-color: $color-accent; }
  }
}
</style>