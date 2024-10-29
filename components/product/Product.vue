<template>
  <!-- Skeleton -->
  <div v-if="pending" class="grid grid-cols-2 gap-4 md:grid-cols-3 xl:gap-8">
    <SkeletonLoader
      class="h-56 w-40 rounded-lg sm:w-44 md:h-64 md:w-52 lg:w-56 xl:h-80 xl:w-72"
    />
    <SkeletonLoader
      class="h-56 w-40 rounded-lg sm:w-44 md:h-64 md:w-52 lg:w-56 xl:h-80 xl:w-72"
    />
    <SkeletonLoader
      class="h-56 w-40 rounded-lg sm:w-44 md:h-64 md:w-52 lg:w-56 xl:h-80 xl:w-72"
    />
    <SkeletonLoader
      class="h-56 w-40 rounded-lg sm:w-44 md:h-64 md:w-52 lg:w-56 xl:h-80 xl:w-72"
    />
    <SkeletonLoader
      class="h-56 w-40 rounded-lg sm:w-44 md:h-64 md:w-52 lg:w-56 xl:h-80 xl:w-72"
    />
    <SkeletonLoader
      class="h-56 w-40 rounded-lg sm:w-44 md:h-64 md:w-52 lg:w-56 xl:h-80 xl:w-72"
    />
  </div>
  <!-- End of Skeleton -->
  <div v-if="!pending" class="relative w-full lg:w-[75%]">
    <!-- Total and Category Detail -->
    <h2
      class="absolute top-0 text-sm text-gray-500 md:text-base lg:-left-4 xl:-left-6"
    >
      <!-- Showing Total -->
      Menampilkan <b v-text="products.data.total" class="text-black" /> produk
      untuk
      <!-- Category Title Desktop -->
      <b class="hidden text-black lg:inline">{{ props.title }}</b>
      <!-- End of Category Title Desktop -->

      <!-- Category Title Mobile -->
      <div class="relative inline">
        <!-- Button to Select Category -->
        <button
          class="inline-flex items-center rounded bg-blue-500 px-1 text-white lg:hidden"
          type="button"
          @click="toggleDropdown"
        >
          {{ props.title }}
          <svg
            class="ms-3 h-2.5 w-2.5 transition-all duration-500"
            :class="{ 'rotate-180': isDropdownOpen }"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <!-- End of Button to Select Category -->

        <!-- Dropdown Menu -->
        <div
          class="right-0 top-6 z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow"
          :class="{ hidden: !isDropdownOpen, absolute: isDropdownOpen }"
        >
          <!-- Dropdown Contents -->
          <ul
            class="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            <!-- Link to Product Category -->
            <li>
              <NuxtLink
                to="/product"
                class="block px-4 py-2 hover:bg-gray-100"
                exact-active-class="font-bold"
                >Semua Produk</NuxtLink
              >
            </li>
            <li v-for="data in props.categories.data.results" :key="data.id">
              <NuxtLink
                :to="'/category/' + data.slug"
                class="block px-4 py-2 hover:bg-gray-100"
                exact-active-class="font-bold"
                >{{ data.name }}</NuxtLink
              >
            </li>
            <!-- End of Link to Product Category -->
          </ul>
          <!-- End of Dropdown Contents -->
        </div>
        <!-- End of Dropdown Menu -->
      </div>
      <!-- End of Category Title Mobile -->
    </h2>
    <!-- End of Total and Category Detail -->

    <!-- Products -->
    <div class="grid grid-cols-2 gap-4 pt-8 md:grid-cols-3 xl:gap-8">
      <!-- Product and Link to Product Detail -->
      <NuxtLink
        :to="'/product/' + data.slug"
        v-for="data in products.data.results"
        :key="data.id"
        class="group flex max-h-56 min-h-56 min-w-40 max-w-40 flex-col justify-between rounded-lg border-2 p-4 shadow sm:min-w-44 sm:max-w-44 md:max-h-64 md:min-h-64 md:min-w-52 md:max-w-52 lg:min-w-56 lg:max-w-56 xl:max-h-80 xl:min-h-80 xl:min-w-72 xl:max-w-72 xl:p-6"
      >
        <!-- Product Image -->
        <NuxtImg
          :src="'https://asset.olymplast.co.id/' + data.images"
          :alt="data.meta_title_brand"
          loading="lazy"
          class="mx-auto h-36 w-auto xl:h-52"
        />
        <!-- End of Product Image -->

        <!-- Product Detail -->
        <div class="flex flex-col justify-between gap-1">
          <div>
            <p class="text-sm md:text-base">{{ data.category_name }}</p>
            <h3
              v-text="data.judul_brand"
              class="text-sm font-bold md:text-lg"
            />
          </div>
          <hr
            class="w-1/4 rounded-full border-t-4 border-[#4197CE] transition-all duration-500 group-hover:w-full"
          />
        </div>
        <!-- End of Product Detail -->
      </NuxtLink>
      <!-- End of Product and Link to Product Detail -->
    </div>
    <!-- End of Products -->

    <!-- Pagination -->
    <div>
      <ElPagination
        v-if="products.data.total"
        v-model.number="page"
        :query="true"
        :total="getTotalPages(products.data.total, limit)"
        :prev-show-count="getPagination()"
        :next-show-count="getPagination()"
      />
    </div>
    <!-- End of Pagination -->
  </div>
</template>

<script lang="js" setup>
// Initalization
const { getCurrentPage, getTotalPages, query } = usePagination();
const props = defineProps(["title", "categories"]);
const page = ref(getCurrentPage(true, 1));
const isDropdownOpen = ref(false);
const windowWidth = ref(0);
const route = useRoute();
const limit = 12;

// Import pagination component as async component
const ElPagination = defineAsyncComponent(
  () => import("~/components/ElPagination.vue"),
);

// Fetching product data
const {
  pending,
  data: products,
  refresh,
} = await useLazyAsyncData(
  async () =>
    await $fetch(
      `https://example.com`,
    ),
);

// Fetching handler when page change
watch(
  () => query.value.page,
  async (value) => {
    if (!value) {
      page.value = 1;
    }
    await refresh();
  },
);

// Handle query produk
watchEffect(() => {
  refresh();
});

// Pagination handler
const getPagination = () => {
  return windowWidth.value >= 768 ? 3 : 2;
};

// Dropdown handler
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Window width handler
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
</script>
