var app = new Vue({
    el: '#app',
    data: {
        message : {
            value : 'Hello Vue.js!'
        },
        list : ['Apple','Banana','Orange'],
        num : 1,
        count : 0,
        show : true,
        item : {
            id : 1,
            src : 'item1.jpg',
            alt : 'Thumbnail for item1',
            width : 200,
            height : 200
        },
        radius : 50
    },
    methods: {
        handleClick:function(event) {
            alert(event.target); //[object HTMLButtonElement]
        },
        increment:function() {
            this.count += 1
        }
    }
});

console.log(app.message);


/*
    ***** Default Options *****
    
    //#1 마운트 할 요소
    el : '#app',

    //#2 애플리케이션에서 사용할 데이터
    data : {
        message : 'Vue.js'
    },

    //#3 산출 속성
    computed : {
        computedMessage : function() {
            return this.message + '!'
        }
    },

    //#4 라이프 사이클 훅
    create : function() {
        //do something
    },

    //#5 애플리케이션에서 사용할 메서드
    methods : {
        myMyethod : function() {
            //do something
        }
    }
*/