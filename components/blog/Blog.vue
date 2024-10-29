<template>
  <!-- Skeleton -->
  <div
    v-if="pending"
    class="md:layout md:px-auto mt-8 grid w-full gap-4 px-4 pt-8 md:grid-cols-2 lg:mt-16 xl:grid-cols-3 xl:gap-8"
  >
    <SkeletonLoader class="h-56 w-full rounded-xl lg:h-64" />
    <SkeletonLoader class="h-56 w-full rounded-xl lg:h-64" />
    <SkeletonLoader class="h-56 w-full rounded-xl lg:h-64" />
    <SkeletonLoader class="h-56 w-full rounded-xl lg:h-64" />
    <SkeletonLoader class="h-56 w-full rounded-xl lg:h-64" />
    <SkeletonLoader class="h-56 w-full rounded-xl lg:h-64" />
  </div>
  <!-- End of Skeleton -->
  <div
    id="news"
    v-if="!pending"
    class="md:layout md:px-auto mt-8 grid w-full gap-4 px-4 pt-8 md:grid-cols-2 lg:mt-16 xl:grid-cols-3 xl:gap-8"
  >
    <!-- News -->
    <NuxtLink
      :to="'/blog/' + data.slug"
      v-if="news"
      v-for="(data, index) in news.data.data"
      :key="index"
      class="space-y-1 rounded-b-xl bg-gray-100 shadow"
    >
      <!-- News Image -->
      <NuxtImg
        loading="lazy"
        :src="'https://example.com' + data.image"
        class="rounded-t-xl"
      />
      <!-- End of News Image -->

      <!-- News Description -->
      <div class="flex h-16 flex-col justify-center space-y-1 px-2 xl:h-20">
        <h2 class="text-sm font-bold xl:text-base">{{ data.title }}</h2>
        <p class="text-xs">
          <span>{{ data.r_uni_news_categories[0].name_id }}</span> ·
          {{ data.date_indo }}
        </p>
      </div>
      <!-- End of News Description -->
    </NuxtLink>
    <!-- End of News -->
  </div>

  <!-- Pagination -->
  <div class="layout mb-20 w-full lg:mb-16">
    <ElPagination
      v-if="news"
      v-model.number="page"
      :query="true"
      :total="getTotalPages(news.data.total, limit)"
      :prev-show-count="getPagination()"
      :next-show-count="getPagination()"
      id-element="news"
      class="flex items-center justify-center"
    />
  </div>
  <!-- End of Pagination -->
</template>

<script lang="js" setup>
// Initialization
const ElPagination = defineAsyncComponent(
  () => import("~/components/ElPagination.vue"),
);
const { getCurrentPage, getTotalPages, query } = usePagination();
const page = ref(getCurrentPage(true, 1));
const windowWidth = ref(0);
const route = useRoute();
const limit = 6;

// Fetching News Data
const {
  pending,
  data: news,
  refresh,
} = await useLazyAsyncData(async () => {
  let url = `https://example.com`;

  if (route.params.category != undefined) {
    url = `https://example.com`;
  } else if (route.params.tag != undefined) {
    url = `https://example.com`;
  }

  return await $fetch(url);
});

// Watching Page Pagination
watch(
  () => query.value.page,
  async (value) => {
    if (!value) {
      page.value = 1;
    }
    await refresh();
  },
);

// Handler for Window Width
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

// Handler Responsive Pagination
const getPagination = () => {
  return windowWidth.value >= 768 ? 3 : 2;
};
</script>
