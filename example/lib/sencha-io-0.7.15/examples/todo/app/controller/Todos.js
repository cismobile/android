Ext.define('MyApp.controller.Todos', {
    extend: 'Ext.app.Controller',

    config: {
        
        /**
        * Add controls for both the text input and the todo list.
        */
        control: {


            /*
            * Listen for Sencha.io events.
            */
            "#sio": {
                authorized:"onAuth",
                usermessage:"onUserMessage",
                logout:"onLogout"
            },

            addButton: {
                tap: "addTodo"
            },
            list: {
                itemtap: "todoSelected"
            },
            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
            todoEdit: {
                change: 'onTodoChange'
            },
            saveButton: {
                tap: 'onTodoSave'
            }
        },

        refs: {
            list: "list",
            addButton: "button[action=showAdd]",
            main: 'mainview',
            saveButton: "button[action=saveTodo]",
            loginButton: "sioAuthButton",
            todoEdit: 'todoedit'
        }
    },

    /**
    *  When the application has an authentcated user.
    */
    onAuth: function(user) {
        console.log("onAuth", user);
        this.getAddButton().setDisabled(false);
        Ext.getStore('todos').sync();
        return true;
    },

    /**
    *  When the user gets a message from the application
    *  needs to call sync on the todo's store.
    */
    onUserMessage: function(sender, message) {
        var userId = sender.getUserId();
        console.log("user got a message!", arguments, userId);
        Ext.getStore('todos').sync(function() {
            console.log("todos sync callback", arguments);
        });
        return true;
    },

    /**
    * When the user logs out the application needs
    * to remove the local data from the store.
    */
    onLogout: function() {
        return true;
    },

    /**
    * Add the task to the store from the value in a textfield.  
    * Call sync on the store to push changes to sencha.io
    * After sync completes call syncCallback.
    */
    addTodo: function() {
        console.log("addTodo", arguments);
        var record = Ext.create("MyApp.model.Todo", {});
        this.recordIsNew = true;
        this.showEditor(record);
    },

    onTodoChange: function(){
        console.log("neat");
        this.getSaveButton().show();
    },


    onMainPop: function(){
        this.getAddButton().show();
        var self = this;
        setTimeout(function(){self.getLoginButton().show();}, 150);
        this.getSaveButton().hide();
    },

    onMainPush: function(){
        //this.getAddButton().show();
        console.log("push");
        this.getAddButton().hide();
        //this.getSaveButton().show();
        this.getLoginButton().hide();
    },

    todoSelected: function(list, idx, el, record){
        console.log("ar", arguments);
        this.recordIsNew = false;
        this.showEditor(record);
    },

    onTodoSave: function(){
        var record =this.editTodo.saveRecord();
        console.log("save!", record);
        var todos = Ext.getStore('todos');
        if(this.recordIsNew){
            todos.add(record);
        }
        todos.sync(Ext.bind(this.syncCallback, this));
        this.getMain().pop();
    }, 


    showEditor: function(record){

        if (!this.editTodo) {
            this.editTodo = Ext.create('MyApp.view.Edit');
        }
        console.log("setting record!", record);
        this.editTodo.setRecord(record);
        this.getMain().push(this.editTodo);
    },

    /*
    * After the store sync is complete the application needs
    * to notify the user's other devices that the store has changed.
    */
    syncCallback: function() {
        console.log("broadcast update", arguments);
        this.getApplication().sio.getUser(function(user, error) {
            if (user) {
                console.log("user", user);
                user.send({
                    message: "updated"
                },
                function() {
                    console.log("send callback");
                }
                );

            }
        });
    }



});