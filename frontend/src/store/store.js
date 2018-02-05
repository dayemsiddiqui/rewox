import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		isIntentUpdate: false,
		intent: {}
	},
	mutations: {
		storeIntent(state, intent){
			state.isIntentUpdate = true
			state.intent = intent
		},
		removeIntent(state){
			state.isIntentUpdate = false
			state.intent = {}
		}
	}
})