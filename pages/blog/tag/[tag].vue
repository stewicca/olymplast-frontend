<template>
  <div class="layout layout mb-12 mt-8 w-full lg:mb-16">
    <div class="flex border-b-2">
      <h3
        class="border-b-2 border-black px-2 pb-2 text-2xl font-bold text-black md:text-3xl"
      >
        Kategori :
        {{ tag }}
      </h3>
    </div>
  </div>
  <Blog />
</template>

<script setup>
const route = useRoute();

const tag = route.params.tag
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// Initialization page seo
useHead({
  title: tag + " | Olymplast Plastic Furniture",
  meta: [
    { name: "author", content: "Olymplast" },
    { name: "description", content: tag },
    { name: "keywords", content: "" },
    { name: "robots", content: "all" },
    { property: "og:locale", content: "id" },
    {
      property: "og:title",
      content: tag + " | Olymplast Plastic Furniture",
    },
    { property: "og:description", content: tag },
    { property: "og:type", content: "Website" },
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
      content: tag + " | Olymplast Plastic Furniture",
    },
    { name: "twitter:description", content: tag },
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
