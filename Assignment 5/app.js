const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue: '',
            listVisibility: true,
            tasks: []
        };
    },
    computed: {
        buttonCaption() {
            return this.listVisibility ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTaskValue);
        }
    }
});

app.mount('#assignment');