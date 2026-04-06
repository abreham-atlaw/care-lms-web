<template>
	<div>
		<div class="flex">
			<input
			:class="`${inputClass} color-${textColor} bg-${bg} border border-${borderWidth} border-${borderColor} text-${textColor} rounded-${borderRadius} focus:outline-none font-medium leading-none py-3 w-full pl-3`"
			:type=effectiveType
			:value="(field.getValue() === null) ? '' : field.getValue()"
			:placeholder="placeholder"
			@change="handleInput"
			/>
			<span  class="my-auto ml-2 w-[3em] flex" v-if="type === 'password'">
				<i class="fas text-xl my-auto mr-3 cursor-pointer m-auto text-secondary" :class="(passwordVisible) ? 'fa-eye' : 'fa-eye-slash'" @click="togglePassword"></i>
			</span>

		</div>
		<div
		v-if="field.error != null"
		class="text-red-500"
		>
		{{ field.error }}
	</div>
	</div>
</template>
	
<script lang="ts">

import Field from "@/lib/forms/fields.js"
export default {
	props: {
		value: {
			type: String,
			default: null,
		},
		field: {
			type: Field<any>,
			default: null
		},
		stateSyncer: {
			type: Function,
			default: null
		},
		type: {
			type: String,
			default: "text"
		},
		bg:{
			type: String,
			default: "light"
		},
		inputClass: {
			type: String,
			default: ""
		},
		borderRadius:{
			type: String,
			default: "lg"
		},
		borderWidth:{
			type: String,
			default: "2"
		},
		borderColor: {
			type: String,
			default: "dark"
		},
		textColor: {
			type: String,
			default: "dark"
		},
		placeholder: {
			type: String,
			default: ""
		},
		processValue: {
			type: Function,
			default: null
		} 
	},
	data(){
		return {
			passwordVisible: false
		}
	},
	methods: {
		handleInput(event: any) {
			let value = event.target.value;
			if(this.processValue !== null){
				value = this.processValue(value)
			}

			this.field.setValue(value);
			if(this.stateSyncer != null){
				this.stateSyncer();
			}
		},
		togglePassword(){
			this.passwordVisible = !this.passwordVisible;
		}
	},

	computed: {
		effectiveType(){
			if(this.type !== "password"){
				return this.type;
			}
			return this.passwordVisible ? "text" : "password"; 
		}
	}
};
</script>
	@/lib/forms/fields.js