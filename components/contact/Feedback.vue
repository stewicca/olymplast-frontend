<template>
  <div
    v-if="formFeedback === 'error'"
    class="mt-4 block w-full bg-red-500 p-3 text-white"
  >
    Telah terjadi kesalahan!
  </div>

  <div
    v-else-if="formFeedback === 'success'"
    class="mt-4 block w-full bg-green-500 p-3 text-white"
  >
    Pesan anda telah terkirim!
  </div>

  <div
    v-else-if="formFeedback === 'incomplete'"
    class="mt-4 block w-full bg-red-500 p-3 text-white"
  >
    Pastikan semua kolom terisi.
  </div>

  <div
    v-else-if="formFeedback === 'email'"
    class="mt-4 block w-full bg-red-500 p-3 text-white"
  >
    Pastikan email benar!
  </div>

  <div
    v-else-if="formFeedback === 'phone'"
    class="mt-4 block w-full bg-red-500 p-3 text-white"
  >
    Pastikan no hp benar!
  </div>
</template>

<script lang="js" setup>
const props = defineProps(["formFeedback"]);
</script>
