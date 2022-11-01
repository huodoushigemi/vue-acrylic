import { App, Directive, Plugin } from 'vue'

import { AcrylicProps, name } from './interface'
import { useAcrylic, setDefaultProps, UseAcrylic } from './useAcrylic'
export * from './useAcrylic'

type AcrylicHTMLElement = HTMLElement & { __acrylic: UseAcrylic }

export type Acrylic = Partial<Plugin & Directive<AcrylicHTMLElement, AcrylicProps> & { name: string; setDefaultProps: (props: AcrylicProps) => void }>

const Acrylic: Acrylic = {
  name,
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

Acrylic.install = (app: App) => {
  app.directive(Acrylic.name, Acrylic)
}

Acrylic.setDefaultProps = setDefaultProps

export default Acrylic
