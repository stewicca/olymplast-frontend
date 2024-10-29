<template>
  <footer class="border-t-4 border-[#4197CE] bg-gray-100">
    <!-- Main Footer -->
    <div class="layout flex w-full flex-wrap justify-between gap-6 py-8">
      <!-- Footers -->
      <div v-for="data in footerData" :key="data.title" class="space-y-3">
        <!-- Footer Section Title -->
        <h3 class="text-lg font-bold lg:text-xl">{{ data.title }}</h3>
        <!-- End of Footer Section Title -->

        <!-- Footer Links -->
        <ul class="flex max-w-96 flex-col gap-1 text-sm lg:text-base">
          <!-- Render Footer if Not Instagram -->
          <li
            v-if="data.title != 'Instagram Olymplast'"
            v-for="link in data.links"
            :key="link.url"
          >
            <!-- Render Link if Have LinkTitle -->
            <NuxtLink
              v-if="link.linkTitle"
              :to="link.url"
              class="text-gray-500 hover:text-[#4197CE]"
            >
              <!-- Render Icon if Have Icon (Icon Must Be SVG Element) -->
              <span v-if="link.icon" v-html="link.icon" class="mr-1" />
              <!-- End of Render Icon -->

              {{ link.linkTitle }}
            </NuxtLink>
            <!-- End of Render Link if Have Link Title -->

            <!-- Render Link If Dont Have Link Title -->
            <NuxtLink v-else :to="link.url">
              <NuxtImg
                loading="lazy"
                :src="link.image"
                :alt="link.alt"
                class="h-auto w-28"
              />
            </NuxtLink>
            <!-- End of Render Link if Dont Have Link Title -->
          </li>
          <!-- End of Render Footer if Not Instagram -->
          <li v-else>
            <Swiper :slides-per-view="3" :loop="true" class="w-72 md:w-auto">
              <SwiperSlide v-for="link in data.links" :key="link.url"
                ><NuxtImg
                  loading="lazy"
                  :src="link.image"
                  :alt="link.alt"
                  class="h-28 w-20 md:h-36 md:w-28"
              /></SwiperSlide>
            </Swiper>
          </li>
        </ul>
        <!-- End of Footer Links -->
      </div>
      <!-- End of Footers -->
    </div>
    <!-- End of Main Footer -->

    <!-- Copyright -->
    <div
      class="layout flex h-20 w-full flex-col items-center justify-center border-t-2"
    >
      <p class="font-semibold text-gray-400">
        © <NuxtLink to="/">OLYMPLAST</NuxtLink>. All Right Reserved
      </p>
    </div>
    <!-- End of Copyright -->
  </footer>
</template>

<script lang="js" setup>
// Fetching Instagram Image
const data = await useFetch(
  `https://example.com`,
);

// Footer Data
const footerData = [
  {
    title: "Informasi",
    links: [
      { linkTitle: "Tentang", url: "/about" },
      { linkTitle: "Produk", url: "/product" },
      { linkTitle: "Berita", url: "/blog" },
      { linkTitle: "Kontak", url: "/contact" },
    ],
  },
  {
    title: "Layanan Kami",
    links: [
      { linkTitle: "Menjadi Mitra", url: "https://mitraolympic.co.id/" },
      {
        image:
          "https://asset.olymplast.co.id/IMAGES/BUTTON/button-katalog-merah.webp",
        alt: "Download Product Catalog",
        url: "https://page.olymplast.co.id/katalog/",
      },
    ],
  },
  {
    title: "Lokasi Kami",
    links: [
      {
        icon: "<svg version='1.0' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64' enable-background='new 0 0 64 64' xml:space='preserve' fill='#000000' class='w-4 h-auto inline'><path fill='currentColor' d='M32,34.934L63.617,10.34C62.984,8.965,61.613,8,60,8H4c-1.613,0-2.984,0.965-3.617,2.34L32,34.934z'></path><path fill='currentColor' d='M34.457,43.156C33.734,43.719,32.867,44,32,44s-1.734-0.281-2.457-0.844L0,20.18V52c0,2.211,1.789,4,4,4h56 c2.211,0,4-1.789,4-4V20.18L34.457,43.156z'></path></svg>",
        linkTitle: "contact@olymplast.co.id",
        url: "mailto:contact@olymplast.co.id",
      },
      {
        icon: "<svg version='1.1' id='_x32_' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' xml:space='preserve' fill='currentColor' class='w-4 h-auto inline'><path d='M256,0C159.969,0,82.109,77.859,82.109,173.906c0,100.719,80.016,163.688,123.297,238.719 C246.813,484.406,246.781,512,256,512s9.188-27.594,50.594-99.375c43.297-75.031,123.297-138,123.297-238.719 C429.891,77.859,352.031,0,256,0z M256,240.406c-36.734,0-66.516-29.781-66.516-66.5c0-36.75,29.781-66.531,66.516-66.531 s66.516,29.781,66.516,66.531C322.516,210.625,292.734,240.406,256,240.406z'></path></svg>",
        linkTitle:
          "Jl. Raya Gresik-Lamongan Km.40 Desa Rejosari, Kec. Deket, Lamongan 62291",
        url: "https://maps.app.goo.gl/Rg5GUV2NxiHA6EZn8",
      },
    ],
  },
  {
    title: "Instagram Olymplast",
    links: data.data.value.data.results,
  },
];
</script>
