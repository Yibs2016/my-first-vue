<template>
  <div id="todo-page">
    <input type="text" placeholder="请输入你的日程" class="task-input"
    autofocus="autofocus" @keyup.13="addList" 
    >
    <item :item="item" 
      v-for="item in filteredTodo" :key="item.id"
      @deletionAction="deleteTodo" @editAction="editTodo" @reWriteAction="reWriteTodo" @cancleAction="cancleEdit"
    />
    <tabs :selection="filter" :todos="todos"
      @toggle="toggleFilter" @clearAllCompleted="ClearCompleted"
    ></tabs>
  </div>
</template>

<script>
import item from './item.vue';
import tabs from './tabs.vue';
let id = 0;
export default {
  name: 'todos',
  components: {
    item,
    tabs,
  },
  data(){
    return {
      todos: [],
      filter:'all',

    }
  },
  computed:{
    filteredTodo(){
      if(this.filter === 'all'){return this.todos};
      const completed = this.filter ==='completed' ;
      return this.todos.filter(todo => completed===todo.completed);
    }
  },
  methods:{
    addList(e){
      if(!e.target.value.trim()){return ;}

      else if( this.todos.findIndex(todo => todo.content===e.target.value.trim())>-1){
          e.target.value='';
          return;} 
      this.todos.unshift({
        id:id++,
        content:e.target.value.trim(),
        completed:false,
        edited:false,
      });
      e.target.value='';
    },
    deleteTodo(id){
      this.todos.splice(this.todos.findIndex(todo => todo.id === id),1);
    },
    editTodo(id){
      for (var value of this.todos) {
        value.edited = false;
      }
      var i = this.todos.findIndex(todo => todo.id === id);
      if(i<-1){return}
      this.todos[i].edited = true;
    },
    cancleEdit(id){
      var i = this.todos.findIndex(todo => todo.id === id);
      this.todos[i].edited = false;
      return ;
    },
    reWriteTodo(e,id){
      var i = this.todos.findIndex(todo => todo.id === id);
      if(!e.target.value.trim()){
              this.todos[i].edited = false;
        return ;}
      if(i<0){return}
      this.todos[i].content = e.target.value;
      this.todos[i].edited = false;  
    },

    toggleFilter(state){
      this.filter = state;
    },
    ClearCompleted(){
      this.todos = this.todos.filter(todo=>!todo.completed);
    },


  }
}
</script>

<style scoped>
#todo-page {
  width: 80%;
  margin: 0 auto 20px;
  background-color: #fff;
  padding:2%;
}
.task-input{
  display: block;
  width: 100%;
  box-sizing:border-box;
  border:1px solid #666;
  height: 35px;
  padding: 6px;
  line-height: 47px;
}
</style>
