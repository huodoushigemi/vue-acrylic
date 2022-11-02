<script setup>
import { ref, computed, watchEffect, reactive } from 'vue'

const isDark = ref(true)
const color = computed(() => (isDark.value ? '#333333' : '#e6e6e6'))

const acrylic = reactive({
  blur: 30,
  opacity: 0.6,
  brightness: 1,
  saturate: 1.6,
  noiseOpacity: 0.6,
  noiseSize: 30
})

const def = { ...acrylic }

function reset() {
  Object.assign(acrylic, def)
}
</script>

<template>
  <div style="width: 790px">
    <div class="aic">
      <label class="aic"> <input v-model="isDark" type="checkbox" /> dark </label>

      &emsp;

      <a class="aic" href="https://github.com/huodoushigemi/vue-acrylic" target="_blank">
        <img src="https://img.shields.io/github/forks/huodoushigemi/vue-acrylic.svg" />
      </a>

      &emsp;

      <a class="aic" href="https://github.com/huodoushigemi/vue-acrylic" target="_blank">
        <img src="https://img.shields.io/github/stars/huodoushigemi/vue-acrylic.svg" />
      </a>
    </div>

    <br />

    <!-- example 1 -->
    <div class="example1" :style="{ color: isDark ? '#fff' : '#333333' }">
      <div v-acrylic="{ color, opacity: 0.6 }">60%</div>
      <div v-acrylic="{ color, opacity: 1 }">100%</div>
      <div v-acrylic="{ color, opacity: 0.8 }">80%</div>
      <div v-acrylic="{ color, opacity: 0.4 }">40%</div>
      <div v-acrylic="{ color: '#ff5e00', opacity: 0.6 }">60%</div>
    </div>

    <br />

    <!-- example 2 -->
    <div class="example2" :style="{ color: isDark ? '#fff' : '#333333' }">
      <div v-acrylic="{ ...acrylic, color }"></div>
      <div v-acrylic="{ ...acrylic, color }"></div>
      <div v-acrylic="{ ...acrylic, color }"></div>
      <div v-acrylic="{ ...acrylic, color }"></div>
    </div>
  </div>

  <br />

  <div class="form">
    <button @click="reset">reset</button>
    <br />
    <br />

    <div>blur {{ acrylic.blur }}</div>
    <input v-model="acrylic.blur" type="range" min="0" max="50" />

    <div>opacity {{ (acrylic.opacity * 100).toFixed() }} %</div>
    <input v-model="acrylic.opacity" type="range" min="0" max="1" step=".01" />

    <div>brightness {{ (acrylic.brightness * 100).toFixed() }} %</div>
    <input v-model="acrylic.brightness" type="range" min="0" max="2" step=".01" />

    <div>saturate {{ (acrylic.saturate * 100).toFixed() }} %</div>
    <input v-model="acrylic.saturate" type="range" min="0" max="3" step=".01" />

    <div>noise-opacity {{ (acrylic.noiseOpacity * 100).toFixed() }} %</div>
    <input v-model="acrylic.noiseOpacity" type="range" min="0" max="1" step=".01" />

    <div>noise-size {{ acrylic.noiseSize }}</div>
    <input v-model="acrylic.noiseSize" type="range" min="0" max="100" />
  </div>
</template>

<style scoped>
.aic {
  display: flex;
  align-items: center;
}

.example1 {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 180px 100px;
  gap: 15px;
  justify-content: center;
  padding: 60px;
  background: url(./assets/bg.jpg) no-repeat center/cover;
}
.example1 > div {
  padding: 8px 12px;
}
.example1 > div:first-child {
  grid-column-start: span 4;
}

.example2 {
  display: flex;
  justify-content: center;
  padding: 120px 0;
  background: url(./assets/bg2.jpg) no-repeat center/cover;
}
.example2 > div {
  width: 100px;
  height: 100px;
  margin: 4px;
}

.form > input {
  width: 100%;
}
</style>
