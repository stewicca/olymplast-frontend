<template>
  <ul v-if="total > 1" class="mt-8 flex w-full items-center gap-1">
    <li v-if="page > 1">
      <button
        type="button"
        aria-label="Move to first page"
        @click="page = 1"
        class="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-100 hover:bg-black hover:text-white"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
          class="h-[10px] w-[10px]"
        >
          <path
            d="M1136 176.142 959.87.012-.248 960.131 959.87 1920 1136 1743.87 352.136 960.131 1136 176.142Z"
          ></path>
          <path
            d="M1920 176.142 1743.87.012 783.752 960.131 1743.87 1920 1920 1743.87l-783.86-783.739L1920 176.142Z"
          ></path>
        </svg>
      </button>
    </li>
    <li v-if="page - 1 > 1">
      <button
        type="button"
        aria-label="Move to previous page"
        @click="page = page - 1"
        class="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-100 hover:bg-black hover:text-white"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          class="h-5 w-5"
        >
          <path
            d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z"
          ></path>
        </svg>
      </button>
    </li>
    <template
      v-for="prevPage in arrayCreate(prevShowCount).reverse()"
      :key="prevPage._id"
    >
      <li v-if="page - prevPage._id > 0">
        <button
          type="button"
          :aria-label="`Move to page ${page - prevPage._id}`"
          @click="page = page - prevPage._id"
          v-text="page - prevPage._id"
          class="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-100 hover:bg-black hover:text-white"
        />
      </li>
    </template>
    <li>
      <button
        type="button"
        v-text="page"
        class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4197CE] text-white transition-all duration-100 hover:bg-black"
      />
    </li>
    <template
      v-for="nextPage in arrayCreate(nextShowCount)"
      :key="nextPage._id"
    >
      <li v-if="page + nextPage._id <= total">
        <button
          type="button"
          :aria-label="`Move to page ${page + nextPage._id}`"
          @click="page = page + nextPage._id"
          v-text="page + nextPage._id"
          class="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-100 hover:bg-black hover:text-white"
        />
      </li>
    </template>
    <li v-if="page + 1 < total">
      <button
        type="button"
        aria-label="Move to next page"
        @click="page = page + 1"
        class="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-100 hover:bg-black hover:text-white"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          class="h-5 w-5"
        >
          <path
            d="M419.3 264.8l-61.8 61.8L542.9 512 357.5 697.4l61.8 61.8L666.5 512z"
          ></path>
        </svg>
      </button>
    </li>
    <li v-if="page < total">
      <button
        type="button"
        aria-label="Move to last page"
        @click="page = total"
        class="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-100 hover:bg-black hover:text-white"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
          class="h-[10px] w-[10px]"
        >
          <path
            d="M0 176.142 176.13.012l960.12 960.119L176.13 1920 0 1743.87l783.864-783.739L0 176.142Z"
          ></path>
          <path
            d="M784 176.142 960.13.012l960.12 960.119L960.13 1920 784 1743.87l783.86-783.739L784 176.142Z"
          ></path>
        </svg>
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const props = defineProps<{
  type?: "square" | "rounded";
  total: number;
  prevShowCount: number;
  nextShowCount: number;
  modelValue: number;
  query?: boolean;
  disableScrollTop?: boolean;
  idElement?: string;
}>();

const page = ref<number>(props?.modelValue);

watch(
  () => props?.modelValue,
  async (val) => {
    console.log("update");
    page.value = val;
  },
);

const emit = defineEmits<{
  (event: "update:modelValue", payload: number): void;
}>();

const { arrayCreate } = useHelpers();

if (props?.query) {
  const route = useRoute();
  const router = useRouter();

  const query = computed(() => {
    return route.query;
  });

  if (query.value.page) {
    page.value = +query.value.page || props?.modelValue;
    emit("update:modelValue", +page.value);
  }

  watch(page, (newPage) => {
    router.push({ query: { ...query.value, page: `${newPage}` } });
    emit("update:modelValue", +newPage);
    if (!props?.disableScrollTop) {
      const element = document.getElementById(props.idElement ?? "");
      if (element !== null) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });
} else {
  watch(page, (newPage) => {
    emit("update:modelValue", +newPage);
    if (!props?.disableScrollTop) {
      const element = document.getElementById(props.idElement ?? "");
      if (element !== null) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });
}
</script>
