<template>
  <div>
    <p>
      Completed Tasks: {{ todos.filter(todo => {return todo.done === true}).length }}
    </p>
    <p>
      Completed Tasks: {{ todos.filter(todo => {return todo.done === false}).length }}
    </p>
    <todo @delete-todo="deleteTodo" @complete-todo="completeTodo" v-for="(todo, i) in todos" :key="'todo' + i" :todo.sync="todo"></todo>
  </div>
</template>

<script type="text/javascript">
  import Todo from './Todo.vue';

  export default {
    props: ['todos'],
    components: {
      Todo
    },
    methods: {
      deleteTodo(todo) {
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
      },
      completeTodo(todo) {
        const todoIndex = this.todos.indexOf(todo);
        this.todos[todoIndex].done = true;
      }
    }
  };
</script>

<style>

</style>