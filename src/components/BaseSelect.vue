<template>
  <div type="select">
    <label :for="uuid" v-if="label">{{ label }}</label>
    <select
      :id="uuid"
      :value="modelValue"
      class="field"
      onfocus="this.size=options.length"
      onblur="this.size=0"
      onchange="this.size=1; this.blur()"
      v-bind="{
        ...$attrs,
        onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
      }"
    >
    <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option == modelValue"
    >{{ option }}</option>
    </select>
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
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      required: true
    }
  },
  setup () {
    const uuid = UniqueID().getID()
    return {
      uuid
    }
  },
  methods: {
    onChange () {
    }
  }
}
</script>
<style>
select {
  cursor: pointer;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
option {
  padding: 10px 15px;
  border-radius: 35px;
}
option:hover {
  background-color: #42b983;
}
option:checked {
  background-color: #42b983;
}
</style>