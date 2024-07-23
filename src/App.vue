<template>
  <section>
    <h3>Counter: {{counter}}</h3>
    <h3>Square: {{squareCounter}}</h3>

    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
  </section>
</template>

<script setup lang="ts">

import { computed, ref } from 'vue';

const counter = ref(2);
const squareCounter = computed(()=> counter.value * counter.value);
</script>

