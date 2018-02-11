import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		isIntentUpdate: false,
		intent: {},
		isEntityUpdate: false,
		entity: {},
	},
	mutations: {
		storeIntent(state, intent){
			state.isIntentUpdate = true
			state.intent = intent
		},
		removeIntent(state){
			state.isIntentUpdate = false
			state.intent = {}
		},
		storeEntity(state, entity){
			state.isEntityUpdate = true
			state.entity = entity
		},
		removeEntity(state){
			state.isEntityUpdate = false
			state.entity = {}
		},
	}
})