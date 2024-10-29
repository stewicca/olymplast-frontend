<template>
  <div class="layout mb-24 mt-8 w-full">
    <!-- Title -->
    <h2 class="mb-8 text-center text-2xl font-bold lg:mb-12 lg:text-3xl">
      Testimoni Pelanggan
    </h2>
    <!-- End of Title -->

    <!-- Endorsements -->
    <div class="flex flex-wrap justify-center gap-8">
      <!-- Endorsement -->
      <div
        v-for="data in data.data.value.data.endorsements"
        :key="data.id"
        class="rounded-lg border-2 shadow-lg"
      >
        <!-- Endorsement Image -->
        <NuxtImg
          :src="
            'https://example.com' + data.image_content
          "
          :alt="data.name"
          class="h-64 w-auto rounded-t-lg"
          loading="lazy"
        />
        <!-- Endorsement Image -->

        <!-- Endorsement Detail -->
        <div class="px-4 py-2">
          <h3 class="text-lg font-bold">{{ data.name }}</h3>
          <p class="text-sm">{{ data.ig }}</p>
        </div>
        <!-- End of Endorsement Detail -->
      </div>
      <!-- End of Endorsment -->
    </div>
    <!-- End of Endorsements -->
  </div>
</template>

<script lang="js" setup>
// Fetching endorsement data
const data = await useFetch(
  "https://example.com",
);
</script>
