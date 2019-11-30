<template>
    <div>
        <h1> Start Play Black Jack </h1>
        <button v-on:click='getCards'>Start</button>
        <p id="banker"><Card  v-for="card in bankercards" :key='card' :code='card'/></p>
        <p id="player"><Card  v-for="card in playercards" :key='card' :code='card'/></p>
    </div>
</template>

<script>
const CARD = 'card'
import Card from './Card.vue'
export default {
    name: 'Game',
    components: {
        Card
    },
    data () {
        return {
            bankercards: [],
            playercards: []
            
        }
    },
    methods: {
        getCards () {
            this.$http.get("startgame").then(response => {
                this.bankercards = response.data[0].cards;
                this.playercards = response.data[1].cards

            }, error => {
                error
            });
        }
    }
}
</script>