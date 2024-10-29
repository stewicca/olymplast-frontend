<template>
  <div class="layout my-12 w-full lg:my-16">
    <!-- Title -->
    <h2 class="mb-8 text-center text-2xl font-bold lg:mb-12 lg:text-3xl">
      Testimoni Pelanggan
    </h2>
    <!-- End of Title -->

    <div class="flex max-h-[550px] gap-4 xl:gap-8">
      <!-- Important Endorsement if Index Data = 0 -->
      <NuxtLink
        to="/kol"
        class="hidden h-auto w-1/2 rounded-lg border bg-cover bg-center lg:block"
        :style="{
          'background-image': `url('https://example.com${data.data.value.data.important_endorsement.image_content}')`,
        }"
      />
      <!-- End of Important Endorsement -->

      <div
        class="grid w-full grid-cols-2 grid-rows-2 gap-4 lg:flex lg:w-1/2 lg:flex-wrap xl:gap-8"
      >
        <!-- Another Endorsement except Important-->
        <div
          v-for="data in data.data.value.data.endorsements_except_important"
          :key="data.id"
          class="flex w-full flex-col gap-3 lg:max-w-52 lg:gap-3 xl:max-w-72 xl:gap-6"
        >
          <div
            :style="{
              'background-image': `url('https://example.com${data.image_content}')`,
            }"
            class="h-28 w-auto rounded-lg bg-cover bg-center shadow-lg md:h-40 lg:w-full"
          />
          <NuxtLink to="/kol" class="flex items-center gap-2 md:gap-4">
            <NuxtImg
              :src="
                'https://example.com' + data.image_user
              "
              :alt="data.name"
              class="h-10 w-10 rounded-full lg:h-12 lg:w-12 xl:h-16 xl:w-16"
              loading="lazy"
            />
            <p
              class="text-sm font-semibold text-gray-400 md:text-base xl:text-lg"
            >
              {{ data.name }}
            </p>
          </NuxtLink>
        </div>
      </div>
      <!-- End of Another Endorsement except Important-->
    </div>
  </div>
</template>

<script lang="js" setup>
// Fetching endorsement data
const data = await useFetch(
  "https://example.com",
);
</script>
