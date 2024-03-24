<template>
    <div>
        <section class="container-main">
            <div  class="searchbox">
            <div class="div-matn-search">
                <h3>به دنبال چه میگردید؟</h3>
            </div>
            <form class="search-form d-f">
                <input type="text" placeholder="جستجوکنید..." class="input-search">
                <button class="btn-search">
                    <svg  class="submit1" data-v-0a087d6e="" width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle data-v-0a087d6e="" cx="11.7666" cy="11.7666" r="8.98856" stroke="#444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle><path data-v-0a087d6e="" d="M18.0183 18.4851L21.5423 22" stroke="#444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
            </form>
            </div>
        </section>
    </div>
</template>
<style scoped>
.container-main{
    width: 90%;
    margin: 16px auto;
}
.searchbox{
    width: 98%;
    background-color: white;
    padding: 30px 30px 80px 30px;
}
.div-matn-search{
    text-align: center;
    font-size: 22px;
    color: black;
}
.search-form{
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c7c7c7;
}
.input-search{
    border: none;
    width: 100%;
    background-color: transparent;
}
.btn-search{
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>