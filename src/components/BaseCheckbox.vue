<script setup>

</script>

<template>
  <div type="checkbox">
    <input
        :id="uuid"
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        class="field"
    />
    <label :for="uuid" v-if="label">{{ label }}</label>
  </div>
</template>

<script>
import UniqueID from "@/features/UniqueID.js";

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const uuid = UniqueID().getID()
    return {
      uuid
    }
  }
}
</script>
<style scoped>
label {
  margin-left: 5px;
}
</style>