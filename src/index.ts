import { App } from 'vue'

import './style'
import { Acrylic, AcrylicProps, defaultProps, name } from './interface'
import { createHook } from './utils'

const Acrylic: Acrylic = {
  name,
  mounted(el, binding) {
    const hook = (el.__acrylicHook ||= createHook(el))
    hook.update(binding)
  },
  unmounted(el) {
    const hook = el.__acrylicHook
    el.__acrylicHook = undefined
    hook.unmount()
  },
  updated(el, binding) {
    const hook = el.__acrylicHook
    hook.update(binding)
  }
}

Acrylic.install = (app: App) => {
  app.directive(Acrylic.name, Acrylic)
}

Acrylic.setDefaultProps = (props: AcrylicProps) => {
  Object.assign(defaultProps, props)
}

export default Acrylic
