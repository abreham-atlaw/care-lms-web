<script lang="ts">
import { defineComponent } from 'vue';
import LoadingSpinnerVue from '../status/LoadingSpinner.vue';

export default defineComponent({
    data() {
        return {};
    },
    components: { LoadingSpinnerVue }
})
</script>
<template>
<div className="w-full h-screen flex bg-primaryDark text-secondary">
		<div class="m-auto">
			<LoadingSpinnerVue class="m-auto" color="white" :size="200"/>
			<p class="text-[200%] font-extrabold text-center mt-24">Loading...</p>
		</div>
</div>
</template>