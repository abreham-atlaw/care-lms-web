<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
	props: {
		bg: {
			type: String,
			default: "primary"
		}
	},
	computed: {
	},
	components: {
	}
});

</script>
<template>

	<button :class="`bg-${bg} py-[0.5rem] lg:py-3 px-[3rem] lg:px-16 text-white rounded-lg lg:rounded-xl`">
		<slot></slot>
	</button>

</template>