export function setVarsOnNode(el: Node, vars: Record<string, string | number>) {
  if (el.nodeType === 1) {
    const style = (el as HTMLElement).style
    for (const key in vars) {
      style.setProperty(`--${key}`, vars[key].toString())
    }
  }
  return () => removeVarsOnNode(el, Object.keys(vars))
}

export function removeVarsOnNode(el: Node, vars: string[]) {
  if (el.nodeType === 1) {
    const style = (el as HTMLElement).style
    vars.forEach(key => style.removeProperty(`--${key}`))
  }
}
