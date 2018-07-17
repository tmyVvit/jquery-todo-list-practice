$(document)
    .ready(function () {
        let todoList = []

        function add(){
            let todo = {};
            todo.id = generateUUID();
            todo.content = $('.input-text').val();
            todo.complete = false;
            todoList.push(todo);
            $('.input-text').val("");
            console.log(todo);
        }

         buildTodoItem =() => {
           return todoList.map(element =>
             {return `<li id = ${element.id} class = ${element.complete?"checked":""}>
        <input name="done-todo" type="checkbox" class="done-todo"> ${element.content}</li>`})};



        $("#button").click(function () {
            add();
            render();
        });
        

        const render = ()=>{
            console.log(buildTodoItem(todoList))
            $("ol").html(buildTodoItem());
        };

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        // code to be implemented
    });