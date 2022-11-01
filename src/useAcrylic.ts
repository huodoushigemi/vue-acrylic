import { unref, UnwrapRef, watch, watchEffect, watchPostEffect } from 'vue'
import tinycolor from '@ctrl/tinycolor'

import { setVarsOnNode } from './utils/useCssVars'
import { mapValues } from './utils/lodash'
import { AcrylicProps, defaultProps, prefixCls } from './interface'
import './style.css'

// =====================================================================================

export function setDefaultProps(props: AcrylicProps) {
  Object.assign(defaultProps, props)
}

// =====================================================================================

export type UseAcrylic = ReturnType<typeof useAcrylic>

export function useAcrylic(el: HTMLElement, props?: AcrylicProps) {
  let removeVarsOnNode: () => void

  // 监听默认属性变化，触发更新
  const unwatch = watchPostEffect(() => {
    update()
  })

  function update($props?: AcrylicProps) {
    const _props = mapValues({ ...defaultProps, ...props, ...$props }, unref) as { [K in keyof AcrylicProps]: UnwrapRef<AcrylicProps[K]> }
    el.classList.add(prefixCls)

    if (!_props.disabled) {
      removeVarsOnNode = setVarsOnNode(el, {
        xAcrylicBackdropFilter: `blur(${_props.blur}px) brightness(${_props.brightness}) saturate(${_props.saturate})`,
        xAcrylicBackgroundColor: tinycolor(_props.color).setAlpha(_props.opacity).toHex8String(),
        xAcrylicNoiseSize: `${_props.noiseSize}px`,
        xAcrylicNoiseOpacity: _props.noiseOpacity
      })
    } else {
      // 禁用
      removeVarsOnNode = setVarsOnNode(el, {
        xAcrylicBackdropFilter: 'unset',
        xAcrylicBackgroundColor: _props.fallbackColor,
        xAcrylicNoiseSize: 0,
        xAcrylicNoiseOpacity: 0
      })
    }
  }

  function unmount() {
    el.classList.remove(prefixCls)
    removeVarsOnNode?.()
    unwatch()
  }

  return { update, unmount }
}
