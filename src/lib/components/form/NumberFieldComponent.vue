<script lang="ts">

import TextFieldComponent from './TextFieldComponent.vue';


export default {
    components: {
      TextFieldComponent
    },
    inheritAttrs: false
}
</script>

<template>
    <TextFieldComponent v-bind="$attrs" type="number" :process-value="(value: string) => {return parseFloat(value);}" />
</template>
