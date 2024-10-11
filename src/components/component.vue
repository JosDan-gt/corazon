<template>
    <div id="app">
        <h1>{{ message }}</h1>
        <button @click="changeMessage">Dale Click</button>
    </div>
</template>

<style>
h1 {
    color: #FF5733; /* Replace with your desired color */
    font-family: 'Courier New', Courier, monospace;
    font-size: 3rem;
    
    text-align: center;
}
button {
    background-color: #FF5733; /* Replace with your desired color */
    border: none;
    border-radius: 1rem;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

body {
    background-color: #000000;
}
</style>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState(['message'])
    },
    methods: {
        ...mapMutations(['setMessage']),
        changeMessage() {
            this.setMessage('QUE TENGAS UN LINDO DIA CORAZON <3');
        }
    }
};
</script>
