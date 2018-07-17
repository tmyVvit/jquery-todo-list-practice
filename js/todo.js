

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
            //console.log(todo);
        }

         buildTodoItem =() => {
           return todoList.map(element =>
             {return `<li id = ${element.id} class = ${element.complete?"checked":""} >
        <input name="done-todo" type="checkbox" class="done-todo" ${element.complete?"checked=\"checked\"":""} onchange="change(event)"> ${element.content}</li>`})};


        $(document).on("click", "ol li", function () {
            console.log(this);
            console.log($(this));
            $(this).attr("contenteditable", true)
            // todoList.find(elem => elem.id === $(this)[0].id).content = $(this).val();
            // renderAll();
        .focus()
                .keypress(function (event) {
                    var keycode = (event.keyCode
                        ? event.keyCode
                        : event.which);
                    if (keycode == '13') {
                        // when editing and press enter, take off contenteditable attr and set outline
                        // none to take the focus off
                        event
                            .target
                            .blur();
                        $(this).attr('contenteditable', 'false');

                        todoList.find(element => element.id === $(this)[0].id).name = $(this).text();}

                });
        });

        $("#button").click(function () {
            add();
            renderAll();
        });



        window.change = (event)=>{
            console.log(event);

            let changeBox = event.target;
            console.log(changeBox.parentElement.id);
            console.log(changeBox);
            if($(changeBox).is(":checked")){
                todoList.find(elem=>elem.id == $(changeBox).parent()[0].id).complete = true;
            }else{
                todoList.find(elem=>elem.id == $(changeBox).parent()[0].id).complete = false;
            }
            renderAll();
        };


        const renderAll = ()=>{
            //console.log(buildTodoItem(todoList))
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