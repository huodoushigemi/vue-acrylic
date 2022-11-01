[![fork](https://img.shields.io/github/forks/huodoushigemi/vue-acrylic.svg?style=)](https://github.com/huodoushigemi/vue-acrylic)
[![fork](https://img.shields.io/github/stars/huodoushigemi/vue-acrylic.svg?style=)](https://github.com/huodoushigemi/vue-acrylic)

![screenshot](https://raw.githubusercontent.com/huodoushigemi/vue-acrylic/main/example/doc/demo1.png)
![screenshot](https://raw.githubusercontent.com/huodoushigemi/vue-acrylic/main/example/doc/demo2.png)

### 🌈 Demo

- https://huodoushigemi.github.io/vue-acrylic/

### 🚀 Requirements

- Chorme 76+
- Vue 3+

### ⚙️ Installation

```coffeescript
npm i -S vue-acrylic
```

### 🦄 Use in JS

```html
<h1 id="acrylic1">ACRYLIC</h1>
<h1 id="acrylic2">ACRYLIC</h1>

<script>
  import { useAcrylic } from 'vue-acrylic'

  const options1 = {
    bulr: 20,
    noiseOpacity: 1,
    noiseSize: 50
  }

  useAcrylic(document.getElementById('acrylic1'))
  useAcrylic(document.getElementById('acrylic2'), options1)
</script>
```

### 🦄 Use in Vue

```js
import { createApp } from 'vue'
import Acrylic from 'vue-acrylic'
import App from './App.vue'

createApp(App).use(Acrylic).mount('#app')
```

```html
<script setup>
  const opt = {
    bulr: 20,
    noiseOpacity: 1,
    noiseSize: 50
  }
</script>

<template>
  <div v-acrylic>Acrylic</div>
  <div v-acrylic="opt">Acrylic</div>
</template>
```

### 📄 Props

你可以选择在应用的 Acrylic 中添加颜色色调，以展示个性化设计或实现与页面其他元素之间的视觉平衡。 若要显示颜色而非灰度，你需要使用以下属性定义属于你自己的 Acrylic 画笔。

| name          | type              | default   | Description                           |
| ------------- | ----------------- | --------- | ------------------------------------- |
| blur          | MaybeRef<number>  | 30        | 模糊大小                              |
| color         | MaybeRef<string>  | #e6e6e6   | 颜色/色调覆盖层                       |
| opacity       | MaybeRef<number>  | 0.5       | 色调层不透明度                        |
| brightness    | MaybeRef<number>  | 1         | 控制可从背景穿过 Acrylic 图面的亮度   |
| saturate      | MaybeRef<number>  | 1.6       | 控制可从背景穿过 Acrylic 图面的饱和度 |
| noiseOpacity  | MaybeRef<number>  | 0.75      | 噪点不透明度                          |
| noiseSize     | MaybeRef<number>  | 30        | 噪点大小                              |
| disabled      | MaybeRef<boolean> | false     | 是否禁用 Acrylic                      |
| fallbackColor | MaybeRef<string>  | #e6e6e6e6 | 在禁用状态中替换 Acrylic 的纯色       |

### 🌈 [Inspired by Fluent Design's Acrylic Material](https://learn.microsoft.com/zh-cn/windows/apps/design/style/acrylic)

![](https://learn.microsoft.com/zh-cn/windows/apps/design/style/images/acrylic-recipe-diagram.jpg 'Acrylic')

### ⭐️ Show Your Support

Please give a ⭐️ if this project helped you!
