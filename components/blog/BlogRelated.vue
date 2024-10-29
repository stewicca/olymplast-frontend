<template>
  <div class="layout-swiper-navigation relative w-full">
    <div class="layout mb-24 mt-12 w-full lg:mt-16">
      <!-- Title -->
      <h2 class="mb-8 text-center text-2xl font-bold lg:mb-12 lg:text-3xl">
        Artikel Terkait
      </h2>
      <!-- End of Title -->

      <!-- Article Carousel -->
      <Swiper
        :modules="[SwiperNavigation]"
        :slides-per-view="1"
        :space-between="10"
        :loop="true"
        :breakpoints="{
          768: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 10 },
          1280: { slidesPerView: 3, spaceBetween: 30 },
        }"
        :navigation="{
          prevEl: '.custom-prev-3',
          nextEl: '.custom-next-3',
        }"
      >
        <!-- Articles -->
        <SwiperSlide v-for="data in news.data.data" :key="data.title">
          <!-- Link to Article Detail -->
          <NuxtLink :to="'/blog/' + data.slug">
            <div class="h-[260px] max-w-[400px] rounded-lg border-2 lg:h-auto">
              <!-- Article Image -->
              <NuxtImg
                loading="lazy"
                :src="'https://example.com' + data.image"
                :alt="data.image_alt"
                class="rounded-t-lg"
              />
              <!-- End of Article Image -->

              <!-- Article Description -->
              <div class="flex items-center gap-4 px-4 py-2">
                <!-- Article Date Release -->
                <div
                  class="my-2 flex flex-col items-center justify-center border-r-2 pr-4 leading-none"
                >
                  <p class="text-[10px] font-light text-gray-400">
                    {{ formatDate(data.date).month }}
                  </p>
                  <p class="font-semibold">{{ formatDate(data.date).day }}</p>
                  <p class="text-[10px] font-light text-gray-400">
                    {{ formatDate(data.date).year }}
                  </p>
                </div>
                <!-- End of Article Date Release -->

                <!-- Article Title -->
                <h4 class="text-sm font-semibold leading-tight md:text-base">
                  {{ data.title }}
                </h4>
                <!-- End of Article Title -->
              </div>
            </div>
            <!-- End of Article Description -->
          </NuxtLink>
          <!-- End of Link to Article Detail -->
        </SwiperSlide>
        <!-- End of Articles -->
      </Swiper>
      <!-- End of Article Carousel -->
    </div>
    <!-- Custom Navigation Button Previous -->
    <div
      class="custom-prev-3 absolute left-0 top-[50%] z-10 flex h-12 items-center justify-center rounded-r-lg bg-[#4197CE] bg-opacity-50 text-white hover:bg-opacity-80"
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
      class="custom-next-3 absolute right-0 top-[50%] z-10 flex h-12 items-center justify-center rounded-l-lg bg-[#4197CE] bg-opacity-50 text-white hover:bg-opacity-80"
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
const props = defineProps(["category"]);

// Fetching latest article data
const { data: news } = await useFetch(
  `https://example.com`,
);

// Handler to get day, month, and year from date
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return { day, month, year };
}
</script>
