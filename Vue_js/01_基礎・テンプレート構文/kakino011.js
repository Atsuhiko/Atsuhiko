new Vue({
    el: '#app',
    data: {
        message: 'aaa',
        items: [
            'こんにちは',
            'さようなら'
        ],
        input: ''
    },
    methods: {
        addItem: function(item) {
            this.items.push(item)
        },
        sayHi: function(){
            return "こんにちは！";
        }
    },
    computed: {
        upperMessage: function() {
            return this.message.toUpperCase()
        }
    }
})