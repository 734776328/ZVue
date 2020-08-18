<template>
  <button 
    :class="['z-button', 
      ('z-button-'+type), 
      {'z-button-disabled': disabled},
      {'z-button-not-disabled': !disabled}
    ]"
    :style="`background-color:${backgroundColor}`"
    @click="handleClick($event)"
    :disabled="disabled"
  >
      <span><slot></slot></span>
  </button>
</template>
  
<script>
export default {
  name: 'z-button',
  props: {
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    type: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
  