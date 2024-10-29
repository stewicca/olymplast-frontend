<template>
  <div class="layout-swiper-navigation relative w-full">
    <div class="layout relative my-12 w-full md:my-16">
      <!-- Categories -->
      <Swiper
        :modules="[SwiperNavigation, SwiperGrid]"
        :grid="{ rows: 2, fill: 'row' }"
        :slides-per-view="2"
        :space-between="5"
        :breakpoints="{
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
            grid: { rows: 2, fill: 'row' },
          },
        }"
        :navigation="{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }"
      >
        <!-- Category -->
        <SwiperSlide
          v-for="data in newsCategoriesData.data.value.data"
          :key="data.id"
        >
          <NuxtLink
            :to="'/blog/cat/' + data.slug"
            class="flex h-28 w-auto flex-col justify-end rounded-lg lg:h-36 xl:h-48"
            :style="{
              'background-image': `url('https://example.com')`,
            }"
          >
            <div
              class="flex h-10 w-full items-center justify-center rounded-b-lg bg-[#4197CE] bg-opacity-70"
            >
              <h3 class="font-semibold text-white">{{ data.name_id }}</h3>
            </div>
          </NuxtLink>
        </SwiperSlide>
        <!-- End of Category -->
      </Swiper>
      <!-- End of Categories -->

      <div
        class="absolute -bottom-4 h-1 w-[91%] rounded-full bg-gray-300 md:w-full"
      ></div>
    </div>

    <!-- Button Prev -->
    <div
      class="custom-prev absolute left-0 top-[44%] z-10 flex h-12 items-center justify-center rounded-r-lg bg-[#4197CE] bg-opacity-50 text-white hover:bg-opacity-80"
    >
      <svg
        fill="#ffffff"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
        class="h-5 w-5"
      >
        <path
          d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z"
        ></path>
      </svg>
    </div>
    <!-- End of Button Prev -->

    <!-- Button Next -->
    <div
      class="custom-next absolute right-0 top-[44%] z-10 flex h-12 items-center justify-center rounded-l-lg bg-[#4197CE] bg-opacity-50 text-white hover:bg-opacity-80"
    >
      <svg
        fill="#ffffff"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
        class="h-5 w-5"
      >
        <path
          d="M419.3 264.8l-61.8 61.8L542.9 512 357.5 697.4l61.8 61.8L666.5 512z"
        ></path>
      </svg>
    </div>
    <!-- End of Button Next -->
  </div>
</template>

<script lang="js" setup>
// Fetching categories Data
const newsCategoriesData = await useFetch(
  "https://example.com",
);
</script>
