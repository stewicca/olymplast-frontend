<template>
  <header
    class="fixed top-0 z-20 w-full"
    :class="{ 'bg-[#4197CE]': scrolling }"
  >
    <!-- Navbar PC -->
    <div
      class="layout flex max-h-16 min-h-16 items-center justify-between md:max-h-24 md:min-h-24 lg:max-h-28 lg:min-h-28"
    >
      <nav class="flex items-center gap-12">
        <!-- Logo Olymplast -->
        <div
          class="flex flex-col items-center justify-center pr-4 transition-all duration-500 lg:border-r-2"
          :class="{
            'h-28 translate-x-4 border-white border-opacity-0': !scrolling,
            'h-20 border-opacity-100': scrolling,
          }"
        >
          <NuxtLink to="/"
            ><NuxtImg
              loading="lazy"
              src="https://example.com"
              alt="Olymplast"
              class="h-auto w-20 transition-all duration-500 lg:w-28"
              :class="{ 'scale-90 brightness-0 invert filter': scrolling }"
          /></NuxtLink>
        </div>
        <!-- End of Logo Olymplast -->

        <!-- Navigation List -->
        <ul class="hidden gap-8 lg:flex">
          <li v-for="{ to, content } in navContent" :key="to">
            <NuxtLink
              v-if="to === '/product'"
              :to="to"
              class="group uppercase transition-all duration-500"
              :class="{
                'text-[#4197CE] ': !scrolling,
                'text-white': scrolling,
                'font-extrabold': isProductOrCategoryActive,
                'underline-active group font-extrabold':
                  isProductOrCategoryActive && scrolling,
              }"
              :active-class="
                scrolling
                  ? 'font-extrabold group underline-active'
                  : 'font-extrabold'
              "
            >
              {{ content }}
              <div
                class="mx-auto h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full group-[.underline-active]:w-full"
              />
            </NuxtLink>
            <NuxtLink
              v-else
              :to="to"
              class="group uppercase transition-all duration-500"
              :class="{
                'text-[#4197CE]': !scrolling,
                'text-white': scrolling,
              }"
              :active-class="
                scrolling
                  ? 'font-bold group underline-active'
                  : 'font-extrabold'
              "
            >
              {{ content }}
              <div
                class="mx-auto h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full group-[.underline-active]:w-full"
              />
            </NuxtLink>
          </li>
        </ul>
        <!-- End of Navigation List -->
      </nav>

      <!-- Icon Search & Menu -->

      <!-- Icon Menu -->
      <div
        @click="toggleHamburger"
        :class="{ 'hamburger-toggle': isHamburgerOpen }"
        class="grid place-content-center lg:hidden"
      >
        <div
          class="h-[0.15rem] w-7 rounded-full transition-all duration-500 before:absolute before:h-[0.15rem] before:w-7 before:-translate-y-2 before:rounded-full before:transition-all before:duration-500 before:content-[''] after:absolute after:h-[0.15rem] after:w-7 after:translate-y-2 after:rounded-full after:transition-all after:duration-500 after:content-['']"
          :class="{
            'bg-[#4197CE] before:bg-[#4197CE] after:bg-[#4197CE]': !scrolling,
            'bg-white before:bg-white after:bg-white': scrolling,
          }"
        ></div>
      </div>
      <!-- End of Icon Menu -->

      <!-- Icon Search -->
      <div
        class="hidden flex-col items-center justify-center border-l-2 pl-8 transition-all duration-500 lg:flex"
        :class="{
          'h-28 -translate-x-4 border-white border-opacity-0': !scrolling,
          'h-20 border-opacity-100': scrolling,
        }"
      >
        <button @click="toggleSearch">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-auto w-5 transition-all duration-500"
            :class="{ 'scale-90': scrolling }"
          >
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              :stroke="scrolling ? '#ffffff' : '#4197CE'"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      <!-- End of Icon Search -->
    </div>
    <!-- End of Icon Search & Menu -->
    <!-- End of Navbar PC -->

    <!-- Navbar Mobile -->
    <div
      class="absolute top-0 z-50 flex min-h-screen w-2/3 flex-col items-center gap-6 bg-white py-8 transition-all duration-700 ease-linear md:w-2/5 lg:hidden"
      :class="{
        'left-0 opacity-100': isHamburgerOpen,
        '-left-96 opacity-0': !isHamburgerOpen,
      }"
    >
      <!-- Logo Olymplast -->
      <NuxtLink to="/"
        ><NuxtImg
          loading="lazy"
          src="https://example.com"
          alt="Olymplast"
          class="max-h-28 min-h-28 min-w-28 max-w-28 transition-all duration-500"
          :class="{
            '-z-50 opacity-0': !isHamburgerOpen,
            'opacity-100': isHamburgerOpen,
          }"
      /></NuxtLink>
      <!-- End of Logo Olymplast -->

      <!-- Navigation List -->
      <ul class="flex flex-col items-center justify-center gap-4">
        <li v-for="{ to, content } in navContent" :key="to">
          <NuxtLink
            @click="toggleHamburger"
            v-if="to === '/product'"
            :to="to"
            class="text-xl uppercase text-[#4197CE] transition-all duration-500"
            :class="{
              'font-extrabold': isProductOrCategoryActive,
              '-z-50 text-opacity-0': !isHamburgerOpen,
              'text-opacity-100': isHamburgerOpen,
            }"
            active-class="font-extrabold"
          >
            {{ content }}
          </NuxtLink>
          <NuxtLink
            @click="toggleHamburger"
            v-else
            :to="to"
            class="text-xl uppercase text-[#4197CE] transition-all duration-500"
            :class="{
              '-z-50 text-opacity-0': !isHamburgerOpen,
              'text-opacity-100': isHamburgerOpen,
            }"
            active-class="font-extrabold"
          >
            {{ content }}
          </NuxtLink>
        </li>
      </ul>
      <!-- End of Navigation List -->

      <!-- Contact -->
      <NuxtLink
        to="mailto:contact@olymplast.co.id"
        class="text-blue-500 transition-all duration-500 hover:text-blue-600"
        :class="{
          '-z-50 text-opacity-0': !isHamburgerOpen,
          'text-opacity-100': isHamburgerOpen,
        }"
      >
        contact@olymplast.co.id
      </NuxtLink>
      <!-- End of Contact -->
    </div>
    <!-- End of Navbar Mobile -->

    <!-- Blur -->
    <div
      @click="toggleHamburger"
      class="bottom-0 left-0 right-0 top-0 z-40 min-h-screen w-full bg-black bg-opacity-40 bg-blend-multiply"
      :class="{ hidden: !isHamburgerOpen, absolute: isHamburgerOpen }"
    />
    <div
      @click="toggleSearch"
      class="bottom-0 left-0 right-0 top-0 z-40 min-h-screen w-full bg-black bg-opacity-40 bg-blend-multiply"
      :class="{ hidden: !isSearchOpen, absolute: isSearchOpen }"
    />
    <!-- End Blur -->
  </header>
  <!-- Search Modal -->
  <div
    class="left-1/3 right-1/3 top-1/2 z-50"
    :class="{ hidden: !isSearchOpen, fixed: isSearchOpen }"
  >
    <form
      class="mx-auto max-w-md"
      @submit.prevent="
        $router.push({ path: '/search', query: { produk: product } })
      "
      @submit="toggleSearch"
    >
      <label
        for="default-search"
        class="sr-only mb-2 text-sm font-medium text-gray-900"
        >Search</label
      >
      <div class="relative">
        <div
          class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"
        >
          <svg
            class="h-4 w-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          v-model="product"
          type="search"
          id="default-search"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900"
          placeholder="Masukkan pencarian produk..."
        />
        <button
          type="submit"
          class="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  </div>
  <!-- End of Search Modal -->
