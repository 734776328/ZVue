export default {
  name: 'z-row',
  componentName: 'z-row',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String
  },
  computed: {
    style () {
      const ret = {}
      if (this.gutter) {
        ret.marginRight = ret.marginLeft = `-${this.gutter / 2}px`
      }
      return ret
    }
  },
  render (h) {
    return h(this.tag, {
      class: [
        'z-row',
        {
          'flex': this.type === 'flex'
        }
      ],
      // style: this.style,
    }, this.$slots.default)
  }
}
