new Vue({
    el: '#app',
    data: {
        colors: [
            'yellow',
            'red',
            'blue',
            'green',
            'orange',
            'white',
            'black',
            'pink',
            'purple'
        ],
        inputTxt: '',
        color: null,
        fakeColor: null
    },
    created: function() {
        this.setColor();
        this.setFakeColor();
    },
    methods: {
        setColor: function() {
            const index = this.getRandomNumber(0, this.colors.length - 1);
            this.color = this.colors[index];
        },
        setFakeColor: function() {
            const index = this.getRandomNumber(0, this.colors.length - 1);
            this.fakeColor = this.colors[index];
        },
        getRandomNumber: function(min, max) {
            return Math.floor(min + Math.random() * (max - min));
        },
        inputChanged: function() {
            const color = this.inputTxt;
            if(color === this.color) {
                this.setColor();
                this.setFakeColor();
                console.log('good');
            } else {
                console.log('bad');
            }
            this.inputTxt = '';
        }
    }
});
