<template>
  <div class="md:layout mb-12 overflow-hidden md:rounded-xl lg:mb-16">
    <!-- News Carousel -->
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination]"
      :autoplay="{ delay: 6000, disableOnInteraction: true }"
      :pagination="true"
      :loop="true"
    >
      <!-- News -->
      <SwiperSlide
        v-for="(data, index) in newsData.data.value.data.data"
        :key="index"
      >
        <NuxtLink
          :to="'/blog/' + data.slug"
          class="flex h-56 w-auto flex-col justify-center gap-2 bg-black bg-opacity-40 px-4 bg-blend-multiply md:h-[350px] md:justify-end md:px-8 md:py-20 lg:h-[440px] lg:px-16 xl:h-[550px]"
        >
          <!-- News Image -->
          <NuxtImg
            loading="lazy"
            :src="'https://example.com' + data.image"
            :alt="data.title"
            class="absolute bottom-0 left-0 right-0 top-0 -z-10 h-auto w-full self-center"
          />
          <!-- End of News Image -->

          <!-- News Description -->
          <ul class="flex gap-2">
            <li
              v-for="(category, index) in data.r_uni_news_categories"
              :key="index"
              class="rounded-md bg-[#4197CE] p-1 text-xs text-white lg:p-2 lg:text-sm"
            >
              {{ category.name_id }}
            </li>
          </ul>
          <h2 class="text-lg font-extrabold text-white md:text-2xl lg:text-3xl">
            {{ data.title }}
          </h2>
          <!-- End of News Description -->
        </NuxtLink>
      </SwiperSlide>
      <!-- End of News -->
    </Swiper>
    <!-- End of News Carousel -->
  </div>
</template>

<script setup>
// Fetching News Data
const newsData = await useFetch(
  "https://example.com",
);
</script>
