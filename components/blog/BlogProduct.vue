<template>
  <div class="relative w-full">
    <div class="mx-auto my-12 w-[90%]">
      <!-- Produk Terlaris Carousel -->
      <Swiper
        :modules="[SwiperNavigation]"
        :slides-per-view="2"
        :space-between="5"
        :loop="true"
        :centered-slides="true"
        :breakpoints="{
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 10 },
          1280: { slidesPerView: 3, spaceBetween: 10 },
        }"
        :navigation="{
          prevEl: '.custom-prev-2',
          nextEl: '.custom-next-2',
        }"
      >
        <!-- Products -->
        <SwiperSlide
          v-for="data in props.products.data.value.data"
          :key="data.id"
        >
          <!-- Link to Product Detail -->
          <NuxtLink
            :to="'/product/' + data.slug"
            class="group relative flex max-h-[230px] min-h-[230px] max-w-48 flex-col rounded-lg border-2 bg-white md:max-h-[280px] md:min-h-[280px] lg:max-w-56 xl:max-h-[350px] xl:min-h-[350px] xl:max-w-60"
          >
            <!-- Product Image -->
            <NuxtImg
              loading="lazy"
              :src="'https://example.com' + data.images"
              :alt="data.name"
              class="rounded-t-lg"
            />
            <!-- End of Product Image -->

            <!-- Product Description -->
            <div
              class="absolute bottom-0 flex w-full flex-col gap-1 px-2 py-4 lg:px-4 xl:px-6 xl:py-6"
            >
              <p class="text-sm font-semibold sm:text-base">
                {{ data.category_name }}
              </p>
              <h4 class="text-sm font-bold sm:text-base lg:text-lg">
                {{ data.judul_brand }}
              </h4>
              <hr
                class="w-1/4 rounded-full border-t-4 border-[#4197CE] transition-all duration-500 group-hover:w-full"
              />
            </div>
            <!-- End of Product Description -->
          </NuxtLink>
          <!-- End of Link to Product Detail -->
        </SwiperSlide>
        <!-- End of Products -->
      </Swiper>
      <!-- End of Product Terlaris Carousel -->
    </div>
    <!-- Custom Navigation Button Previous -->
    <div
      class="custom-prev-2 absolute left-0 top-1/2 z-10 flex h-12 items-center justify-center rounded-r-lg bg-[#4197CE] bg-opacity-50 text-white hover:bg-opacity-80"
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
    <!-- End of Custom Navigation Button Previous -->

    <!-- Custom Navigation Button Next -->
    <div
      class="custom-next-2 absolute right-0 top-1/2 z-10 flex h-12 items-center justify-center rounded-l-lg bg-[#4197CE] bg-opacity-50 text-white hover:bg-opacity-80"
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
    <!-- End of Custom Navigation Button Next -->
  </div>
</template>

<script lang="js" setup>
// Initialization
const props = defineProps(["products"]);
</script>
