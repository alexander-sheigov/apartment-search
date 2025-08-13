<template>
  <section class="filters">
    <div class="filters__group">
      <h2 class="filters__label">Комнаты</h2>
      <div class="filters__chips">
        <button class="filters__chip filters__chip--active">Студия</button>
        <button class="filters__chip">1</button>
        <button class="filters__chip">2</button>
        <button class="filters__chip">3</button>
        <button class="filters__chip">4+</button>
      </div>
    </div>

    <div class="filters__group">
      <h2 class="filters__label">Цена, ₽</h2>
      <div class="filters__range">
        <input class="filters__input" type="text" placeholder="от" />
        <span class="filters__dash">—</span>
        <input class="filters__input" type="text" placeholder="до" />
      </div>
    </div>

    <div class="filters__group">
      <h2 class="filters__label">Площадь, м²</h2>
      <div class="filters__range">
        <input class="filters__input" type="text" placeholder="от" />
        <span class="filters__dash">—</span>
        <input class="filters__input" type="text" placeholder="до" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.filters {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @include media-min($breakpoint-md) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  &__group { background: $color-white; }

  &__label {
    font-weight: 500;
    color: $color-text;
    margin-bottom: 8px;
    font-size: 14px;
  }

  &__chips { display: flex; gap: 8px; flex-wrap: wrap; }

  &__chip {
    padding: 10px 12px;
    border: 1px solid $color-gray-200;
    border-radius: 10px;
    color: $color-text;
    background: $color-white;
    font-size: 14px;
    &--active { background: $color-accent; color: $color-white; border-color: $color-accent; }
  }

  &__range { display: flex; align-items: center; gap: 8px; }
  &__dash { color: $color-gray-200; }

  &__input {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid $color-gray-200;
    border-radius: 10px;
    font-size: 14px;
    color: $color-text;
    &::placeholder { color: #9aa0a6; }
  }
}
</style>