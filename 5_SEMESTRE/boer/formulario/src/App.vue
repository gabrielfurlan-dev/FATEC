<template>
  <form @submit.prevent="OnSubmit">

    <div style="display: flex; flex-direction: column; width: 300px; align-items: start; padding: 20px; background-color: #111111; border-radius: 10px; margin: 20px;">

      <div style="margin-top: 10px; display: flex; justify-content: space-between; width: 100%;">
        <label style="margin-right: 10px;" for="nome">Nome</label>
        <input required type="text" style="width: 200px;" name="nome" />
      </div>

      <div style="margin-top: 10px; display: flex; justify-content: space-between; width: 100%;">
        <label style="margin-right: 10px;" for="rua">Rua</label>
        <input required type="text" style="width: 200px;" name="rua" />
      </div>

      <div style="margin-top: 10px; display: flex; justify-content: space-between; width: 100%;">
        <label style="margin-right: 10px;" for="bairro">Bairro</label>
        <input required type="text" style="width: 200px;" name="bairro" />
      </div>

      <div style="margin-top: 10px; display: flex; justify-content: space-between; width: 100%;">
        <label style="margin-right: 10px;" for="cidade">Cidade</label>
        <input required type="text" style="width: 200px;" name="cidade" />
      </div>

      <div style="margin-top: 10px; display: flex; justify-content: space-between; width: 100%;">
        <label style="margin-right: 10px;" for="uf">UF</label>
        <select required type="text" name="uf">
          <option value="AC">AC</option>
          <option value="AL">AL</option>
          <option value="AP">AP</option>
          <option value="AM">AM</option>
          <option value="BA">BA</option>
          <option value="CE">CE</option>
          <option value="DF">DF</option>
          <option value="ES">ES</option>
          <option value="GO">GO</option>
          <option value="MA">MA</option>
          <option value="MT">MT</option>
          <option value="MS">MS</option>
          <option value="MG">MG</option>
          <option value="PA">PA</option>
          <option value="PB">PB</option>
          <option value="PR">PR</option>
          <option value="PE">PE</option>
          <option value="PI">PI</option>
          <option value="RJ">RJ</option>
          <option value="RN">RN</option>
          <option value="RS">RS</option>
          <option value="RO">RO</option>
          <option value="RR">RR</option>
          <option value="SC">SC</option>
          <option value="SP">SP</option>
          <option value="SE">SE</option>
          <option value="TO">TO</option>
        </select>
      </div>
    </div>

    <button style="" type="submit">Enviar</button>
  </form>
</template>

<script setup>
function OnSubmit() {
  alert("Dados enviados para analise.")
  window.location.reload();
}

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
