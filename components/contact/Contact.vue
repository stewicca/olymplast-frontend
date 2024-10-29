<template>
  <div
    class="md:layout mb-24 flex w-full flex-col-reverse items-center gap-10 rounded-3xl bg-[#F1F3F4] p-8 md:p-12 lg:flex-row lg:gap-6 xl:h-[500px]"
  >
    <div class="h-80 w-full md:h-96 lg:h-96 lg:w-1/2">
      <iframe
        class="h-full w-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3959.058605911803!2d112.4623557!3d-7.1192072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77fa27c9dc5e41%3A0x3f07169f7937eed1!2sPT.%20Cahaya%20Bintang%20Olympic!5e0!3m2!1sid!2sid!4v1610097432911!5m2!1sid!2sid"
        frameborder="0"
      ></iframe>
    </div>
    <div class="lg:w-1/2">
      <div class="mb-4 space-y-2">
        <h2 class="text-right text-2xl font-bold uppercase lg:text-3xl">
          Contact Us
        </h2>
        <p class="text-right text-gray-400">
          Kirim pertanyaan anda ke Contact Center kami
        </p>
      </div>
      <form class="grid grid-cols-2 gap-4" @submit.prevent="submitForm">
        <input
          v-model="data.name"
          placeholder="Name"
          class="col-span-2 rounded-lg border-2 px-6 py-3 text-xl md:col-span-1 lg:col-span-2 xl:col-span-1"
        />
        <input
          v-model="data.email"
          placeholder="Email"
          class="col-span-2 rounded-lg border-2 px-6 py-3 text-xl md:col-span-1 lg:col-span-2 xl:col-span-1"
        />
        <input
          v-model="data.subject"
          placeholder="Subject"
          class="col-span-2 rounded-lg border-2 px-6 py-3 text-xl md:col-span-1 lg:col-span-2 xl:col-span-1"
        />
        <input
          v-model="data.phone"
          placeholder="Phone"
          class="col-span-2 rounded-lg border-2 px-6 py-3 text-xl md:col-span-1 lg:col-span-2 xl:col-span-1"
        />
        <textarea
          v-model="data.message"
          placeholder="Tulis Pesan Disini"
          class="col-span-2 rounded-lg border-2 px-6 py-3 text-xl"
        ></textarea>
        <button
          class="w-fit rounded-lg bg-[#4197CE] px-4 py-2 text-xl text-white"
          type="submit"
        >
          {{ isLoading ? "Loading..." : "Submit" }}
        </button>
      </form>
      <ContactFeedback :form-feedback="formFeedback" />
    </div>
  </div>
</template>

<script lang="js" setup>
// Initialization
const data = ref({
  name: "",
  email: "",
  subject: "",
  phone: "",
  message: "",
});
const success = ref(true);
const isLoading = ref(false);
const formFeedback = ref(null);

async function submitForm() {
  isLoading.value = true;
  formFeedback.value = null;

  if (
    !data.value.email.trim() ||
    !data.value.message.trim() ||
    !data.value.name.trim() ||
    !data.value.phone.trim() ||
    !data.value.subject.trim()
  ) {
    formFeedback.value = "incomplete";
    isLoading.value = false;
    return;
  }

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(data.value.email.trim())) {
    formFeedback.value = "email";
    success.value = false;
    isLoading.value = false;
    return;
  }

  const phoneRegex = /^\d+$/;
  if (!phoneRegex.test(data.value.phone.trim())) {
    formFeedback.value = "phone";
    success.value = false;
    isLoading.value = false;
    return;
  }

  try {
    await $fetch("https://example.com", {
      method: "POST",
      body: JSON.stringify(data.value),
    });

    success.value = true;
    formFeedback.value = "success";
    isLoading.value = false;
  } catch (error) {
    console.error(error);
    success.value = false;
    formFeedback.value = "error";
    isLoading.value = false;
  }
}
</script>
