import { defineStore } from "pinia";
import axios from "axios";
import {computed, ref} from 'vue';

// COMPOSITION API
export const useCounterStore = defineStore('counterStore', () => {
    let count = ref(0)

    let doubleValue = computed(() => {
        return count.value **2
    })

    let increment = () => {
        count.value++
    }

    let decrement = () => {
        count.value--
    }

    let changeValue = (num) => {
        count.value = num
    }

    let getRandomValue = async () => {
        let url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new'
        let res = await axios.get(url)
        count.value = res.data
    }

    

    return {
        count,
        doubleValue,
        increment,
        decrement,
        changeValue,
        getRandomValue
    }
})



// OPTION API
// export const useCounterStore = defineStore('counterStore', {
//     state: () => ({
//         count: 4,
//     }),
//     getters:{
//         quadValue(){
//             return this.count ** 2
//         }
//     },
//     actions:{
//         increment(){
//             this.count++
//         },
//         decrement(){
//             this.count-=1
//         },
//         changeValue(num){
//             this.count = num
//         },
//         async getRandomValue(){
//                 let url = 'https://dummyjson.com/users'
//                 let res = await axios.get(url)
//                 this.count = res.data.users[5].age
//         }
//     }
    
// })