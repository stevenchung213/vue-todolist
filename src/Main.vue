<template>
  <div>
    <create-todo @add-todo="addTodo"></create-todo>
    <todo-list :todos="todos"></todo-list>
  </div>
</template>

<script>
  import TodoList from './components/TodoList.vue';
  import CreateTodo from './components/CreateTodo.vue';

  export default {
    components: {
      TodoList,
      CreateTodo
    },
    data() {
      return {
        todos: [{
          title: 'Todo A',
          project: 'Project A',
          done: false,
        }, {
          title: 'Todo B',
          project: 'Project B',
          done: true,
        }, {
          title: 'Todo C',
          project: 'Project C',
          done: false,
        }, {
          title: 'Todo D',
          project: 'Project D',
          done: false,
        }]
      };
    },
    methods: {
      addTodo(todo) {
        this.todos.push(todo);
        console.log(this.$data)
      }
    }
  };
</script>

<style>

</style>