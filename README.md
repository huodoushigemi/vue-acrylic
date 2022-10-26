## [<u>什么是亚克力</u>](https://learn.microsoft.com/zh-cn/windows/apps/design/style/acrylic)

![](https://learn.microsoft.com/zh-cn/windows/apps/design/style/images/acrylic-recipe-diagram.jpg "Acrylic")

## 如何设计 Acrylic

我们微调 Acrylic 的关键组件以凸显其独特外观和属性。 我们从半透明度、模糊和噪点设置开始，为平滑图面增添视觉深度和维度。 我们添加了排除混合模式层，以确保放置在 Acrylic 背景上的 UI 的对比度和可读性。 最后，我们添加了各种颜色色调，以供用户进行个性化设置。 这些图层协同作用，形成了全新的实用材料。

### **Requirements**

- Chorme 76+
- Vue 3+
- Vue 2.7+

### **Install**

```coffeescript
npm i -S vue-acrylic
```

### **Use in JS**

```html
<h1 id="acrylic1">REVEAL EFFECT</h1>
<h1 id="acrylic2">REVEAL EFFECT</h1>

<script>
  import { useAcrylic } from "vue-reveal-effect";

  const options1 = {
    borderWidth: 4,
    borderColor: 'rgba(255, 0, 0, 40%)',
    borderSize: 40,
    bgSize: 40
    bgColor: '#00a1ff'
  }

  useAcrylic(document.getElementById("acrylic1"));
  useAcrylic(document.getElementById("acrylic2"), options1);
</script>
```

### **Use in Vue**

```js
import { createApp } from "vue";
import Acrylic from "vue-acrylic";
import App from "./App.vue";

createApp(App).use(Acrylic).mount("#app");
```

```html
<template>
  <div class="bg">
    <div class="block" v-acrylic>Acrylic</div>
  </div>
</template>

<style>
  .bg {
    width: 600px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Farticle-fd.zol-img.com.cn%2Ft_s640x2000%2Fg2%2FM00%2F0C%2F0D%2FCg-4WVWVEK-IDFIJAAOhcHey0w0AAGXAgOOcVMAA6GI921.jpg&refer=http%3A%2F%2Farticle-fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668759226&t=970c9393faecd586e95975e680e420cb)
      center/cover no-repeat;
  }
  .block {
    display: inline-block;
    padding: 40px 40px;
    font-size: 2em;
  }
</style>
```

## 自定义 Acrylic 画笔

你可以选择在应用的 Acrylic 中添加颜色色调，以展示个性化设计或实现与页面其他元素之间的视觉平衡。 若要显示颜色而非灰度，你需要使用以下属性定义属于你自己的 Acrylic 画笔。

- blur：模糊大小。
- color：颜色/色调覆盖层。
- opacity：色调层不透明度。
- brightness：控制可从背景穿过 Acrylic 图面的亮度。
- saturate：控制可从背景穿过 Acrylic 图面的饱和度。
- noiseOpacity：噪点不透明度。
- noiseSize：噪点大小。
- disabled：是否禁用 Acrylic。
- fallbackColor：在禁用状态中替换 Acrylic 的纯色。

```html
<template>
  <div class="block" v-acrylic="option"></div>
</template>

<script setup>
  const option = {
    blur: "30px",
    color: "#e6e6e6",
    opacity: 0.5,
    brightness: 1,
    saturate: 1.6,
    noiseOpacity: 0.6,
    noiseSize: "30px"
  };
</script>
```
