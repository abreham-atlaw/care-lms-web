<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Modal',

    props: {
      onClose: {
        type: Function,
        default: null
      }
    },
    methods:{
      closeModal(){
        if(this.onClose){
          this.onClose();
        }

      }
    }
});
</script>

<template>
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto" 
  >
    <div 
      class="relative w-4/5 max-h-full" 
    >
      <div 
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
        @click="closeModal"
      ></div>

      <div 
        class="relative bg-primaryDark text-light rounded-lg shadow-lg w-full" 
      >
        <button 
          type="button" 
          class="absolute top-3 right-3 text-gray-400 bg-white rounded-lg hover:bg-gray-100 p-2" 
          @click="closeModal"
        >
          <svg 
            class="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            aria-hidden="true"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6"
            />
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 6l12 12"
            />
          </svg>
        </button>

        <div class="p-6">
          <slot name="header" /> 
        </div>

        <div class="p-6">
          <slot /> 
        </div>

      </div>
    </div>
  </div>
</template>