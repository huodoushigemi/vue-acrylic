import { reactive, Ref } from 'vue'

export const name = 'acrylic'
export const prefixCls = `x-${name}`

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
