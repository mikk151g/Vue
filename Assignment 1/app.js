const app = Vue.createApp({
    data() {
        return {
            name: 'Mikkel Hartig Braunstein',
            age: 20,
            favoriteNumber: Math.random(),
            imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
        };
    },
    methods: {
        generateRandomNumber() {
            return Math.random();
        },
        ageInXYears(years) {
            return this.age + years;
        }
    }
}).mount('#assignment');