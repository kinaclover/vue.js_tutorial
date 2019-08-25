var app = new Vue({
    el: '#app',
    data: {
        message : 'Hello Vue.js!',
        list : ['Apple','Banana','Orange'],
        show : true
    },
    methods: {
        handleClick:function(event) {
            alert(event.target); //[object HTMLButtonElement]
        }
    }
});

console.log(app.message);