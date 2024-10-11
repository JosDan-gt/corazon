import { createStore } from 'vuex';

const store = createStore({
    state: {
        message: 'HOLA GUAPAAAAAA!',
    },
    mutations: {
        setMessage(state, newMessage) {
            state.message = newMessage;
        }
    },
    actions: {
        // define your actions here
    },
    getters: {
        // define your getters here
    }
});

export default store;
