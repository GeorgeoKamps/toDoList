const app = Vue.createApp ({
    el: '#app',
    data() {
        return{title: 'New Todo',
        newTodo: '',
        todos: []
    }
        
    },
    methods: {
        addTodo() {
            this.todos.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo = '';
        },
        removeTodo(Todo) {
            const todoIndex = this.todos.indexOf(Todo);
            this.todos.splice(todoIndex, 1);
        },
        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;
            });
        }
    }
});

app.mount('#app');