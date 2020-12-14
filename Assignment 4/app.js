const app = Vue.createApp({
    data() {
        return { 
            inputClass: '',
            paragraphVisibility: true,
            inputBackgroundColor: ''
        };
    },
    computed: {
        validClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.paragraphVisibility,
                hidden: !this.paragraphVisibility
            };
        }
    },
    methods: {
        toggleParagraphVisibility() {
            this.paragraphVisibility = !this.paragraphVisibility;
        }
    }
});

app.mount('#assignment');