function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            turnsToSpecialAttack: 0,
            mana: 10,
            winner: null,
            logMessages: []
        };
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.playerHealth + '%' };
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // A draw
                this.winner = 'draw';
            }
            else if (value <= 0) {
                // Player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // A draw
                this.winner = 'draw';
            }
            else if (value <= 0) {
                // Monster lost
                this.winner = 'player';
            }
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turnsToSpecialAttack = 0;
            this.winner = null;
            this.logMessages = [];
        },
        attackMonster() {
            const damage = getRandomValue(5, 12);
            this.monsterHealth -= damage;
            this.addLogMessage('Player', 'attack', damage);
            this.attackPlayer();
        },
        specialAttackMonster() {
            const damage = getRandomValue(10, 25);
            this.monsterHealth -= damage;
            this.addLogMessage('Player', 'special-attack', damage);
            this.turnsToSpecialAttack = getRandomValue(3, 5);
            this.attackPlayer();
        },
        healPlayer() {
            if (this.mana >= 3) {
                this.mana -= 3;
                const healing = getRandomValue(8, 20);
                if (this.playerHealth + healing > 100)
                {
                    this.playerHealth = 100;
                }
                else {
                    this.playerHealth += healing;
                }
                this.addLogMessage('Player', 'heal', healing);
                this.attackPlayer();
            }
        },
        attackPlayer() {
            const damage = getRandomValue(8, 15);
            this.playerHealth -= damage;
            this.addLogMessage('Monster', 'attack', damage);
            this.turnsToSpecialAttack--;
            this.mana++;
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});

app.mount('#game');