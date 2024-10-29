<template>
  <div class="layout mb-12 mt-8 w-full lg:mb-16">
    <h2 class="mb-8 text-center text-2xl font-bold lg:mb-12 lg:text-3xl">
      Tentang Olymplast
    </h2>
    <div class="flex flex-col gap-6 lg:flex-row">
      <div
        class="h-64 rounded-lg bg-[url('https://example.com')] bg-cover bg-center md:h-80 lg:w-1/2 xl:h-[480px]"
      />
      <div
        class="flex flex-col gap-6 text-pretty text-justify text-lg text-gray-500 lg:w-1/2 lg:text-xl"
      >
        <p
          v-for="(content, index) in aboutOlymplastContent"
          :key="index"
          :class="{ 'indent-8': index === 0 }"
        >
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
const aboutOlymplastContent = [
  "OLYMPLAST yang hadir sebagai solusi kebutuhan perabot rumah tangga dengan bahan baku plastik untuk seluruh keluarga Indonesia diproduksi oleh PT. Cahaya Bintang Plastindo.",
  "Perusahaan ini didirikan pada tahun 2015 di kota Gresik dan melakukan ekspansi pada tahun 2018 ke kabupaten Lamongan dengan jumlah karyawan mencapai lebih dari 1,000 orang.",
  "PT. Cahaya Bintang Plastindo, merupakan anak perusahaan dari PT. Graha Multi Bintang sebagai holding company yang memegang merek-merek furniture ternama Nasional, sebagai bagian dari Olympic Furniture Group.",
  "Bagi Olymplast, rumah merupakan tempat ternyaman bagi setiap anggota keluarga dalam menghabiskan waktu nya. Tempat berbagi cinta, tempat melepaskan lelah, dan tempat yang selalu dirindukan sehingga menjadi perhatian dan prioritas kami.",
  "Kami berkomitmen dan memiliki visi untuk selalu menyediakan produk terbaik dengan konsep modern yang mempercantik rumah dan memberi manfaat keluarga Indonesia dengan perabot plastik yang berkelas dan berkualitas.",
];
</script>
