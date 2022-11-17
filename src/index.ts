import { App, Directive } from 'vue'

import { AcrylicProps, name } from './interface'
import { UseAcrylic, useAcrylic, setDefaultProps } from './useAcrylic'
export * from './useAcrylic'

type AcrylicHTMLElement = HTMLElement & { __acrylic: UseAcrylic }

export const AcrylicDirective: Directive<AcrylicHTMLElement, AcrylicProps> = {
  mounted(el, binding) {
    el.__acrylic ||= useAcrylic(el, binding.value)
  },
  unmounted(el) {
    const acrylic = el.__acrylic
    el.__acrylic = undefined
    acrylic.unmount()
  },
  updated(el, binding) {
    const hook = el.__acrylic
    hook.update(binding.value)
  }
}

const Acrylic = {
  name,
  setDefaultProps,
  install(app: App) {
    app.directive(Acrylic.name, AcrylicDirective)
  }
}

export default Acrylic
