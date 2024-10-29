<template>
  <div class="layout layout mb-12 mt-8 w-full lg:mb-16">
    <div class="flex border-b-2">
      <h3
        class="border-b-2 border-black px-2 pb-2 text-2xl font-bold text-black md:text-3xl"
      >
        Kategori : {{ category }}
      </h3>
    </div>
  </div>
  <Blog />
</template>

<script setup>
const route = useRoute();

const category = route.params.category
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

const category2 = route.params.category
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join("-");

// Fetching seo data
const { data } = await useFetch(
  `https://example.com`,
);

// Initialization page seo
useHead({
  title:
    data.value.data !== null
      ? data.value.data.meta_title
      : category + " | Olymplast Plastic Furniture",
  meta: [
    { name: "author", content: "Olymplast" },
    {
      name: "description",
      content: data.value.data !== null ? data.value.data.meta_desc : category,
    },
    {
      name: "keywords",
      content: data.value.data !== null ? data.value.data.keyword : "",
    },
    { name: "robots", content: "all" },
    { property: "og:locale", content: "id" },
    {
      property: "og:title",
      content:
        data.value.data !== null
          ? data.value.data.meta_title
          : category + " | Olymplast Plastic Furniture",
    },
    {
      property: "og:description",
      content: data.value.data !== null ? data.value.data.meta_desc : category,
    },
    {
      property: "og:type",
      content: data.value.data !== null ? data.value.data.seo_type : "Website",
    },
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
    {
      name: "twitter:title",
      content:
        data.value.data !== null
          ? data.value.data.meta_title
          : category + " | Olymplast Plastic Furniture",
    },
    {
      name: "twitter:description",
      content: data.value.data !== null ? data.value.data.meta_desc : category,
    },
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
