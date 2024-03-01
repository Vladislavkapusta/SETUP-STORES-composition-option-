<script setup>
    import { useCounterStore } from '@/stores/CounterStore'
    import { ref } from 'vue';

    const CounterStore = useCounterStore()
    const inputValue = ref('')

    function handle(){
        CounterStore.changeValue(+inputValue.value)
    }
    function random(){
        CounterStore.getRandomValue()
    }
</script>

<template>
    <div>
        <h2>Counter</h2>
        <button @click="CounterStore.decrement">-</button>
        <b>{{ CounterStore.count }}</b>
        <button @click="CounterStore.increment">+</button>
        <h2>Square Value (getters)</h2>
        <b>{{ CounterStore.doubleValue }}</b>
    </div>
    <div>
        <input v-model="inputValue" type="number">
        <button @click="handle">Change Value</button>
        <button @click="random">Get Random Value</button>
    </div>
</template>