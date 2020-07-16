export default {
  name: 'z-col',
  componentName: 'z-col',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24
    },
    
  },
  computed: {
    gutter () {
      let parent = this.$parent
      while (parent && parent.componentName !== 'z-row') {
        parent = parent.$parent
      }
      return parent && parent.gutter ? parent.gutter : 0
    }
  },
  render (h) {
    let style = {}
    let classList = []
    if (this.gutter) {
      style.paddingLeft = style.paddingRight = this.gutter / 2 + 'px'
    }
    
    classList.push(`z-col-${this.span}`)

    return h(this.tag, {
      class: ['z-col', ...classList],
      style
    }, this.$slots.default)
  },
}