<template>
  <div
    class="layout flex w-full flex-col gap-8 py-10 lg:flex-row lg:justify-between"
  >
    <!-- Product Showcase -->
    <div class="lg:w-[40%]">
      <!-- Product Image -->
      <div>
        <Swiper
          @swiper="setMainSwiper"
          @slide-change="onMainSwiperSlideChange"
          :modules="[SwiperThumbs]"
          :loop="true"
          :thumbs="{ swiper: thumbsSwiper }"
        >
          <SwiperSlide
            v-if="product.data.value.data.variant.length != 0"
            v-for="data in product.data.value.data.variant"
            :key="data.id"
          >
            <NuxtImg
              loading="lazy"
              :src="
                'https://example.com' +
                extractAndRemoveLast(product.data.value.data.product.images) +
                '/' +
                data.filename_webp
              "
              class="h-auto w-full"
            />
          </SwiperSlide>
          <SwiperSlide v-else>
            <NuxtImg
              loading="lazy"
              :src="
                'https://example.com' +
                product.data.value.data.product.images
              "
              class="h-auto w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <!-- End of Product Image -->

      <!-- Product Thumbs -->
      <div class="relative mx-auto w-[80%]">
        <!-- Product Thumbs Image -->
        <Swiper
          @swiper="setThumbsSwiper"
          :modules="[SwiperNavigation, SwiperFreeMode]"
          :slides-per-view="4"
          :free-mode="true"
          :loop="true"
          :navigation="{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }"
        >
          <SwiperSlide
            v-if="product.data.value.data.variant.length != 0"
            v-for="(data, index) in product.data.value.data.variant"
            :key="data.id"
          >
            <NuxtImg
              loading="lazy"
              :src="
                'https://example.com' +
                extractAndRemoveLast(product.data.value.data.product.images) +
                '/' +
                data.filename_webp
              "
              class="h-auto w-20 cursor-pointer"
              :class="{ 'opacity-60': mainSwiperIndex !== index }"
            />
          </SwiperSlide>
          <SwiperSlide v-else>
            <NuxtImg
              loading="lazy"
              :src="
                'https://example.com' +
                product.data.value.data.product.images
              "
              class="h-auto w-20 cursor-pointer"
              :class="{ 'opacity-60': mainSwiperIndex !== index }"
            />
          </SwiperSlide>
        </Swiper>
        <!-- End of Product Thumbs Image -->

        <!-- Product Thumbs Button Previous -->
        <div
          class="absolute -left-8 top-5 z-10 flex h-12 items-center justify-center rounded-r-lg bg-[#4197CE] bg-opacity-50 text-white md:-left-16 lg:-left-10"
          :class="{
            'custom-prev cursor-pointer hover:bg-opacity-80':
              product.data.value.data.variant.length > 4,
          }"
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
        <!-- End of Product Thumbs Button Previous -->

        <!-- Product Thumbs Button Next -->
        <div
          class="absolute -right-8 top-5 z-10 flex h-12 items-center justify-center rounded-l-lg bg-[#4197CE] bg-opacity-50 text-white md:-right-16 lg:-right-10"
          :class="{
            'custom-next cursor-pointer hover:bg-opacity-80':
              product.data.value.data.variant.length > 4,
          }"
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
        <!-- End of Product Thumbs Button Next -->
      </div>
      <!-- End of Product Thumbs -->
    </div>
    <!-- End of Product Showcase -->

    <!-- Product Desc -->
    <div class="flex flex-col gap-4 lg:w-[55%] xl:w-[50%]">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2">
        <NuxtLink to="/" class="text-[#4197CE]">Home</NuxtLink>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-3"
        >
          <path
            d="M13 6L19 12L13 18M6 6L12 12L6 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <NuxtLink
          :to="'/category/' + product.data.value.data.product.category"
          class="text-[#4197CE]"
          >{{ product.data.value.data.product.category_name }}</NuxtLink
        >
      </div>
      <!-- End of Breadcrumb -->

      <!-- Product Title -->
      <h1 class="text-xl font-bold md:text-2xl">
        {{ product.data.value.data.product.name }}
      </h1>
      <!-- End of Product Title -->

      <!-- Product Variant -->
      <div v-if="product.data.value.data.variant.length !== 0">
        <p class="text-lg font-bold">Varian</p>
        <ul class="flex flex-wrap gap-2">
          <li v-for="data in firstVariants" :key="data.id">
            <button
              @click="
                mainSwiper.slideTo(data.virtual_index);
                onIsVariantClicked();
              "
              class="rounded-md bg-[#4197CE] bg-opacity-90 px-2 py-1 text-sm font-light text-white hover:bg-opacity-100"
              :class="{
                'bg-opacity-100': mainSwiperIndex === index && isVariantClicked,
              }"
            >
              {{ data.variant }}
            </button>
          </li>
        </ul>
      </div>
      <!-- End of Product Variant -->

      <!-- Product Spec -->
      <div v-if="product.data.value.data.variant.length !== 0">
        <p class="text-lg font-bold">Spesifikasi</p>
        <ul class="flex flex-col">
          <li
            v-for="data in firstVariants"
            :key="data.id"
            class="flex max-w-96 justify-between border-b-[1px]"
          >
            <p class="font-bold">{{ data.variant }}</p>
            <p>
              {{ data.dimensions_length }}cm x {{ data.dimensions_width }}cm x
              {{ data.dimensions_height }}cm
            </p>
          </li>
        </ul>
      </div>
      <!-- End of Product Spec -->

      <!-- Product Pros -->
      <div v-if="product.data.value.data.kelebihan.length !== 0">
        <p class="text-lg font-bold">Kelebihan</p>
        <ul class="list-inside list-image-[url('/checkmark.svg')]">
          <li
            v-for="data in product.data.value.data.kelebihan"
            :key="data.id"
            class="text-sm font-light md:text-base"
          >
            {{ data.name }}
          </li>
        </ul>
      </div>
      <!-- End of Product Pros -->

      <!-- Share Button -->
      <div>
        <p class="text-lg font-bold">Share</p>
        <ul class="flex items-center gap-4">
          <li
            v-for="content in shareContent"
            :key="content.id"
            class="text-[#4197CE] text-opacity-90 hover:text-opacity-100"
          >
            <NuxtLink :to="content.to"><span v-html="content.icon" /></NuxtLink>
          </li>
        </ul>
      </div>
      <!-- End of Share Button -->

      <!-- Desc Footer -->
      <p class="text-sm font-light text-gray-400">
        {{ product.data.value.data.product.name }}
      </p>
      <!-- End Desc Footer -->
    </div>
    <!-- End of Product Desc -->
  </div>

  <!-- Product Detail & Product Info -->
  <div class="layout mb-10 w-full space-y-10">
    <!-- Detail & Information Button -->
    <div class="flex justify-center gap-8 border-b-2">
      <button @click="onIsInformationClicked">
        <h3
          class="border-b-2 px-2 pb-2 text-xl font-bold md:text-2xl"
          :class="{
            'border-transparent text-gray-400': !isInformationClicked,
            'border-[#4197CE] text-[#4197CE]': isInformationClicked,
          }"
        >
          Informasi
        </h3>
      </button>
      <button @click="onIsDetailClicked">
        <h3
          class="border-b-2 px-2 pb-2 text-xl font-bold md:text-2xl"
          :class="{
            'border-transparent text-gray-400': !isDetailClicked,
            'border-[#4197CE] text-[#4197CE]': isDetailClicked,
          }"
        >
          Detail
        </h3>
      </button>
    </div>
    <!-- End of Detail & Information Button -->

    <!-- Product Video -->
    <div v-if="isInformationClicked && product.data.value.data.video !== null">
      <iframe
        class="mx-auto h-64 w-full md:w-96"
        :src="
          'https://www.youtube.com/embed/' +
          product.data.value.data.video.link +
          '?rel=0'
        "
        allow="fullscreen;"
      >
      </iframe
      ><br />
    </div>
    <!-- End of Product Video -->

    <!-- Product Info Image -->
    <ul
      v-if="isInformationClicked && product.data.value.data.info !== null"
      class="flex flex-wrap justify-center gap-6"
    >
      <li
        v-for="info in product.data.value.data.info"
        :key="info.id"
        class="w-[90%] md:w-[45%] lg:w-[31%] xl:w-[32%]"
      >
        <NuxtImg
          loading="lazy"
          :src="
            'https://example.com' +
            extractAndRemoveLast(product.data.value.data.product.images) +
            '/' +
            info.filename_webp
          "
        />
      </li>
    </ul>
    <!-- End of Product Info Image -->

    <!-- Product Detail Image -->
    <ul
      v-if="isDetailClicked && product.data.value.data.detail !== null"
      class="flex flex-wrap justify-center gap-6"
    >
      <li
        v-for="detail in product.data.value.data.detail"
        :key="detail.id"
        class="w-[90%] md:w-[45%] lg:w-[31%] xl:w-[32%]"
      >
        <NuxtImg
          loading="lazy"
          :src="
            'https://example.com' +
            extractAndRemoveLast(product.data.value.data.product.images) +
            '/' +
            detail.filename_webp
          "
        />
      </li>
    </ul>
    <!-- End of Product Detail Image -->
  </div>
  <!-- End of Product Detail & Product Info -->
