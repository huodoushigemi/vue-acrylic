import { Directive, Plugin, reactive, Ref } from 'vue'

export const name = 'acrylic'
export const prefixCls = `x-${name}`

type AcrylicHook = ReturnType<typeof createHook>
type AcrylicHTMLElement = HTMLElement & { __acrylicHook: AcrylicHook }

export type Acrylic = Partial<Plugin & Directive<AcrylicHTMLElement, AcrylicProps> & { name: string; setDefaultProps: (props: AcrylicProps) => void }>

type MaybeRef<T> = T | Ref<T>

export type AcrylicProps = Partial<{
  [K in keyof typeof defaultProps]: MaybeRef<typeof defaultProps[K]>
}>

// 默认属性
export const defaultProps = reactive({
  blur: 30,
  color: '#e6e6e6', // #333333
  opacity: 0.5,
  brightness: 1,
  saturate: 1.6,
  noiseSize: 30,
  noiseOpacity: 0.75,
  disabled: false,
  fallbackColor: '#e6e6e6e6'
})
