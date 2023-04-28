<template>
  <div class="">
    <div class="p-6 text-white bg-blue-500">
      <h1>{{ appName }}</h1>
      <h2>{{ author }}</h2>
      <h3>{{ city }}</h3>
    </div>
    <hr>

    <div class="p-3 mx-3">
      <input type="text" name="todo" id="todo" v-model="newTodo" class="rounded-md  bg-gray-200 mr-4">
      <button @click="addTodo()">Adicionar</button>
    </div>

    <div class="p-6 w-[40vw]">
      <ul>
        <li v-for="todo in todos">
          {{ todo.name }}
          <select class="bg-black my-1 text-white rounded-md px-2" name="status" id="status" v-model="todo.status">
            <option value="todo">A fazer</option>
            <option value="doing">Fazendo</option>
            <option value="done">Feito</option>
          </select>
          <button style="float: right;" class="bg-red-500 text-white rounded-md px-2 mx-2" @click="removeTodo(todo.id)"> x </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';

let appName = "Introdução ao Vue.js";
let author = "Gabriel Furlan";
const city = ref("Jales/SP");

const newTodo = ref("");

const todos = reactive([
  { id: 1, name: "Estudar estrutura de dados", status: "todo" },
  { id: 2, name: "Estudar Js", status: "doing" },
  { id: 3, name: "Estudar Vue.js", status: "doing" },
]
);

let genId = 3;

const addTodo = () => {
  genId++;
  todos.push({
    id: genId, name: newTodo.value, status: "todo"
  })
  newTodo.value = "";
}

const removeTodo = (id) => {
  let index = todos.findIndex((todos) => todos.id === id);
  todos.splice(index, 1);
}

const total = reactive([{ todo: 0, doing: 0, done: 0 }])

const calc = computed(() => {
  total.done = 0;
  total.doing = 0;
  total.todo = 0;

  todos.array.forEach(el => {
    if (el.status == 'todo') {
      total.todo++;
    } else if (el.status == 'doing') {
      total.status++;
    } else
      total.done++;
  });
})

</script>

<style scoped>

</style>