</template>

<script lang="js" setup>
// Initialization
const route = useRoute();
const firstVariants = {};
const mainSwiper = ref(null);
const thumbsSwiper = ref(null);
const mainSwiperIndex = ref(0);
const isDetailClicked = ref(true);
const isVariantClicked = ref(false);
const isInformationClicked = ref(false);

// Fetching product data
const product = await useFetch(
  `https://example.com`,
);

// Share content
const shareContent = [
  {
    id: 1,
    to: `https://www.facebook.com/sharer/sharer.php?u=https://example.com${route.fullPath}`,
    icon: "<svg viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg' class='w-10 h-10'><path d='M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z' fill='currentColor' /></svg>",
  },
  {
    id: 2,
    to: `https://api.whatsapp.com/send/?phone&text=Divan%20Plastik%20Sandaran%20-%20OBF%2090+-++-+https://example.com${route.fullPath}`,
    icon: "<svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='w-8 h-8'><path d='M16.8 5.7C14.4 2 9.5.9 5.7 3.2 2 5.5.8 10.5 3.2 14.2l.2.3-.8 3 3-.8.3.2c1.3.7 2.7 1.1 4.1 1.1 1.5 0 3-.4 4.3-1.2 3.7-2.4 4.8-7.3 2.5-11.1zm-2.1 7.7c-.4.6-.9 1-1.6 1.1-.4 0-.9.2-2.9-.6-1.7-.8-3.1-2.1-4.1-3.6-.6-.7-.9-1.6-1-2.5 0-.8.3-1.5.8-2 .2-.2.4-.3.6-.3H7c.2 0 .4 0 .5.4.2.5.7 1.7.7 1.8.1.1.1.3 0 .4.1.2 0 .4-.1.5-.1.1-.2.3-.3.4-.2.1-.3.3-.2.5.4.6.9 1.2 1.4 1.7.6.5 1.2.9 1.9 1.2.2.1.4.1.5-.1s.6-.7.8-.9c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.5.3.1.3.1.7-.1 1z'></path></svg>",
  },
  {
    id: 3,
    to: `https://twitter.com/intent/tweet?text=Yourface&url=https://example.com${route.fullPath}`,
    icon: "<svg fill='currentColor' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' xml:space='preserve' class='w-7 h-7'><path d='M459.186,151.787c0.203,4.501,0.305,9.023,0.305,13.565 c0,138.542-105.461,298.285-298.274,298.285c-59.209,0-114.322-17.357-160.716-47.104c8.212,0.973,16.546,1.47,25.012,1.47 c49.121,0,94.318-16.759,130.209-44.884c-45.887-0.841-84.596-31.154-97.938-72.804c6.408,1.227,12.968,1.886,19.73,1.886 c9.55,0,18.816-1.287,27.617-3.68c-47.955-9.633-84.1-52.001-84.1-102.795c0-0.446,0-0.882,0.011-1.318 c14.133,7.847,30.294,12.562,47.488,13.109c-28.134-18.796-46.637-50.885-46.637-87.262c0-19.212,5.16-37.218,14.193-52.7 c51.707,63.426,128.941,105.156,216.072,109.536c-1.784-7.675-2.718-15.674-2.718-23.896c0-57.891,46.941-104.832,104.832-104.832 c30.173,0,57.404,12.734,76.525,33.102c23.887-4.694,46.313-13.423,66.569-25.438c-7.827,24.485-24.434,45.025-46.089,58.002 c21.209-2.535,41.426-8.171,60.222-16.505C497.448,118.542,479.666,137.004,459.186,151.787z'></path></svg>",
  },
  {
    id: 4,
    to: `${route.fullPath}`,
    icon: "<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' class='w-7 h-7'><path d='M16.4481 1.50023C14.844 1.4862 13.3007 2.10727 12.15 3.22645L12.1351 3.24107L11.6464 3.7298C11.2559 4.12032 11.2559 4.75349 11.6464 5.14401L12.3535 5.85112C12.7441 6.24164 13.3772 6.24164 13.7677 5.85112L14.2484 5.37048C14.834 4.80437 15.6142 4.49305 16.4218 4.50012C17.2326 4.50721 18.0103 4.83463 18.5868 5.41517C19.1637 5.99606 19.4927 6.78402 19.4998 7.60991C19.5069 8.43176 19.1946 9.22174 18.633 9.81182L15.5209 12.9432C15.2056 13.2609 14.8269 13.5058 14.4107 13.6622C13.9945 13.8185 13.5501 13.8828 13.1076 13.8509C12.6651 13.8189 12.2341 13.6915 11.8438 13.4768C11.7456 13.4228 11.6504 13.3635 11.5588 13.2993C11.1066 12.9823 10.4859 12.8717 10.0425 13.201L9.23978 13.7973C8.79642 14.1266 8.69902 14.7603 9.09601 15.1443C9.48444 15.52 9.9219 15.8435 10.3977 16.1053C11.1664 16.5282 12.0171 16.78 12.8918 16.8431C13.7666 16.9062 14.6444 16.779 15.4656 16.4706C16.2868 16.1621 17.0317 15.6797 17.65 15.0568L20.7712 11.9162L20.7898 11.8971C21.9007 10.7389 22.5136 9.18987 22.4997 7.58402C22.4859 5.97817 21.8463 4.43996 20.7155 3.30127C19.5844 2.16225 18.0521 1.51427 16.4481 1.50023Z' fill='currentColor'></path><path d='M11.1082 7.15685C10.2334 7.09376 9.35555 7.22089 8.53436 7.52937C7.71347 7.83773 6.96821 8.32053 6.34994 8.94317L3.22873 12.0838L3.21011 12.1029C2.09928 13.261 1.48637 14.8101 1.50023 16.416C1.51409 18.0218 2.15365 19.56 3.28441 20.6987C4.41551 21.8377 5.94781 22.4857 7.55185 22.4997C9.15591 22.5138 10.6993 21.8927 11.85 20.7735L11.8648 20.7589L12.3536 20.2701C12.7441 19.8796 12.7441 19.2465 12.3536 18.8559L11.6464 18.1488C11.2559 17.7583 10.6228 17.7583 10.2322 18.1488L9.75155 18.6295C9.16598 19.1956 8.38576 19.5069 7.5781 19.4999C6.76732 19.4928 5.98963 19.1653 5.41313 18.5848C4.83629 18.0039 4.50725 17.216 4.50012 16.3901C4.49303 15.5682 4.80532 14.7782 5.36694 14.1881L8.47904 11.0567C8.79434 10.7391 9.1731 10.4941 9.58932 10.3378C10.0055 10.1814 10.4498 10.1172 10.8924 10.1491C11.3349 10.181 11.7659 10.3084 12.1561 10.5231C12.2544 10.5772 12.3495 10.6365 12.4411 10.7007C12.8934 11.0177 13.5141 11.1282 13.9574 10.7989L14.7602 10.2026C15.2036 9.87328 15.301 9.23958 14.904 8.85563C14.5155 8.47995 14.0781 8.15644 13.6022 7.89464C12.8335 7.47172 11.9829 7.21993 11.1082 7.15685Z' fill='currentColor'></path></svg>",
  },
];

