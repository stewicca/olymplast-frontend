<template>
  <div class="flex min-h-screen flex-col justify-between">
    <Navbar />
    <main class="relative mb-auto mt-16 md:mt-24 lg:mt-28">
      <slot />
    </main>
    <Footer />
  </div>
</template>
