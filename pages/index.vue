<template>
  <HomeBanner />
  <HomeOurProducts />
  <HomeBestSellingProducts />
  <NuxtLink to="https://example.com">
    <NuxtImg
      src="https://example.com"
      alt="Hunian Nyaman Jadi Kenyataan"
      class="layout my-12 hidden w-full rounded-lg lg:block"
    />
  </NuxtLink>
  <HomeCustomerTestimonials />
  <HomeLatestArticlesAndNews />
</template>

<script lang="js" setup>
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
    { property: "og:url", content: "https://example.com" },
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
  link: [{ rel: "canonical", href: "https://example.com" }],
});
</script>
