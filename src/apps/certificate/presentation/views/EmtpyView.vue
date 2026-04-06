<script lang="ts">
import { defineComponent, ref } from 'vue';
import EmptyState from '../../application/states/emptyState';
import EmptyViewModel from '../../application/viewModels/emptyViewModel';



export default defineComponent({

	data(vm) {
		let state = ref(new EmptyState());

		return {
			state,
			viewModel: new EmptyViewModel(state.value)
		}
	},
	
})
</script>


<template>
	it worked
</template>