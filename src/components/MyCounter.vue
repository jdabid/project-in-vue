<template>
  <section>
    <h3>Counter: {{counter}}</h3>
    <h3>Square: {{squareCounter}}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCounter } from '@/composables/useCounter';

interface Props {
  value: number;
}

const props= defineProps<Props>();

const {counter, squareCounter} = useCounter(10);
//import { computed, ref } from 'vue';

//const counter = ref(props.value );
//const squareCounter = computed(()=> counter.value * counter.value);
</script>

<style scoped>
.btn{
  @apply p-6 bg-blue-200 rounded hover:bg-blue-500 mr-2;
}
</style>

