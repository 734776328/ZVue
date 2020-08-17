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
      while (parent && parent.$options.componentName !== 'z-row') {
        parent = parent.$parent
      }
      return parent && parent.gutter ? parent.gutter : 0
    }
  },
  methods: {
    setParentClearFlow () {
      // 当父元素不是z-row时，为父元素添加浮动
      let parent = this.$parent
      if (parent.$options.componentName === 'z-row') return
      parent.$el.style.overflow = 'hidden'
    }
  },
  mounted () {
    this.setParentClearFlow()
  },
  render (h) {
    // this.$parent.$options 获取的是组件的实例对象 
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