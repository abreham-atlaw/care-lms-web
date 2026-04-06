<script lang="ts">
import { defineComponent } from 'vue';
import {BreedingRhombusSpinner, FlowerSpinner, OrbitSpinner} from 'epic-spinners';
// import { FlowerSpinner } from 'epic-spinners/types';


export default defineComponent({

	name: "LoadingSpinner",

	props: {
		color: {
			type: String,
			default: "yellow"
		},
		size: {
			type: Number,
			default: 30
		}
	},

	components: {
		BreedingRhombusSpinner
	}
});
</script>

<template>
	<BreedingRhombusSpinner
			 :size="size"
			 :color="color"
			 />
</template>