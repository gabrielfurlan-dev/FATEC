<template>
    <div class="m-10 flex bg-black text-white">
        <img :src="products[0].images[0]" alt="">
        <div class="mx-10">
            <h2 class="text-3xl my-5">{{ products[0].title }}</h2>
            <h2 class="text-4xl line-through">U$ {{ products[0].price * 1.3 }}</h2>
            <h2 class="text-7xl font-bold">U$ {{ products[0].price }}</h2>

            <p>Tempo restante: <span id="countdown" /></p>
        </div>
    </div>


    <div class="grid grid-cols-4 mt-8">
        <div class="product" v-for="product in products">
            <img :src="product.images[0]" alt="">
            <h1>{{ product.title }}</h1>
            <p>{{ product.stock }}</p>
            <h2 class="text-lg font-bold">U$ {{ product.price }}</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import apiConf from "../../../api-conf.json"
import axios from "axios"

let timer = 59;

function startTimer() {
    setInterval(function () {

        let countdown = document.getElementById("countdown");

        if(timer == 0) timer =59
        if (countdown != null)
            countdown.innerHTML = `00:${timer}`;

        timer--;

    }, 1000);
}

const baseUrl = apiConf.baseUrl;

const products = ref([])

const getAllProducts = () => {
    axios
        .get(baseUrl + "/products")
        .then((response) => {
            products.value = response.data.products
            console.log(response.data.products)
        })
        .catch((error) => {
            alert("Erro: " + JSON.stringify(error));
        })
}



onMounted(() => {
    getAllProducts()
    startTimer()
})
</script>

<style long="css" scoped>
div.product {
    position: relative;
    width: 248px;
    height: 262px;
    margin: 10px;
    margin-top: 20px;
    align-items: flex-start;
    padding: 6px 5px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
}

div.product>img {
    max-width: 248px;
    max-height: 180px;
}
</style>