<template>
  <div class="layout-swiper-navigation relative w-full">
    <div class="layout my-12 w-full lg:my-16">
      <!-- Title -->
      <h2 class="mb-8 text-center text-2xl font-bold lg:mb-12 lg:text-3xl">
        Produk Kami
      </h2>
      <!-- End of Title -->

      <!-- Category Carousel -->
      <Swiper
        :modules="[SwiperGrid, SwiperNavigation]"
        :slides-per-view="2"
        :grid="{ rows: 2, fill: 'row' }"
        :space-between="20"
        :loop="true"
        :navigation="{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }"
      >
        <!-- Categories -->
        <SwiperSlide
          v-for="data in data.data.value.data.results"
          :key="data.id"
        >
          <!-- Link to Product Category -->
          <NuxtLink
            :to="'/category/' + data.slug"
            class="group relative flex h-48 justify-end overflow-hidden rounded-lg bg-neutral-100 pb-8 pr-12 pt-10 md:h-52 md:min-w-80 lg:h-72 lg:pt-12"
          >
            <hr
              class="absolute right-2 top-3 w-10 rounded-full border-t-2 border-black transition-all duration-500 group-hover:w-24 md:top-4 md:w-20 md:group-hover:w-60 lg:w-36 lg:group-hover:w-72 xl:w-56 xl:group-hover:w-96"
            />
            <NuxtImg
              :src="'https://example.com' + data.image"
              :alt="data.meta_title"
              class="lg:-bottom-30 absolute bottom-8 left-3 w-36 transition-all duration-500 sm:left-5 md:bottom-auto md:left-10 md:w-60 md:group-hover:scale-125 lg:-left-10 lg:w-72 xl:w-96"
              loading="lazy"
            />
            <!-- Category Description on Desktop -->
            <div
              class="z-10 hidden max-w-44 flex-col justify-between lg:flex xl:max-w-[270px]"
            >
              <div class="space-y-2 text-pretty text-end">
                <!-- Category Name -->
                <h4
                  class="text-2xl font-bold uppercase text-[#4197CE] transition-all duration-500 group-hover:tracking-wide xl:text-3xl"
                >
                  {{ data.name }}
                </h4>
                <!-- End of Category Name -->

                <!-- Category Content -->
                <p
                  class="text-sm text-gray-600 transition-all duration-500 group-hover:text-black xl:text-lg"
                >
                  {{ data.content }}
                </p>
                <!-- End of Category Content -->
              </div>
              <button
                class="self-end rounded-md bg-[#4197CE] bg-opacity-90 px-2 py-1 text-sm text-white hover:bg-opacity-100 xl:text-base"
              >
                Lihat Selengkapnya
              </button>
            </div>
            <!-- End of Category Description on Desktop -->

            <!-- Category Name on Mobile -->
            <h4
              class="absolute bottom-2 left-5 text-lg font-bold uppercase tracking-wide text-[#4197CE] transition-all duration-500 group-hover:tracking-wide md:hidden"
            >
              {{ data.name }}
            </h4>
            <!-- End of Category Name on Mobile -->
          </NuxtLink>
          <!-- End of Link to Product Category -->
        </SwiperSlide>
        <!-- End of Categories -->
      </Swiper>
      <!-- End of Category Carousel -->
    </div>
    <!-- Custom Navigation Button Previous -->
    <div
      class="custom-prev absolute left-0 top-1/2 z-10 flex h-12 items-center justify-center rounded-r-lg bg-[#4197CE] bg-opacity-50 text-white hover:bg-opacity-80"
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
      class="custom-next absolute right-0 top-1/2 z-10 flex h-12 items-center justify-center rounded-l-lg bg-[#4197CE] bg-opacity-50 text-white hover:bg-opacity-80"
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
// Fetching categories data
const data = await useFetch(
  `https://example.com`,
);
</script>
