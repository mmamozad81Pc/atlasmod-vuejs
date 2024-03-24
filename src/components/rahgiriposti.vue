<template>
  <div class="divBodyRahgiry">
    <div class="mainDivRahgiri">
      <div class="divRahgiri">
        <h2 class="paraghraphRahgiri">کدرهگیری پست</h2>
        <p class="matnRahgiri">
          کد های رهگیری تمامی مرسوله ها روزانه در این صفحه آپدیت می شود
        </p>
        <p class="matnRahgiri">
          شما می توانید کد رهگیری مرسوله خود را با جستوجوی
          <strong>اسم و فامیلی</strong> خود بیابید و در سامانه رهگیری
          <strong>پست</strong> پیگیری نمایید
        </p>
        <p class="matnRahgiri">
          <a href="https://tracking.post.ir/" class="linkRahgiri"
            >برای رفتن به سامانه رهگیری ملی پست اینجا کلیک کنید</a
          >
        </p>
        <h3 class="noticeRahgiri">توجه :</h3>
        <p class="matnRahgiri">
          <strong
            >لطفا توجه داشته باشید از تاریخ ثبت سفارش شما تا آپلود کد رهگیری شما
            حداقل 4 و حداکثر 7 روز کاری زمان میبرد</strong
          >
        </p>
      </div>
      <div class="divRahgiri">
        <input
          placeholder="نام خود را وارد کنید"
          type="text"
          class="formRahgiri"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.divBodyRahgiry {
  width: 100%;
  background: #fff;
}
.mainDivRahgiri {
  max-width: 85vw;
  padding: 1.5rem 0;
  margin: 0 auto;
  margin-top: 1rem !important;
}
.divRahgiri {
  margin: 0 auto;
  text-align: center;
  margin-bottom: 1.5rem;
}
.paraghraphRahgiri {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.matnRahgiri {
  margin-bottom: 1rem;
}
.noticeRahgiri {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
.linkRahgiri {
  color: blue;
}
.formRahgiri {
  width: 100%;
  border: 1px solid #c3bec9;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  border-radius: 0.25rem;
}
.formRahgiri:focus {
  border: 1px solid #495057;
}
</style>