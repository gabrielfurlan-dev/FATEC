<template>
    <div class="home flex justify-center text-white">

        <div class="texts">
            <p class="welcome">Welcome to</p>
            <h2 class="tittle">
                <b>Dummy</b>Store
            </h2>
            <p class="max-w-sm text-center text-sm">Click in “Products” on the navbar to list all our products and prices</p>
        </div>
    </div>
</template>

<script>

</script>

<style>
.home {
    position: absolute;
    width: 100%;
    height: 100%;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.74) 0%, rgba(17, 47, 153, 0.74) 100%), url("https://images.unsplash.com/photo-1550029402-226115b7c579?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80");
    background-repeat: no-repeat;
    background-size: 100%;

    width: 100%;
    backdrop-filter: blur(4.5px);
}

.texts {
    display: flex;
    margin-top: 20%;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 10px;
}
.tittle{
    font-size: 48px;
}
</style>