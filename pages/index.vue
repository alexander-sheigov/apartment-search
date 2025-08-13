<template>
  <div class="catalog">
    <h1 class="catalog__title">Квартиры</h1>
    <ApartmentFilters class="catalog__filters" />
    <ApartmentList class="catalog__list" />
    <ApartmentPagination class="catalog__pagination" />
  </div>
</template>

<script setup lang="ts">
import ApartmentFilters from '~/components/Apartment/Filters.vue'
import ApartmentList from '~/components/Apartment/List.vue'
import ApartmentPagination from '~/components/Apartment/Pagination.vue'
</script>

<style scoped lang="scss">
.catalog {
  display: grid;
  gap: 24px;

  &__title { font-size: 28px; font-weight: 700; color: $color-text; }
}
</style>