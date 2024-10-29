<template>
  <div class="layout mb-24 mt-12 w-full lg:mt-16">
    <h2 class="mb-8 text-center text-2xl font-bold lg:mb-12 lg:text-3xl">
      Komitmen Kami
    </h2>
    <div class="flex flex-wrap justify-center gap-6 xl:flex-nowrap">
      <div
        v-for="content in ourCommitmentContent"
        :key="content.title"
        class="flex h-80 w-full max-w-80 flex-col items-center gap-2 rounded-xl border-2 border-[#4197CE] px-6 py-12 text-center shadow-lg"
      >
        <NuxtImg
          :src="content.image"
          :alt="content.title"
          class="h=20 w-20"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold">{{ content.title }}</h3>
        <p class="text-lg text-gray-500">{{ content.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
const ourCommitmentContent = [
  {
    image: "https://example.com",
    title: "Kualitas Material",
    desc: "Olymplast menggunakan material pilihan terbaik untuk setiap produk yang dihasilkan",
  },
  {
    image: "https://example.com",
    title: "Kualitas Desain",
    desc: "Olymplast selalu mengembangkan desain dan inovasi terkini sesuai dengan kebutuhan konsumen",
  },
  {
    image: "https://example.com",
    title: "Kualitas Fungsi",
    desc: "Semua produk Olymplast yang dihasilkan memiliki nilai fungsional tinggi untuk kepuasaan konsumen",
  },
  {
    image: "https://example.com",
    title: "Kualitas Tahan Lama",
    desc: "Olymplast fokus kepada uji standard dan kontrol yang ketat agar menciptakan produk yang tahan lama",
  },
];
</script>
