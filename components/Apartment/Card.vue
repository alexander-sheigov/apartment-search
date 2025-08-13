<template>
  <article class="apartment-card">
    <div class="apartment-card__media">
      <div class="apartment-card__thumb">Фото</div>
    </div>
    <div class="apartment-card__body">
      <h3 class="apartment-card__title">2‑комн. квартира, 56 м²</h3>
      <div class="apartment-card__meta">
        <div class="apartment-card__price">12 500 000 ₽</div>
        <div class="apartment-card__address">г. Москва, ул. Пушкина, д. Колотушкина</div>
      </div>
      <ul class="apartment-card__params">
        <li class="apartment-card__param">Этаж: 7/16</li>
        <li class="apartment-card__param">Тип дома: Монолит</li>
        <li class="apartment-card__param">С отделкой</li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.apartment-card {
  display: flex;
  flex-direction: column;
  border: 1px solid $color-gray-200;
  border-radius: 12px;
  overflow: hidden;
  background: $color-white;

  &__media { width: 100%; aspect-ratio: 16 / 10; background: #f2f3f5; }
  &__thumb { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #9aa0a6; }

  &__body { padding: 12px; display: grid; gap: 8px; }

  &__title { font-size: 16px; line-height: 1.3; color: $color-text; font-weight: 500; }

  &__meta { display: grid; gap: 4px; }
  &__price { color: $color-accent; font-weight: 700; font-size: 18px; }
  &__address { color: #6b7280; font-size: 13px; }

  &__params { display: flex; flex-wrap: wrap; gap: 8px; }
  &__param { font-size: 12px; color: $color-text; background: #f6f7f9; padding: 6px 8px; border-radius: 8px; }
}
</style>