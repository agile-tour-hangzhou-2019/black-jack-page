<template>
    <div>
        <h1> Start Play Black Jack </h1>
        <button v-on:click='getCards'>Start</button>
        <p><Card  v-for="card in cards" :key='card' :code='card'/></p>
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
            cards: ''
        }
    },
    methods: {
        getCards () {
            this.$http.get(CARD).then(response => {
                this.cards = response.data
            }, error => {
                error
            });
        }
    }
}
</script>