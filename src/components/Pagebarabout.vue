<template>
  <div>
    <section class="sectionPagebar">
      <div class="divPagebar d-f">
        <router-link to="/">
          <svg
            data-v-7ad306a1=""
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-v-7ad306a1=""
              stroke-width="1.5"
              stroke="#000"
              d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z"
            ></path>
          </svg>
        </router-link>
        <router-link to="/" class="linkPagebar">خانه</router-link>
        <span
          ><svg
            data-v-7ad306a1=""
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            fill="currentColor"
            viewBox="0 0 16 16"
            class="ml-2 bi bi-chevron-double-left"
          >
            <path
              data-v-7ad306a1=""
              fill-rule="evenodd"
              d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            ></path>
            <path
              data-v-7ad306a1=""
              fill-rule="evenodd"
              d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            ></path></svg
        ></span>
        <router-link to="/about" class="linkPagebar">درباره ما</router-link>
      </div>
    </section>
  </div>
</template>


<style scoped>
.sectionPagebar {
  width: 100%;
  background-color: #e9ecef;
  font-size: 12px;
  margin-top: 10px;
}
.divPagebar {
  margin: 0 auto;
  width: 85%;
  padding: 0.5rem 0;
  align-items: center;
  gap: 4px;
}
.linkPagebar {
  font-weight: 600;
}
</style>