<template>
  <!-- Banner Slider -->
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectFade, SwiperPagination]"
    :loop="true"
    :effect="'fade'"
    :autoplay="{ delay: 6000, disableOnInteraction: true }"
    :pagination="{
      el: '.custom-pagination',
    }"
  >
    <!-- Banner Items -->
    <SwiperSlide v-for="data in data.data.value.data.results" :key="data.id">
      <NuxtLink :to="data.external_link">
        <NuxtImg
          :src="getImageUrl(data)"
          :alt="data.alt_text"
          class="3xl:layout mx-auto h-auto w-full shadow-xl sm:h-80 sm:w-auto lg:h-auto lg:w-full"
          loading="lazy"
      /></NuxtLink>
    </SwiperSlide>
    <!-- End of Banner Items -->
  </Swiper>
  <!-- End of Banner Slider -->

  <!-- Custom Pagination -->
  <div class="custom-pagination space-x-2 text-center" />
</template>

<script lang="js" setup>
// Initialiization
const windowWidth = ref(0);

// Fetching banner data
const data = await useFetch(`https://example.com`);

// Handler for checking aspect ratio user device
onMounted(() => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", updateWindowWidth);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWindowWidth);
  }
});

function updateWindowWidth() {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
}

// Logic for displaying image
const getImageUrl = (data) => {
  return windowWidth.value > 768
    ? "https://example.com" + data.image_desktop
    : "https://example.com" + data.image_mobile;
};
</script>