// Handle duplicate variant
product.data.value.data.variant.forEach((item, index) => {
  const { variant } = item;
  if (!(variant in firstVariants)) {
    // Add custom field 'virtual_index'
    item.virtual_index = index;
    firstVariants[variant] = item;
  }
});

// Handler for swiper
const setMainSwiper = (swiper) => {
  mainSwiper.value = swiper;
};

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const onMainSwiperSlideChange = (swiper) => {
  mainSwiperIndex.value = swiper.activeIndex;
};

const onIsVariantClicked = () => {
  isVariantClicked.value = true;
};

const onIsDetailClicked = () => {
  isDetailClicked.value = true;
  isInformationClicked.value = false;
};

const onIsInformationClicked = () => {
  isInformationClicked.value = true;
  isDetailClicked.value = false;
};

// Fungsi untuk mengambil path dan menghapus bagian terakhir
function extractAndRemoveLast(imageUrl) {
  // Membagi string berdasarkan '/'
  const parts = imageUrl.split("/");
  // Mengambil semua bagian kecuali yang terakhir
  const path = parts.slice(0, -1).join("/");
  return path;
}

// Initialization page seo
useHead({
  title:
    product.data.value.data.product.name + " | Olymplast Plastic Furniture",
  meta: [
    { name: "author", content: "Olymplast" },
    { name: "description", content: product.data.value.data.product.name },
    { name: "keywords", content: "" },
    { name: "robots", content: "all" },
    { property: "og:locale", content: "id" },
    {
      property: "og:title",
      content:
        product.data.value.data.product.name + " | Olymplast Plastic Furniture",
    },
    {
      property: "og:description",
      content: product.data.value.data.product.name,
    },
    { property: "og:type", content: "Website" },
    {
      property: "og:url",
      content: `https://example.com${route.fullPath}`,
    },
    {
      property: "og:image",
      content:
        "https://example.com" +
        product.data.value.data.product.images,
    },
    { name: "twitter:creator", content: "@OlympicFurnitur" },
    {
      name: "twitter:title",
      content:
        product.data.value.data.product.name + " | Olymplast Plastic Furniture",
    },
    {
      name: "twitter:description",
      content: product.data.value.data.product.name,
    },
    { name: "twitter:site", content: "@OlympicFurnitur" },
    {
      name: "twitter:image",
      content:
        "https://example.com" +
        product.data.value.data.product.images,
    },
  ],
  htmlAttrs: { lang: "id" },
  link: [
    { rel: "canonical", href: `https://example.com${route.fullPath}` },
  ],
});
</script>
