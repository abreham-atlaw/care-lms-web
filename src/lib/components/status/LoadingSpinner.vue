<script lang="ts">
import { defineComponent } from 'vue';
import {BreedingRhombusSpinner, FlowerSpinner, OrbitSpinner, RadarSpinner} from 'epic-spinners';
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
		RadarSpinner
	}
});
</script>

<template>
	<RadarSpinner
			 :size="size"
			 :color="color"
			 />
</template>