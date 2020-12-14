const app = Vue.createApp({
    data() {
        return {
            numberValue: 0
        };
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function() {
                that.numberValue = 0;
            }, 5000);
        }
    },
    computed: {
        result() {
            if (this.numberValue < 37) {
                return 'Not there yet';
            }
            else if (this.numberValue > 37) {
                return 'Too much!';
            }
            else {
                return this.numberValue;
            }
        }
    },
    methods: {
        incrementResult(number) {
            console.log('Incrementing number');
            this.numberValue += number;
        }
    }
});

app.mount('#assignment');