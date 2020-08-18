<template>
  <div class="z-input">
    <template v-if="type === 'textarea'">
      <textarea
        type="textarea"
        :class="['z-textarea', {
          'z-input-transparent': isTransparent 
        }]"
        :rows="rows"
        :style="'width:' + (width == 'full'? '100%;' : (typeof width === 'number'? width + 'px;' : width + '%;')) 
          + 'resize:' + resize"
        v-textarea
        :value="value"
        :disabled="disabled"
        ref='textarea'
        @input="inputHandler($event.target.value)"
        @blur="$refs.inputI.style.display = 'none'"
        @focus="value && ($refs.inputI.style.display = 'block')"
      ></textarea>
    </template>
    <template v-else>
      <input
        type="text"
        :class="['z-input-text', {
          'z-input-transparent': isTransparent 
        }]"
        :value="value"
        :style="'width:' + (width == 'full'? '100%;' : (typeof width === 'number'? width + 'px;' : width + '%;'))"
        :disabled="disabled"
        ref='text'
        @input="inputHandler($event.target.value)"
        @blur="$refs.inputI.style.display = 'none'"
        @focus="value && ($refs.inputI.style.display = 'block') && (isFirstLoad = false)"
      >
    </template>
    <template>
      <span ref="inputI" v-show="!isFirstLoad && value" class="z-input-i" @click="inputHandler('')"><i>X</i></span>
    </template>
  </div>
</template>

<script>
import textareaDirective from './textareaDirective.js'
export default {
  name: 'z-input',
  props: {
    value: {
      type:[Number, String]
    },
    type: {
      type: String,
      default: 'text'
    },
    rows: {
      type: [Number, String],
      default: 2
    },
    width: {
      type: [Number, String],
      default: 'full'
    },
    resize: {
      type: String,
      default: 'both'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isTransparent: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isFirstLoad: true
    }
  },
  methods: {
    inputHandler (value) {
      this.$emit('input', value)
    },
  },
  directives: {
    textarea: textareaDirective
  },
}
</script>
