<template>
  <KolCustomerTestimonials />
</template>

<script lang="js" setup>
// Initialization
const route = useRoute();

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
