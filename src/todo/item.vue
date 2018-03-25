<template>
  <div :class="['todo-item', item.completed ? 'completed' :'', item.edited ? 'edited' :'']">
    <input type="checkbox" class="toggle" v-model="item.completed">
    <label class="todo-content" @dblclick="editItem"> {{item.content}} 
    </label>
    <input type="text" class="editorInput" @keyup.esc="cancleEdit" @keyup.13="reWrite" @blur="blurAction" :value="item.content" v-focus  >
    <button class="destroy" @click="deleteTodo"></button>
  </div> 
     

</template>

<script>
export default {
  name: 'item',
  props:{
    item:{
      type:Object,
      required:true
    }
  },
  methods:{
    deleteTodo(){
        this.$emit('deletionAction',this.item.id);
    },
    editItem(){
        this.$emit('editAction',this.item.id);
    }, 
    reWrite(e){
        this.$emit('reWriteAction',e,this.item.id);
    },
    cancleEdit(){
        this.$emit('cancleAction',this.item.id);    
    },
    blurAction(){
        this.$emit('cancleAction',this.item.id);    
    }

  },
directives: {
  focus: {
    update: function (el) {
      el.focus()
    }
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .todo-item{
        position:relative;
        background-color:#fff;
        font-size:24px;
        color:#333;
        border-bottom:1px solid rgba(0,0,0,0.06);
        &:hover{
            .destroy:after{
                content: '×'
            }
        }
        label{
            white-space: pre-line;
            word-break: break-all;
            padding: 15px 60px 15px 15px;
            margin-left: 45px;
            display: block;
            line-height: 1.2;
            transition: color 0.4s;

        }
        .editorInput{
            white-space: pre-line;
            word-break: break-all;
            box-sizing:border-box;
            font-size:20px;
            width: calc(98% - 40px);   
            padding: 10px 45px 10px 15px;
            margin: 10px 15px 10px 55px;
            display: none;
            transition: color 0.4s;
        };
        &.edited{
            label{
               display:none;

            }
            .editorInput{
                display: block;

            }

        }
        &.completed{
            label{
                color: #bbb;
                text-decoration:line-through
            }
        }
    }
    .toggle{
        text-align: center;
        width: 40px;
        height: 40px;
        line-height: 40px;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        border: none;
        appearance: none;
        outline:none;
        padding-left:5px;
        cursor:pointer;
        &:after{
            content: url('../assets/images/round.svg')
        };
        &:checked:after{
            content: url('../assets/images/done.svg')
        }
    }
    .destroy{
        position: absolute;
        top: 0px;
        right: 10px;
        bottom: 0;
        width: 40px;
        height: 40px;
        margin: auto 0;
        font-size: 30px;
        color: #cc9a9a;
        margin-bottom: 11px;
        transition: color 0.2s ease-out;
        background-color:transparent;
        appearance:none;
        border-width:0;
        cursor:pointer;
        outline:none;
    }
</style>