</template>

<script lang="js" setup>
// Initialization
const product = ref("");
const route = useRoute();
const scrolling = ref(false);
const isSearchOpen = ref(false);
const isHamburgerOpen = ref(false);
// End of Initialization

// Handler For Scrolling
const handleScroll = () => {
  if (window.scrollY > 50) {
    scrolling.value = true;
  } else {
    scrolling.value = false;
  }
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  handleScroll();
  window.removeEventListener("scroll", handleScroll);
});
// End of Handler For Scrolling

// Handler For Hamburger or Icon Menu in Mobile
const toggleHamburger = (e) => {
  isHamburgerOpen.value = !isHamburgerOpen.value;
};

// Handler For Search Button
const toggleSearch = (e) => {
  isSearchOpen.value = !isSearchOpen.value;
};

// Handler For Product When Active
const isProductOrCategoryActive = computed(() => {
  const currentRoute = route.path;
  if (
    currentRoute.startsWith("/product") ||
    currentRoute.startsWith("/category") ||
    currentRoute.startsWith("/search")
  ) {
    return true;
  } else {
    return false;
  }
});
// End of Handler For Product When Active

// Navbar Content
const navContent = [
  {
    to: "/",
    content: "Home",
  },
  {
    to: "/about",
    content: "Tentang",
  },
  {
    to: "/product",
    content: "Produk",
  },
  {
    to: "/blog",
    content: "Berita",
  },
  {
    to: "/contact",
    content: "Kontak",
  },
];
// End of Navbar Content
</script>
