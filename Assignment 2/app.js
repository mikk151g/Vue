const app = Vue.createApp({
    data() {
        return {
            input: '',
            confirmedInput: ''
        };
    },
    methods: {
        showAlert() {
            alert('You clicked the button!');
        },
        updateInput(event) {
            this.input = event.target.value;
        },
        updateInputOnEnter(event) {
            this.confirmedInput = event.target.value;
        }
    }
}).mount('#assignment');