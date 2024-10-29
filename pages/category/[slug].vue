<template>
  <div class="layout flex w-full py-10">
    <ProductCategory :categories="categories" />
    <!-- Send title parameter to product -->
    <Product
      v-if="category.data.results"
      :title="categoryName"
      :categories="categories"
    />
  </div>
</template>

<script lang="js" setup>
// Initialization
const route = useRoute();

// Fetch category by slug
const { data: category } = await useAsyncData(
  async () =>
    await $fetch(
      `https://example.com`,
    ),
);

const categoryName = category.value.data.results
  ? category.value.data.results.name
  : "";

// Redirect to home page if category not found
if (!category.value.data.results) {
  navigateTo("/");
}

// Fetch categories
const { data: categories } = await useAsyncData(
  async () => await $fetch("https://example.com"),
);

// Fetching seo data
const { data } = await useFetch(
  "https://example.com",
);

// Initialization page seo
useHead({
  title: data.value.data.meta_title,
  meta: [
    { name: "author", content: "Olymplast" },
    { name: "description", content: data.value.data.meta_desc },
    { name: "keywords", content: data.value.data.keyword },
    { name: "robots", content: "all" },
    { property: "og:locale", content: "id" },
    { property: "og:title", content: data.value.data.meta_title },
    { property: "og:description", content: data.value.data.meta_desc },
    { property: "og:type", content: data.value.data.seo_type },
    {
      property: "og:url",
      content: `https://example.com${route.fullPath}`,
    },
    {
      property: "og:image",
      content:
        "https://example.com",
    },
    { name: "twitter:creator", content: "@OlympicFurnitur" },
    { name: "twitter:title", content: data.value.data.meta_title },
    { name: "twitter:description", content: data.value.data.meta_desc },
    { name: "twitter:site", content: "@OlympicFurnitur" },
    {
      name: "twitter:image",
      content:
        "https://example.com",
    },
  ],
  htmlAttrs: { lang: "id" },
  link: [
    { rel: "canonical", href: `https://example.com${route.fullPath}` },
  ],
});
</script>
