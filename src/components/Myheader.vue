<template>
  <div>
    <header id="header">
      <section class="container-head d-f">
        <a class="link-logo-head d-f" href="/">
          <figure>
            <img
              src="../assets/img/logo.9208f443.png"
              alt="logo atlas"
              class="img-logo-head"
            />
          </figure>
        </a>
        <nav class="nav-head d-f">
          <ul class="ul-head d-f">
            <li class="libar-head">
              <a class="link-meno-head" href="">زنانه</a>
            </li>
            <li class="libar-head">
              <a class="link-meno-head" href="">مردانه</a>
            </li>
            <li class="libar-head">
              <a class="link-meno-head" href="">زده دار</a>
            </li>
            <li class="libar-head">
              <a class="link-meno-head" href="">بلاگ</a>
            </li>
            <li class="libar-head">
              <router-link class="link-meno-head" to="/rahgiriposti"
                >رهگیری پستی</router-link
              >
            </li>
            <li class="libar-head">
              <router-link class="link-meno-head" to="/about"
                >درباره ما</router-link
              >
            </li>
            <li class="libar-head">
              <a class="link-meno-head" href="">تماس باما</a>
            </li>
          </ul>
        </nav>
        <div class="login-head d-f">
          <button class="butten-head">
            <a class="link-btn-head" href="">ورود / عضویت</a>
          </button>
          <button class="butten-svg-sabad">
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7729 9.30504V6.27304C15.7729 4.18904 14.0839 2.50004 12.0009 2.50004C9.91691 2.49104 8.21991 4.17204 8.21091 6.25604V6.27304V9.30504"
                stroke="#444"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.7422 21.0003H7.25778C4.90569 21.0003 3 19.0953 3 16.7453V11.2293C3 8.87933 4.90569 6.97433 7.25778 6.97433H16.7422C19.0943 6.97433 21 8.87933 21 11.2293V16.7453C21 19.0953 19.0943 21.0003 16.7422 21.0003Z"
                stroke="#444"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </section>
    </header>
  </div>
</template>
<style scoped>
#header {
  width: 100%;
  z-index: 999;
  margin-top: 20px;
  /* position: absolute; */
}
.container-head {
  width: 85%;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}
.img-logo-head {
  width: 180px;
  height: 32.73px;
}
.nav-head {
  width: 60%;
  margin-top: 7px;
  justify-content: end;
}
.ul-head {
  gap: 1.5rem;
  text-align: end;
}
.libar-head {
  font-size: 16px;
  font-weight: bold;
  position: relative;
}
.link-meno-head {
  color: rgb(85, 84, 84);
  text-decoration: none;
}
.login-head {
  gap: 8px;
}
.butten-head {
  background-color: black !important;
  padding: 5px 25px;
}
.link-btn-head {
  color: white;
  font-size: 15px;
}
.butten-svg-sabad {
  border: none;
  cursor: pointer;
  background-color: transparent;
}
.butten-svg-head svg {
  width: 27px;
  height: 27px;
}
</style>

