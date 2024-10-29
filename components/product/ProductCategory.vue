<template>
  <div class="hidden space-y-4 lg:block lg:w-[25%]">
    <!-- Title -->
    <h2 class="text-2xl font-bold text-gray-500">Kategori</h2>
    <!-- End of Title -->

    <!-- Product Categories -->
    <nav class="flex flex-col gap-3 text-gray-500">
      <!-- Product Category Link -->
      <NuxtLink
        to="/product"
        class="w-fit transition-all duration-100 hover:font-bold hover:text-blue-500"
        exact-active-class="text-black font-bold"
      >
        Semua Produk
      </NuxtLink>
      <NuxtLink
        v-for="data in props.categories.data.results"
        :key="data.id"
        :to="'/category/' + data.slug"
        class="w-fit transition-all duration-100 hover:font-bold hover:text-blue-500"
        exact-active-class="text-black font-bold"
      >
        {{ data.name }}
      </NuxtLink>
      <!-- End of Product Category Link -->
    </nav>
    <!-- End of Product Categories -->
  </div>
</template>

<script lang="js" setup>
// Initialization
const props = defineProps(["categories"]);
</script>
