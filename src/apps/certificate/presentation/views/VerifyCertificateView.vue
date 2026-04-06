<script lang="ts">
import { defineComponent, ref } from 'vue';
import VerifyCertificateState from '../../application/states/verifyCertificateState';
import VerifyCertificateViewModel from '../../application/viewModels/verifyCertificateViewModel';
import ViewModelView from '@/lib/components/views/ViewModelView.vue';


export default defineComponent({
	
	data(){
		let state = ref(new VerifyCertificateState(this.$route.query.id as string));
		return {
			state,
			viewModel: new VerifyCertificateViewModel(state.value),
		}
	},

	components: {
		ViewModelView
	}

})


</script>
<template>

	<ViewModelView :viewModel="viewModel" :state="state">

		<div class="bg-light p-5 md:p-24">

			<div class="">
				
				<span class="text-primaryDark text-sm font-bold">VALIDATION RESULT</span>
				
				<h1 class="text-4xl text-primary font-bold mt-2">Authenticity Confirmed</h1>

				<p class="w-full md:w-1/3 mt-16">This document has been verified. The credentials presented below are current and valid.</p>

			</div>

			<div class="flex flex-wrap mt-12">

				<div class="w-full md:w-[55%] bg-white border-t-[0.6em] border-primaryDark rounded-2xl px-3 md:px-10 py-20">
					
					<div class="flex">
						<span class="bg-greyLight px-3 py-3 rounded-xl ">
							<i class="fa-solid fa-file-shield text-primary text-4xl"></i>
						</span>

						<div class="bg-greyLight rounded-xl flex text-primary ml-auto my-auto py-2 px-6">
							<i class="fa-solid fa-circle-check my-auto"></i>

							<span class="my-auto ml-4 font-bold">VERIFIED</span>
						</div>
					</div>
					

					<span class="text-grey text-xs mt-24 block font-bold">CREDENTIAL HOLDER</span>
					<h2 class="text-primary text-3xl font-bold">{{ state.certificate!.fullName }}</h2>

					<span class="text-grey text-xs mt-12 block font-bold">CERTIFICATION TITLE</span>
					<h2 class="text-primary text-xl font-bold">{{ state.certificate!.course }} </h2>

					<span class="text-grey text-xs mt-12 block font-bold">ISSUE DATE</span>
					<h2 class="text-primary text-xl font-bold">{{ state.certificate!.date.toDateString() }}</h2>

					<span class="text-grey text-xs mt-12 block font-bold">ISSUING AUTHORITY</span>
					<h2 class="text-primary text-lg font-bold">CARE HEALTH</h2>


				</div>
				
				<div class="w-full md:w-[35%] ml-[0%] md:ml-[5%] bg-greyLight p-2 md:p-10 rounded-xl">
					<h1 class="text-primary text-xl font-bold">Verification Metadata</h1>

					<div class="bg-white p-5 mt-5">
						<span class="block text-grey font-bold text-sm">CERTIFICATE ID</span>
						<span class="mt-2 block">{{ state.certificate!.id }}</span>
					</div>
				</div>
			</div>



		</div>

	</ViewModelView>

</template>


